import readline from "node:readline";
import { installComponentsTool } from "./tool.js";

type Request = { id?: string | number; method: string; params?: { name?: string; arguments?: unknown } };
const write = (message: unknown) => process.stdout.write(`${JSON.stringify(message)}\n`);
const tool = { name: installComponentsTool.name, description: installComponentsTool.description, inputSchema: { type: "object", properties: { components: { type: "array", items: { type: "string" }, minItems: 1 } }, required: ["components"] } };

// A dependency-free MCP stdio transport. It implements the MCP tools/list and tools/call
// methods so it can be registered directly in any MCP-capable agent client.
for await (const line of readline.createInterface({ input: process.stdin, crlfDelay: Infinity })) {
  try {
    const request = JSON.parse(line) as Request;
    if (request.method === "initialize") write({ jsonrpc: "2.0", id: request.id, result: { protocolVersion: "2024-11-05", capabilities: { tools: {} }, serverInfo: { name: "solui", version: "0.1.0" } } });
    else if (request.method === "tools/list") write({ jsonrpc: "2.0", id: request.id, result: { tools: [tool] } });
    else if (request.method === "tools/call" && request.params?.name === tool.name) {
      const input = installComponentsTool.inputSchema.parse(request.params.arguments);
      const result = await installComponentsTool.execute(input, { cwd: process.env.SOLUI_PROJECT_ROOT ?? process.cwd() });
      write({ jsonrpc: "2.0", id: request.id, result: { content: [{ type: "text", text: JSON.stringify(result) }], structuredContent: result, isError: result.errors.length > 0 } });
    } else write({ jsonrpc: "2.0", id: request.id, error: { code: -32601, message: "Method not found" } });
  } catch (error) { write({ jsonrpc: "2.0", id: null, error: { code: -32602, message: error instanceof Error ? error.message : String(error) } }); }
}
