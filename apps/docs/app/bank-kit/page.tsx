"use client";
import * as React from "react";
import { HeroTwo } from "@sol-ui/bank-kit/blocks";
import { CardsDemo } from "./cards";


export default function BankKitPage() {
  return (
    <section>
      <div className="min-h-[90%vh] pt-20 px-10 flex justify-center pb-14">
        <div>
          <h1 className="font-semibold font-serif text-4xl/[2.5rem] tracking-normal">
            Build better banking experiences
          </h1>
          <p className="text-lg/6 text-(--text-primary) py-3 text-center transition-colors">
            with our <span className="text-foreground">banking</span>{" "}
            and <span className="text-foreground">finicial</span>{" "}
            production
            <br />
            level UI and blocks
          </p>
          <div className="flex w-full items-center justify-center gap-2 mt-1 ">
            <a
              data-slot="button"
              data-variant="default"
              data-size="default"
              className="bg-background-inverse text-foreground-inverse hover:bg-(--hover-primary) active:bg-(--hover-primary) flex items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3  [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4  gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-[31px] rounded-lg"
              href="/bank-kit/overview"
            >
              <p className="pb-[2.5px]">Explore more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-arrow-right "
                data-icon="inline-end"
              >
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
        
      <div className="hidden sm:block">
        <CardsDemo/>
      </div>

      <div className="block sm:hidden w-full h-full flex-1">
      <img alt="Dashboard" 
      fetchPriority="high"
      width="2560" height="2764"  className="block h-auto w-full dark:hidden" src="/bank-dashboard-light.png"></img>
      </div>
      
      <div className=" rounded-[min(var(--radius-2xl),24px)] border mx-10  pt-5 my-10 relative">
        <div className=" mx-[10%]">
          <HeroTwo />
        </div>
      </div> 


      
    </section>
  );
}










