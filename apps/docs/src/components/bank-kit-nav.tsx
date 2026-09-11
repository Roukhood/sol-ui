"use client";
import Link from "next/link";
import SolUINameLogoElement from "./solui-logo-element";
import ThemeToggle from "./theme-toggle";
import { GithubIcon } from "./icons";
import { IconMenu3 } from "@tabler/icons-react";
import * as React from "react";
import { Button } from "@sol-ui/components";
function BankKitNav() {
  const [isView, setIsView] = React.useState(false);
  return (
    <nav className="border border-l-0 border-r-0 border-t-0 border-b sticky top-0 bg-white/90 dark:bg-black/90 z-50">
      <div className="py-4 md:px-8 px-4">
        {/* desktop nav */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between ">
            {/* solui name logo  */}
            <SolUINameLogoElement/>
            <div className="flex items-center justify-between gap-3">
              <Link href="/bank-kit">
                <p data-slot="nav-link" className=" text-(--text-primary) text-sm hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground  select-none transition-all">
                  Home
                </p>
              </Link>
              <Link href="/bank-kit/components">
                <p data-slot="nav-link" className=" text-(--text-primary) text-sm hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground  select-none transition-all">
                  Components
                </p>
              </Link>
              <Link href="/docs/Installation">
                <p data-slot="nav-link" className=" text-(--text-primary) text-sm hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground select-none transition-all">
                  Blocks
                </p>
              </Link>
              <Link
                className="p-1 rounded-lg "
                href="https://github.com/satish-solera/sol-ui">
                <span className="sr-only">github</span>
                <GithubIcon  size={20}/>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* smaller devices nav */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between ">
            <SolUINameLogoElement/>
            <div className="">
              <Button
                aria-label="hamburger-icon"
                className="text-24 font-semibold border py-2 px-3 rounded-[4px] w-10 h-10  flex items-center justify-center "
                onClick={() => setIsView((prev) => !prev)}
              >
                <span
                  className="sr-only"
                >
                  hamburger
                </span>
                  <IconMenu3 />
              </Button>
            </div>
          </div>
          {
            isView && <div className="absolute bg-white dark:bg-black h-40 w-full border right-1 top-20 pl-3  ">
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/docs/Installation">
                  <p className="text-24 font-medium group-hover:-translate-y-px transition-all ease-linear  ">
                    Docs
                  </p>
                </Link>
                <Link href="https://github.com/satish-solera/sol-ui">
                  <p className="text-24 font-medium group-hover:-translate-y-px transition-all ease-linear  ">
                    Github
                  </p>
                </Link>
                <ThemeToggle />
              </div>
            </div>
          }
        </div>
      </div>
    </nav>
  );
}

export default BankKitNav;
