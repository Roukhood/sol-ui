import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { installComponents } from "../src/index.js";

async function fixture(registry: unknown) {
  const cwd = await mkdtemp(path.join(os.tmpdir(), "solui-"));
  await mkdir(path.join(cwd, "registry/components"), { recursive: true });
  await writeFile(path.join(cwd, "solui.json"), JSON.stringify({ registry: "registry/registry.json", source: "registry", componentsDir: "app" }));
  await writeFile(path.join(cwd, "registry/registry.json"), JSON.stringify(registry));
  return cwd;
}
const entries = [
  { name: "button", files: [{ path: "components/button.tsx", target: "components/ui" }], packageDependencies: { react: "^19.0.0" } },
  { name: "card", files: [{ path: "components/card.tsx", target: "components/ui" }], dependencies: ["button"] },
];
async function sources(cwd: string) { await writeFile(path.join(cwd, "registry/components/button.tsx"), "button"); await writeFile(path.join(cwd, "registry/components/card.tsx"), "card"); }

test("installs a component and its package dependencies", async () => {
  const cwd = await fixture(entries); await sources(cwd);
  const result = await installComponents({ components: ["button"], cwd, installPackages: async (deps) => Object.keys(deps) });
  assert.deepEqual(result.installedComponents, ["button"]); assert.deepEqual(result.dependenciesInstalled, ["react"]);
  assert.equal(await readFile(path.join(cwd, "app/components/ui/button.tsx"), "utf8"), "button");
});
test("installs multiple components and their transitive dependencies once", async () => {
  const cwd = await fixture(entries); await sources(cwd);
  const result = await installComponents({ components: ["button", "card"], cwd, installPackages: async () => [] });
  assert.deepEqual(result.installedComponents, ["button", "card"]); assert.equal(result.errors.length, 0);
});
test("is idempotent when component files already exist", async () => {
  const cwd = await fixture(entries); await sources(cwd);
  await installComponents({ components: ["button"], cwd, installPackages: async () => [] }); const result = await installComponents({ components: ["button"], cwd, installPackages: async () => [] });
  assert.deepEqual(result.alreadyInstalledComponents, ["button"]); assert.deepEqual(result.filesCreated, []);
});
test("reports invalid component names without throwing", async () => {
  const cwd = await fixture(entries); await sources(cwd); const result = await installComponents({ components: ["dialog"], cwd });
  assert.match(result.errors[0].message, /not found/);
});
test("reports installation failures and leaves the component skipped", async () => {
  const cwd = await fixture([{ name: "broken", files: [{ path: "components/missing.tsx", target: "components/ui" }] }]);
  const result = await installComponents({ components: ["broken"], cwd });
  assert.equal(result.skippedComponents[0], "broken"); assert.match(result.errors[0].message, /missing/);
});
