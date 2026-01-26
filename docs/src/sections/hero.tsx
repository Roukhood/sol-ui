"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { IconCheck, IconCopy } from "@tabler/icons-react";

function Hero() {
  const [text, setText] = useState("See UI");
  return (
    <div className="mx-2 md:mx-0">
      <h1 className="block mt-2 text-muted-foreground font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-shadow-2xs ">
        Provided By Roukhood 
        
      </h1>
      <h1 className="text-4xl sm:text-2xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6 text-balance ">
        Make Your Screens Better
      </h1>
      <div className="flex items-center gap-4">
        <div className="">
          <Link href="docs/introduction">
            
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
                ease: "easeIn",
              }}
              className="py-[9px] bg-black border border-neutral-300 dark:bg-white dark:text-black max-w-30 text-white px-5 rounded-lg  tracking-tight cursor-pointer"
              onMouseEnter={() => {
                setTimeout(() => {
                  setText("Use UI");
                }, 400);
              }}
              onMouseLeave={() => setText("See UI")}
            >
              {text}
            </motion.button>
          </Link>
        </div>
        <SolUIInitCopy
          className="w-40 px-4 py-[9px] flex items-center text-center rounded-lg font-medium"
          code="npm i solui"
        />
      </div>
    </div>
  );
}

export default Hero;

function useCopy() {
  const [hasCopied, setHasCopied] = React.useState(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return { hasCopied, copy };
}

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  expandable?: boolean;
  title?: string;
  hideCopy?: boolean;
  nested?: boolean; // New prop
}

export const SolUIInitCopy = ({
  code,
  language = "bash",
  className,
  expandable = false,
  title,
  hideCopy,
  nested,
}: CodeBlockProps) => {
  const { hasCopied, copy } = useCopy();
 
  return (
    <div
      className={cn(
        "relative group/code overflow-hidden",
        // Adaptable styling: Light Mode (Standard) vs Dark Mode (Pitch Black)
        nested
          ? "border-0 bg-transparent p-0 m-0 shadow-none !rounded-none"
          : // : "rounded-xl !border-[1px] !border-neutral-200 dark:!border-neutral-900 bg-neutral-100 dark:bg-black shadow-sm  flex items-center px-2",
            "border rounded-md bg-black/5  dark:border-neutral-300 shadow-sm  flex items-center px-2",
        className,
      )}
    >
      {hideCopy ? null : title ? (
        <div className="flex items-center justify-between px-3  border-b border-neutral-300 dark:border-neutral-900 bg-white dark:bg-black rounded-t-lg">
          <button
            onClick={() => copy(code)}
            className="flex items-center justify-center w-7 h-7 rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-all"
            aria-label="Copy code"
          >
            {hasCopied ? (
              <IconCheck className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <IconCopy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      ) : hideCopy ? null : (
        <div className="absolute right-3 top-2 z-20 opacity-0 group-hover/code:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => copy(code)}
            className="flex items-center justify-center w-7 h-7 rounded-md bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md border border-black/5 dark:border-white/10 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-all active:scale-95"
            aria-label="Copy code"
          >
            {hasCopied ? (
              <IconCheck className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <IconCopy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      )}

      {hasCopied ? " Copied " : code}
    </div>
  );
};
