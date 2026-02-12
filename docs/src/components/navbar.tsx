"use client";

import { IconBrandGithub, IconMoon, IconSun } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";

import * as React from "react";
import { SearchLinearIcon } from "./icons";


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
      className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 transition-colors text-foreground/70 hover:text-foreground"
      aria-label="Toggle theme"
    >
      {theme == "light" ? (
        <IconSun className="w-5 h-5" />
      ) : (
        <IconMoon className="w-5 h-5" />
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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-2 sticky top-0 z-1000 ">
      <div className=" max-w-2xl md:max-w-5xl mx-auto  py-2 flex items-center justify-between bg-black/10 dark:bg-white/30 rounded-lg transition-opacity p-1 hover:opacity-80  cursor-pointer outline-solid outline-transparent">
        <div className="flex gap-4 items-center lg:mx-20">
          {/* logo */}
          <Link href="/">
            <h1 className="text-lg md:text-2xl font-bold">SolUI</h1>
          </Link>
          <button className="border rounded-md bg-black/5 px-2 dark:border-neutral-300 relative overflow-hidden">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={texts[index]} // String keys work since texts are unique
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative h-full flex items-center justify-center text-center w-10" // Full height, centered
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </button>
        </div>

        <div className="flex lg:mx-20 gap-4 items-center">
          {/* navLinks */}
          <ul>
            <Link href="/docs/introduction">
              <li>Docs</li>
            </Link>
          </ul>
          {/* {searchButton} */}
          <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 transition-colors text-foreground/70 hover:text-foreground">
            <Link href="https://github.com/satish-solera/sol-ui">
              <IconBrandGithub size={18} />
            </Link>
          </div>
          <h1>
            <ThemeToggle />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
