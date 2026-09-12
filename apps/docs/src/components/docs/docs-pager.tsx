"use client";

import Link from "next/link";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import type { BankDocsNavItem } from "@/lib/bank-docs-nav";
import { cn } from "@/lib/utils/cn";

type DocsPagerProps = {
  previous?: BankDocsNavItem;
  next?: BankDocsNavItem;
  variant?: "header" | "footer";
};

export function DocsPager({
  previous,
  next,
  variant = "footer",
}: DocsPagerProps) {
  if (!previous && !next) return null;

  if (variant === "header") {
    return (
      <div className="flex items-center gap-1 ">
        {previous ? (
          <Link
            href={previous.url}
            aria-label={`Previous: ${previous.name}`}
            className="inline-flex size-8 items-center justify-center rounded-lg border border-(--border) transition-colors hover:bg-background-inverse/10"
          >
            <IconArrowLeft className="size-4" />
          </Link>
        ) : null}
        {next ? (
          <Link
            href={next.url}
            aria-label={`Next: ${next.name}`}
            className="inline-flex size-8 items-center justify-center rounded-lg border border-(--border) transition-colors hover:bg-background-inverse/10"
          >
            <IconArrowRight className="size-4" />
          </Link>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mt-10 grid gap-4",
        previous && next ? "grid-cols-2" : "grid-cols-1",
      )}
    >
      {previous ? (
        <Link
          href={previous.url}
          className="flex flex-col gap-1.5 rounded-lg border border-fd-border p-4 text-sm transition-colors hover:bg-background-inverse/5"
        >
          <span className="inline-flex items-center gap-1.5 font-medium">
            <IconArrowLeft className="size-4 shrink-0" />
            {previous.name}
          </span>
          <span className="text-fd-muted-foreground truncate capitalize">
            {previous.description ?? "Previous"}
          </span>
        </Link>
      ) : null}

      {next ? (
        <Link
          href={next.url}
          className={cn(
            "flex flex-col gap-1.5 rounded-lg border border-fd-border p-4 text-sm transition-colors hover:bg-background-inverse/5",
            "text-end",
            !previous && "col-span-full",
          )}
        >
          <span className="inline-flex items-center justify-end gap-1.5 font-medium">
            {next.name}
            <IconArrowRight className="size-4 shrink-0" />
          </span>
          <span className="text-fd-muted-foreground truncate capitalize">
            {next.description ?? "Next"}
          </span>
        </Link>
      ) : null}
    </div>
  );
}
