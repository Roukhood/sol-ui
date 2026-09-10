import { z } from "zod";
import { installComponents, type InstallOptions } from "@sol-ui/component-installer";
export const installComponentsInputSchema = z.object({ components: z.array(z.string().min(1)).min(1).describe("Names of Sol UI components to add, for example button or card.") });
export const installComponentsTool = {
  name: "install_components",
  description: "Add one or more Sol UI components to the current project. Use this when the user asks to add, install, or use Sol UI components. It resolves required component dependencies and safely skips files that already exist.",
  inputSchema: installComponentsInputSchema,
  execute: (input: z.infer<typeof installComponentsInputSchema>, options: Omit<InstallOptions, "components">) => installComponents({ ...options, components: input.components }),
};
