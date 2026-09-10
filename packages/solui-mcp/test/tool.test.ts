import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { installComponentsInputSchema, installComponentsTool } from "../src/tool.js";
test("installation tool has agent-facing metadata and validates component names", () => {
  assert.match(installComponentsTool.description, /Add one or more/);
  assert.deepEqual(installComponentsInputSchema.parse({ components: ["button", "card"] }), { components: ["button", "card"] });
  assert.throws(() => installComponentsInputSchema.parse({ components: [] }));
});
test("installation tool returns the shared installer's structured result", async () => {
  const cwd = await mkdtemp(path.join(os.tmpdir(), "solui-mcp-"));
  await mkdir(path.join(cwd, "registry/components"), { recursive: true });
  await writeFile(path.join(cwd, "solui.json"), JSON.stringify({ registry: "registry/registry.json", source: "registry", componentsDir: "app" }));
  await writeFile(path.join(cwd, "registry/registry.json"), JSON.stringify([{ name: "button", files: [{ path: "components/button.tsx", target: "components/ui" }] }]));
  await writeFile(path.join(cwd, "registry/components/button.tsx"), "button");
  const result = await installComponentsTool.execute({ components: ["button", "dialog"] }, { cwd });
  assert.deepEqual(result.installedComponents, ["button"]); assert.match(result.errors[0].message, /dialog/);
});
