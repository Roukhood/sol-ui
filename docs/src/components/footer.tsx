"use client";
import { cn } from "@/lib/utils/cn";
import { IconArrowBadgeLeft, IconBrandGithub } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";

import { SolauthLogo } from "./svgs";

function Footer() {
  return (
    <footer className="min-h-50 border border-l-0 border-r-0 border-b-0">
      <div className="pl-3 pt-20 md:pt-10 relative mt-10">
        <div className="absolute bottom-0 ">
            <BottomFooter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

export const SocialLink = () => {
  return (
    <div className="grid grid-cols-2  mx-auto gap-2">
      <div className="size-40  py-0.5 px-3 rounded-[5px]  flex items-center justify-center">
        <ul className="w-sm h-fit py-5 px-10 ">
          <li className={cn("list text-xl font-semibold  ")}>
            <Link href="/docs/introduction">docs</Link>
          </li>
          <li className="list text-xl ">
            <Link href="https://x.com/SatishSolera">Twitter</Link>
          </li>
        </ul>
      </div>
      <div className="size-40 shadow ring-1 ring-neutral-200 py-0.5 px-3 rounded-[5px] bg-white ">
        <Link href="https://github.com/satish-solera/sol-ui">
          <motion.div
            className="w-full h-full flex items-center justify-center cursor-pointer"
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <IconBrandGithub size={40} className="text-black " />
          </motion.div>
        </Link>
      </div>
      <div className=""></div>
      <div className="w-40 h-20 shadow ring-1 ring-neutral-200 py-0.5 px-3 rounded-[5px] bg-white flex items-center justify-center p-0.5">
        <a href="https://www.buymeacoffee.com/satishsolen">
          <img
            src="https://img.buymeacoffee.com/button-api/?text=Buymeacoffee&emoji=&slug=satishsolen&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
            width={100}
            height={40}
            alt="buymeacoffee"
          />
        </a>
      </div>
    </div>
  );
};

export const BottomFooter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 ml-[23.5px] pt-5 md:items-center ">
      
      <span>
        <p className="text-24 font-semibold ">
          2026
        </p>
      </span>
      <Link href="https://github.com/satish-solera/sol-auth">
      <SolauthLogo/>
      </Link>
      <div className="w-28  block  items-center  py-px">
        <a href="https://www.buymeacoffee.com/satishsolen">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buymeacoffee&emoji=&slug=satishsolen&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
        </a>
      </div>

      {/* <div className="">
        <Button className="w-full">
          <span className="mx-auto text-[20px]">

          Schedule meeting with us
          </span>
        </Button>
      </div> */}
    </div>
  );
};
