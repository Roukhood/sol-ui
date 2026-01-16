"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "motion/react";
import React, { useState } from "react";

const demoUrl = [
  {
    url: "https://sol-ui-krma.vercel.app/ButtonDemo",
  },
  {
    url: "https://sol-ui-krma.vercel.app/InfoBadgeDemo",
  },
  {
    url: "https://sol-ui-krma.vercel.app/ProfileCardDemo",
  },
  {
    url: "https://sol-ui-krma.vercel.app/FilterDemo",
  },
];
function AnimationThemeComponent() {
  return (
    <div className="min-h-screen">
      <div className="py-5">
        <div className="  py-0.5  rounded-[5px]  flex items-center mx-20 gap-2">
          <motion.button className=" py-2 px-3 rounded-md ring-1 ring-black/30 dark:ring-neutral-500 cursor-pointer text-black dark:text-white">
            Checkout Some UI
          </motion.button>
          <motion.button className=" py-2 px-3 rounded-md ring-1 ring-black/30 dark:ring-neutral-500 cursor-pointer  text-black dark:text-white">
            Open with Heart
          </motion.button>
        </div>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-1 mx-0.5">
        {demoUrl.map((el, id) => {
          return <ComponentCard src={el.url} key={id} />;
        })}
      </div>
    </div>
  );
}

export default AnimationThemeComponent;

export const ComponentCard = ({ src }: { src: string }) => {
  return (
    <div className="h-96 w-full  flex items-center justify-center">
      <iframe
        src={src}
        className="  h-full w-full flex items-center justify-center m-auto  rounded-[15px] p-0.5 ring-1 ring-black/10"
      ></iframe>
    </div>
  );
};
