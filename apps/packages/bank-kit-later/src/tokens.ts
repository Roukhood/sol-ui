/**
 * Bank kit design tokens — importable for apps, MCP, and AI handoff.
 * CSS mirrors live in `./styles.css`.
 */

export const bankKitMotion = {
  easeOut: "cubic-bezier(0.23, 1, 0.32, 1)",
  easeInOut: "cubic-bezier(0.77, 0, 0.175, 1)",
  easeDrawer: "cubic-bezier(0.32, 0.72, 0, 1)",
  durationPress: 160,
  durationPopover: 200,
  durationSheet: 280,
  durationModal: 250,
} as const;

export const bankKitColors = {
  light: {
    background: "#ffffff",
    foreground: "#0a0a0a",
    surface: "#f6f6f4",
    surfaceElevated: "#ffffff",
    muted: "#5c5c57",
    border: "#e8e8e3",
    accent: "#1d4ed8",
    accentForeground: "#ffffff",
    danger: "#b42318",
    success: "#067647",
    ring: "#1d4ed8",
  },
  dark: {
    background: "#0c0d10",
    foreground: "#f3f3f0",
    surface: "#14161b",
    surfaceElevated: "#1a1d24",
    muted: "#a3a39b",
    border: "#2a2e38",
    accent: "#60a5fa",
    accentForeground: "#0c0d10",
    danger: "#f97066",
    success: "#47cd89",
    ring: "#60a5fa",
  },
} as const;

export const bankKitRadii = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  full: "9999px",
} as const;

export const bankKitSpacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
} as const;

/** Flat export for JSON / MCP / design tools */
export const bankKitTokens = {
  motion: bankKitMotion,
  colors: bankKitColors,
  radii: bankKitRadii,
  spacing: bankKitSpacing,
  meta: {
    name: "@sol-ui/bank-kit",
    version: "0.0.0",
    features: [
      "motion-tuned",
      "sound-design",
      "agent-chat",
      "blocks",
      "dark-mode",
      "a11y",
      "rtl",
      "ai-handoff",
      "mcp",
      "token-exports",
    ] as const,
  },
} as const;

export type BankKitTokens = typeof bankKitTokens;

export function tokensToCssVariables(
  mode: "light" | "dark" = "light",
): Record<string, string> {
  const c = bankKitColors[mode];
  return {
    "--bk-background": c.background,
    "--bk-foreground": c.foreground,
    "--bk-surface": c.surface,
    "--bk-surface-elevated": c.surfaceElevated,
    "--bk-muted": c.muted,
    "--bk-border": c.border,
    "--bk-accent": c.accent,
    "--bk-accent-foreground": c.accentForeground,
    "--bk-danger": c.danger,
    "--bk-success": c.success,
    "--bk-ring": c.ring,
    "--ease-out": bankKitMotion.easeOut,
    "--ease-in-out": bankKitMotion.easeInOut,
    "--ease-drawer": bankKitMotion.easeDrawer,
    "--bk-duration-press": `${bankKitMotion.durationPress}ms`,
    "--bk-duration-popover": `${bankKitMotion.durationPopover}ms`,
    "--bk-duration-sheet": `${bankKitMotion.durationSheet}ms`,
    "--bk-duration-modal": `${bankKitMotion.durationModal}ms`,
    "--bk-radius-sm": bankKitRadii.sm,
    "--bk-radius-md": bankKitRadii.md,
    "--bk-radius-lg": bankKitRadii.lg,
    "--bk-radius-xl": bankKitRadii.xl,
  };
}
