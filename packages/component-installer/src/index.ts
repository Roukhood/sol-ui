import { access, copyFile, mkdir, readFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { constants } from "node:fs";
import path from "node:path";
import { z } from "zod";

export const registrySchema = z.array(z.object({
  name: z.string().min(1),
  files: z.array(z.object({ path: z.string().min(1), target: z.string().min(1) })).min(1),
  dependencies: z.array(z.string()).default([]),
  packageDependencies: z.record(z.string(), z.string()).default({}),
}));
export type RegistryEntry = z.infer<typeof registrySchema>[number];
export const projectConfigSchema = z.object({
  registry: z.string().min(1),
  source: z.string().min(1),
  componentsDir: z.string().default("."),
}).strict();
export type InstallResult = { installedComponents: string[]; skippedComponents: string[]; alreadyInstalledComponents: string[]; dependenciesInstalled: string[]; filesCreated: string[]; filesModified: string[]; errors: { component: string; message: string }[] };
export type InstallOptions = { components: string[]; cwd: string; configPath?: string; installPackages?: (packages: Record<string, string>, cwd: string) => Promise<string[]> };

const emptyResult = (): InstallResult => ({ installedComponents: [], skippedComponents: [], alreadyInstalledComponents: [], dependenciesInstalled: [], filesCreated: [], filesModified: [], errors: [] });
const exists = async (file: string) => access(file, constants.F_OK).then(() => true).catch(() => false);
const execFileAsync = promisify(execFile);

export async function installPackageDependencies(packages: Record<string, string>, cwd: string) {
  const names = Object.entries(packages).map(([name, version]) => `${name}@${version}`);
  if (!names.length) return [];
  const manager = await exists(path.join(cwd, "pnpm-lock.yaml")) ? "pnpm" : await exists(path.join(cwd, "yarn.lock")) ? "yarn" : await exists(path.join(cwd, "bun.lockb")) ? "bun" : "npm";
  const args = manager === "npm" ? ["install", "--save", ...names] : ["add", ...names];
  await execFileAsync(manager, args, { cwd });
  return names;
}
const within = (root: string, candidate: string) => candidate === root || candidate.startsWith(`${root}${path.sep}`);

export async function readProjectConfig(cwd: string, configPath = "solui.json") {
  const absolute = path.resolve(cwd, configPath);
  return projectConfigSchema.parse(JSON.parse(await readFile(absolute, "utf8")));
}

export async function installComponents(options: InstallOptions): Promise<InstallResult> {
  const result = emptyResult();
  const requested = [...new Set(options.components.map((name) => name.trim()).filter(Boolean))];
  if (!requested.length) { result.errors.push({ component: "", message: "Provide at least one component name." }); return result; }
  let config: z.infer<typeof projectConfigSchema>;
  let registry: RegistryEntry[];
  try { config = await readProjectConfig(options.cwd, options.configPath); registry = registrySchema.parse(JSON.parse(await readFile(path.resolve(options.cwd, config.registry), "utf8"))); }
  catch (error) { result.errors.push({ component: "", message: error instanceof Error ? error.message : String(error) }); return result; }
  const entries = new Map(registry.map((entry) => [entry.name, entry]));
  const resolved: RegistryEntry[] = []; const visiting = new Set<string>(); const resolvedNames = new Set<string>();
  const resolve = (name: string, requestedBy: string) => {
    if (resolvedNames.has(name)) return;
    const entry = entries.get(name);
    if (!entry) { result.errors.push({ component: requestedBy, message: `Component "${name}" was not found in the configured registry.` }); return; }
    if (visiting.has(name)) { result.errors.push({ component: requestedBy, message: `Circular component dependency detected at "${name}".` }); return; }
    visiting.add(name); entry.dependencies.forEach((dependency) => resolve(dependency, requestedBy)); visiting.delete(name);
    if (!resolvedNames.has(name)) { resolvedNames.add(name); resolved.push(entry); }
  };
  requested.forEach((name) => resolve(name, name));
  const packages: Record<string, string> = {};
  for (const entry of resolved) {
    Object.assign(packages, entry.packageDependencies);
    let created = 0; let present = 0;
    for (const file of entry.files) {
      const sourceRoot = path.resolve(options.cwd, config.source); const destinationRoot = path.resolve(options.cwd, config.componentsDir);
      const source = path.resolve(sourceRoot, file.path); const destination = path.resolve(destinationRoot, file.target, path.basename(file.path));
      if (!within(sourceRoot, source) || !within(destinationRoot, destination)) { result.errors.push({ component: entry.name, message: "Registry file path escapes its configured root." }); continue; }
      if (!(await exists(source))) { result.errors.push({ component: entry.name, message: `Registry source file is missing: ${file.path}` }); continue; }
      if (await exists(destination)) { present++; continue; }
      try { await mkdir(path.dirname(destination), { recursive: true }); await copyFile(source, destination); created++; result.filesCreated.push(destination); }
      catch (error) { result.errors.push({ component: entry.name, message: error instanceof Error ? error.message : String(error) }); }
    }
    if (created) result.installedComponents.push(entry.name); else if (present === entry.files.length) result.alreadyInstalledComponents.push(entry.name); else result.skippedComponents.push(entry.name);
  }
  if (Object.keys(packages).length) {
    try { result.dependenciesInstalled = await (options.installPackages ?? installPackageDependencies)(packages, options.cwd); }
    catch (error) { result.errors.push({ component: "dependencies", message: error instanceof Error ? error.message : String(error) }); }
  }
  return result;
}
