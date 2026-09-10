#!/usr/bin/env node
import { installComponents } from "@sol-ui/component-installer";
const [command, ...components] = process.argv.slice(2);
if (command !== "add" || !components.length) { console.error("Usage: solui add <component...>"); process.exitCode = 1; }
else { const result = await installComponents({ components, cwd: process.cwd() }); console.log(JSON.stringify(result, null, 2)); if (result.errors.length) process.exitCode = 1; }
