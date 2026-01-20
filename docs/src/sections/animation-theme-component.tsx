"use client";


import { cn } from "@/lib/utils/cn";
import { motion } from "motion/react";

const demoUrl = [
  {

    docsUrl: "/docs/button",
    demoUrl: "https://sol-ui-krma.vercel.app/demo/ButtonDemo",
  },
  {
    docsUrl: "/docs/discrete-tabs",
    demoUrl: "https://sol-ui-krma.vercel.app/demo/DiscreteTabsDemo",
  },
  {
    docsUrl: "/docs/profile",
    demoUrl: "https://sol-ui-krma.vercel.app/demo/ProfileCardDemo",
  },
  {
    docsUrl: "/docs/filter",
    demoUrl: "https://sol-ui-krma.vercel.app/demo/FilterDemo",
    className: "md:col-span-2"
  },
];
function AnimationThemeComponent() {
  return (
    <div className="min-h-screen">
      <div className="py-5">
        <div className="  py-0.5  rounded-[5px]  flex items-center mx-2 sm:mx-20 gap-2">
          <motion.button className=" py-2 px-3 rounded-md ring-1 ring-black/30 dark:ring-neutral-500 cursor-pointer text-black dark:text-white">
            Checkout Some UI
          </motion.button>
          <motion.button className=" py-2 px-3 rounded-md ring-1 ring-black/30 dark:ring-neutral-500 cursor-pointer  text-black dark:text-white">
            Open with Heart
          </motion.button>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-4 gap-1 mx-auto">
        {demoUrl.map((el, id) => {
          return <ComponentCard demoSrc={el.demoUrl} key={id} className={el.className} />
        })}
      </div>
    </div>
  );
}

export default AnimationThemeComponent;

export const ComponentCard = ({ demoSrc , className}: { demoSrc: string , className ?: string}) => {
  return (
      <div className={cn("h-96 w-full flex items-center justify-center" , className)}>
        <iframe
          src={demoSrc}
          className={cn(" h-full w-full flex items-center justify-center m-auto  rounded-[15px] p-0.5 ring-1 ring-black/10" )}
        ></iframe>
      </div>
  );
};
