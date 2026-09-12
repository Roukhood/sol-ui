"use client";

import Link from "next/link";
import { bankKitFeatures } from "@sol-ui/bank-kit";
import { SubHeading } from "@sol-ui/components";

export function BankKitFeatures() {
  return (
    <section
      aria-labelledby="bank-kit-features-heading"
      className=" mx-auto w-full max-w-5xl px-6 py-24 md:px-10"
    >
      <div className="mb-12 mx-auto max-w-2xl">
        <h2
          id="bank-kit-features-heading"
          className="font-serif text-3xl tracking-tight text-[var(--bk-foreground)] md:text-4xl"
        >
          Built for production banking UI
        </h2>

        <SubHeading className="mt-3">
          Motion, accessibility, agents, and tokens — the invisible details that
          make bank kit components feel finished.
        </SubHeading>
      </div>

      <ul className="mb-12 mx-auto max-w-2xl">
        {bankKitFeatures.map((feature) => {
          const body = (
            <>
              <h3 className="text-md font-medium text-[var(--bk-foreground)]">
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
              className="py-6 border-b border-[var(--border)]"
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
