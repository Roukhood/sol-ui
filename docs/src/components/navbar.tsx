"use client";

import { IconBrandGithub, IconMoon, IconSun } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { SearchLinearIcon } from "./icons/searchIcon";
import * as React from "react";
import { SoluiNameLogo } from "./svgs";
import { GithubIcon } from "./icons";

import { Button } from "./ui/button";

// Theme Toggle Component
const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-foreground/70 hover:text-foreground "
      aria-label="Toggle theme"
    >
      {theme == "light" ? (
        <IconMoon className="w-5 h-5" />
      ) : (
        <IconSun className="w-5 h-5" />
      )}
    </button>
  );
};

const searchButton = (
  <button
    aria-label="Quick search"
    className="border px-3 border-default-200 rounded-lg text-small font-normal text-default-500 bg-transparent flex items-center py-[6px] gap-2"
    //   endContent={
    //     <Kbd
    //       className="hidden text-xs rounded-full py-0.5 px-1.5 lg:inline-block"
    //       keys={commandKey}
    //     >
    //       K
    //     </Kbd>
    //   }
  >
    <SearchLinearIcon
      className="text-base text-default-400 pointer-events-none shrink-0"
      size={16}
      strokeWidth={2}
    />
    Search
  </button>
);

function Navbar() {
  const texts = ["beta", "0.0.1"];

  const [index, setIndex] = React.useState(0);
  const [isView, setIsView] = React.useState(false);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="border border-l-0 border-r-0 border-t-0 border-b ">
      <div className="sticky top-0 py-5 md:px-8 px-4">
        {/* desktop nav */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between ">
            {/* solui name logo  */}
            

<div className="">

            <SoluiNameLogo />
</div>
            
            <div className="flex items-center justify-between gap-4">
              <Link href="/docs/Installation">
              <Button className="text-24 font-semibold border py-2 px-3 rounded-[4px] w-20 h-10 relative flex items-center justify-center group cursor-pointer">
                <p className="text-24 font-semibold group-hover:-translate-y-px transition-all ease-linear  ">
                  Docs
                </p>
              </Button>
              </Link>
              <Link href="https://github.com/satish-solera/sol-ui">
              <motion.button
                layout
                className="text-24 font-semibold border py-2 px-3 rounded-[4px] w-32 h-10   relative flex items-center bg-[#FFBB00] text-white cursor-pointer"
                onMouseEnter={() => setIsView(true)}
                onMouseLeave={() => setIsView(false)}
                >
                {!isView && <p> Solui's Github</p>}
                {isView && (
                  <motion.span
                    initial={{
                      x: 0,
                      scale: 0,
                    }}
                    animate={{
                      x: "-100%",
                      scale: [0.6, 1.02, 1],
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "linear",
                    }}
                    layout
                    className="absolute right-7 mx-auto"
                  >
                    <GithubIcon />
                  </motion.span>
                )}
              </motion.button>
                    </Link>
            <Button
                
                className="text-24 font-semibold border  py-2 px-3 rounded-[4px] size-10  flex items-center justify-center"
               
              >
                 <ThemeToggle />
              </Button>
            </div>
          </div>
        </div>

        {/* smaller devices nav */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between ">
            <SoluiNameLogo />
            <div className="">
              <motion.button
                layout
                className="text-24 font-semibold border py-2 px-3 rounded-[4px] w-10 h-10  flex items-center text-center "
                onMouseEnter={() => setIsView(true)}
                onMouseLeave={() => setIsView(false)}
              >
                -
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </nav>
   
  );
}

export default Navbar;
