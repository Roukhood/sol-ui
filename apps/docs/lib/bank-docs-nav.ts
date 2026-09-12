import { componentItems } from "@sol-ui/bank-kit";

import { siteConfig } from "../config/site";

export type BankDocsNavItem = {
  name: string;
  description?: string;
  url: string;
  slugs: string[];
};

/** Sidebar order: Introduction, then registry components. */
export function getBankDocsNav(): BankDocsNavItem[] {
  return [
    {
      name: "Introduction",
      description: "Get started with bank kit",
      url: "/bank-kit/docs/bank/Installation",
      slugs: ["bank", "Installation"],
    },
    ...componentItems.map((item) => ({
      name: item.title,
      description: item.category,
      url: `/bank-kit/docs/bank/${item.slug}`,
      slugs: ["bank", item.slug],
    })),
  ];
}

export function getBankDocsNeighbours(slug: string[] | undefined) {
  const nav = getBankDocsNav();
  const currentPath = `/bank-kit/docs/${(slug ?? []).join("/")}`;
  const index = nav.findIndex((item) => item.url === currentPath);

  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: nav[index - 1],
    next: nav[index + 1],
  };
}

export function absoluteBankDocsUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl;
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}
