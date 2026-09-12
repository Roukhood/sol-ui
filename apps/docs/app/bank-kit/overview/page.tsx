"use client";

import BlockPreview from "@/src/components/docs/docs-blocks-renderer/block-preview";
import { blockItems } from "@sol-ui/bank-kit";
import { useState } from "react";

function Overview() {
  const [devices, setDevices] = useState<
    Record<string, "desktop" | "mobile" | "tablet">
  >({});

  return (
    <div className="bank-kit flex flex-col gap-10 py-8">
      <header className="mx-10 max-w-2xl">
        <h1 className="font-serif text-3xl font-semibold tracking-tight">
          Blocks and page sections
        </h1>
        <p className="mt-2 text-sm text-[var(--bk-muted)]">
          Drop-in hero and section blocks for banking product and marketing
          pages. Preview desktop, tablet, or mobile.
        </p>
      </header>

      {blockItems.map((el, id) => {
        const selectedDevice = devices[el.slug] ?? "desktop";

        return (
          <section
            className="bk-block-section mx-10"
            key={id}
            aria-label={el.title}
          >
            <div className="flex items-center justify-between border-b border-[var(--bk-border)] px-5 py-3">
              <h2 className="text-sm font-medium">{el.title}</h2>
              <div className="flex gap-1" role="group" aria-label="Preview size">
                {(["desktop", "tablet", "mobile"] as const).map((device) => (
                  <button
                    key={device}
                    type="button"
                    data-bk-press
                    aria-pressed={selectedDevice === device}
                    onClick={() =>
                      setDevices((prev) => ({ ...prev, [el.slug]: device }))
                    }
                    className={`rounded-md px-2 py-1 text-xs capitalize transition-colors ${
                      selectedDevice === device
                        ? "bg-[var(--bk-foreground)] text-[var(--bk-background)]"
                        : "text-[var(--bk-muted)] hover:bg-(--hover-secondary)"
                    }`}
                  >
                    {device}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative w-full p-5">
              <BlockPreview
                idx={el.title + "block"}
                src={el.slug}
                device={selectedDevice}
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Overview;
