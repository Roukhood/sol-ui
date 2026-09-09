"use client";

import { IconCoffee } from "@tabler/icons-react";

import Link from "next/link";

function Footer() {
  return (
    <footer className="min-h-20 h-full flex items-center border border-l-0 border-r-0 border-b-0 md:px-8 px-4">
        <div className="mt-5 md:mt-0">
            <BottomFooter />
        </div>
    </footer>
  );
}

export default Footer;

export const SocialLink = () => {
  return (
    <div className="">
      <div className="">
        <ul className="flex flex-col md:flex-row md:gap-2 md:items-center">
          <li data-slot="heading" className=" text-(--text-primary) text-sm hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground active:translate-y-px select-none transition-all">
            <Link href="/docs/introduction">docs</Link>
          </li>
          <li data-slot="heading" className=" text-(--text-primary) text-sm hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground active:translate-y-px select-none transition-all">
              <Link href="https://x.com/SatishSolera">Twitter</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const BottomFooter = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-2 items-start md:items-center ">
      <div className="flex items-center gap-1 select-none">
        <div data-slot="heading" className=" font-medium">
          Built at
        </div>
        <div data-slot="heading" className=" text-(--text-primary) text-sm">Roukhood</div>
      </div>
      
      <div className="">
        <a href="https://www.buymeacoffee.com/satishsolen">
         <div className="flex items-center gap-1">
           <div data-slot="heading" className="text-(--text-primary) text-sm flex items-center gap-2 hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground active:translate-y-px select-none transition-all whitespace-nowrap ">Coffee with me</div>
          <IconCoffee size={16} className="text-yellow-300"/>
         </div>
        </a>
      </div>

      <SocialLink/>
    </div>
  );
};
