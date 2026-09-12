export type BankKitFeature = {
  id: string;
  title: string;
  description: string;
  href?: string;
};

export const bankKitFeatures: BankKitFeature[] = [
  {
    id: "motion",
    title: "Motion tuned per component",
    description:
      "Purpose-first motion with ease-out entrances, drawer curves, and reduced-motion support.",
    href: "/bank-kit/docs/bank/payments-two",
  },
  {
    id: "sound",
    title: "Interface sound design",
    description:
      "Subtle Web Audio cues for tap, open, success, and error — muted when motion is reduced.",
    href: "/bank-kit/docs/bank/payments-two",
  },
  {
    id: "chat",
    title: "Agent and chat surfaces",
    description:
      "Payment chat bubbles and agent-ready layouts for conversational money flows.",
    href: "/bank-kit/docs/bank/payments-one",
  },
  {
    id: "blocks",
    title: "Blocks and page sections",
    description:
      "Composable hero and section blocks for banking marketing and product pages.",
    href: "/bank-kit/overview",
  },
  {
    id: "dark",
    title: "Hand-tuned dark mode",
    description:
      "Deep slate surfaces and contrast-checked accents — not a naive invert.",
  },
  {
    id: "a11y",
    title: "Keyboard, screen reader and contrast",
    description:
      "Focus rings, dialog roles, labels, and tokens tuned for readable contrast.",
  },
  {
    id: "rtl",
    title: "Right-to-left support",
    description:
      "Logical spacing and mirrored chevrons so layouts flip cleanly with dir=rtl.",
  },
  {
    id: "ai",
    title: "AI handoff for every component",
    description:
      "Copy page, view as Markdown, and open in v0, ChatGPT, or Claude from docs.",
    href: "/bank-kit/docs/bank/Installation",
  },
  {
    id: "mcp",
    title: "MCP server for your agents",
    description:
      "Install components through Sol UI MCP so coding agents can add bank kit pieces.",
    href: "/bank-kit/docs/bank/Installation",
  },
  {
    id: "tokens",
    title: "Design token exports",
    description:
      "Import bankKitTokens from @sol-ui/bank-kit for CSS variables, JSON, and tooling.",
    href: "/bank-kit/docs/bank/Installation",
  },
];
