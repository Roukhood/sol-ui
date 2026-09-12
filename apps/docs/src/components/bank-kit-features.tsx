"use client";

import Link from "next/link";
import { bankKitFeatures } from "@sol-ui/bank-kit";

export function BankKitFeatures() {
  return (
    <section
      aria-labelledby="bank-kit-features-heading"
      className="bank-kit mx-auto w-full max-w-5xl px-6 py-24 md:px-10"
    >
      <div className="mb-12 max-w-2xl">
        <h2
          id="bank-kit-features-heading"
          className="font-serif text-3xl font-semibold tracking-tight text-[var(--bk-foreground)] md:text-4xl"
        >
          Built for production banking UI
        </h2>
        <p className="mt-3 text-base text-[var(--bk-muted)]">
          Motion, accessibility, agents, and tokens — the invisible details that
          make bank kit components feel finished.
        </p>
      </div>

      <ul className="grid gap-0 border-t border-[var(--bk-border)] sm:grid-cols-2">
        {bankKitFeatures.map((feature) => {
          const body = (
            <>
              <h3 className="text-sm font-medium text-[var(--bk-foreground)]">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--bk-muted)]">
                {feature.description}
              </p>
            </>
          );

          return (
            <li
              key={feature.id}
              className="border-b border-[var(--bk-border)] py-6 sm:odd:border-e sm:px-6 sm:first:ps-0 sm:[&:nth-child(2)]:pe-0"
            >
              {feature.href ? (
                <Link
                  href={feature.href}
                  className="block rounded-md outline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--bk-ring)]"
                >
                  {body}
                </Link>
              ) : (
                body
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
