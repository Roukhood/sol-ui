"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import {  NpmSmallIcon } from "../components/icons";
import { Button } from "../components/ui/button";

function Hero() {
  const [text, setText] = useState("See UI");
  
  return (
    <section>
      <div className="pl-3 md:pl-20 min-h-screen pt-24">
        <h1 className="md:w-[700px] tracking-tight">
          <span className="font-semibold text-[30px] md:text-[54px]">
            Provided By Roukhood
          </span>
          <br />
          <span className="text-[20px] lg:text-[40px] text-cyan-900 dark:text-white/80">
            Reusable UI Blocks, Components - Make your UI faster.
          </span>
        </h1>

        <div className="mt-10 gap-4 flex items-center">
          <Link href="/docs/components/badge">
           <Button
          
          className="text-24 font-semibold border py-2 px-3 rounded-[4px] w-32 h-10   relative flex items-center justify-center bg-[#FFBB00] hover:bg-[#FFBB00]/90 text-white cursor-pointer"
          >
          <p>See UI</p>
        </Button>
          </Link>
          <Link href="https://www.npmjs.com/package/solui">
         <Button className="text-24 font-semibold border py-2 px-3 rounded-[4px]   size-10 flex items-center justify-center group cursor-pointer gap-2">
         
                
                <span className="w-5"><NpmSmallIcon/></span>
               
              </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

