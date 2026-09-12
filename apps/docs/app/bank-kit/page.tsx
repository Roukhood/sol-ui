"use client";
import * as React from "react";
import { BankKitFeatures } from "@/src/components/bank-kit-features";
import { SubHeading } from "@sol-ui/components";

const CardsDemo = React.lazy(() => import("./cards"));

export default function BankKitPage() {
  return (
    <main>
      <div className="min-h-[100%vh] py-20 px-10 flex justify-center ">
        <div>
          <h1 className="font-semibold font-serif text-4xl/[2.5rem] text-center md:text-start tracking-normal">
            Build better banking experiences
          </h1>
          <p className="text-lg/6 text-(--text-primary) py-3 text-center transition-colors">
            Production-level <span className="text-foreground">banking</span>{" "}
            and <span className="text-foreground">financial</span> <br />{" "}
            components and blocks — with a11y, agents, and tokens built in.
          </p>
          <div className="flex w-full items-center justify-center  gap-2 mt-1">
            <a
              data-slot="button"
              data-variant="default"
              data-size="default"
              className="bg-background-inverse text-foreground-inverse hover:bg-(--hover-primary) active:bg-(--hover-primary) flex items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 gap-1.5 px-2.5 h-[31px] rounded-lg"
              href="/bank-kit/docs/bank/Installation"
              target="_blank"
            >
              <p className="pb-[2.5px]">Explore docs</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="bk-chevron"
                data-icon="inline-end"
                aria-hidden
              >
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </a>
            <a
              className="flex items-center justify-center text-sm font-medium h-[31px] px-2.5 rounded-lg border border-[var(--bk-border,currentColor)] hover:bg-(--hover-secondary) transition-colors"
              href="/bank-kit/overview"
              target="_blank"
            >
              <p className="pb-[2.5px]">View blocks</p>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden sm:block relative">
        <React.Suspense fallback={null}>
          <CardsDemo />
        </React.Suspense>
      </div>
      <div className="block sm:hidden w-full h-full flex-1">
        <img
          alt="Bank kit dashboard preview"
          width={2560}
          height={2764}
          className="block h-auto w-full dark:hidden"
          src="/bank-dashboard-light.png"
        />
      </div>

      <BankKitFeatures />

      <div className="pb-30" />
      <div className="flex max-w-2xl mx-auto justify-between items-end gap-2 pb-10 ">
        <SubHeading>
          See code on{" "}
          <a href="https://github.com/Roukhood/sol-ui" target="_blank">
            <span className="text-foreground">Github</span>
          </a>
        </SubHeading>
      </div>
    </main>
  );
}
