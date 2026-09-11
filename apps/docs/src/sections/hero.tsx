"use client";

import Link from "next/link";
import { NpmSmallIcon } from "../components/icons";
import { Button } from "../components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import React from "react";

function Hero() {

  const {resolvedTheme} = useTheme();
  const [width , setWidth] = React.useState(0);

  React.useEffect(()=>{
    const handleResize  = () =>{
      setWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return()=> window.removeEventListener("resize" , handleResize);
  } ,[]);


  let xPosition = 0;
  let xEndPosition = 0;


  if(width < 500){
     xPosition  = 100 ;
     xEndPosition = -800;
  }else{
    xPosition = 900,
    xEndPosition = -1000
  }
 
  const dummyHeroData = [
    {
      name: "Music ui",
      img: "/Hero-1.png",

    },

    {
      name: "Transections ui",
      img: "/Hero-3.png",
    },
    {
      name: "bank ui",
      img: "/Hero-4.png",

    },
  ]

  return (
    <section className="min-h-screen h-full w-full pt-10 flex flex-col justify-between  items-center  ">
      <div className="flex flex-col gap-3 justify-center items-center pb-10 md:pb-4">
        <span className="bg-(--hover-secondary) text-foreground text-sm border rounded-full px-1 pb-px hover:bg-(--hover-primary)/10 active:bg-(--hover-primary)/10 select-none">
          New Bank Kit
        </span>
        <motion.h1
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          className="font-serif text-[2.5rem]/[2.75rem] tracking-[-0.8px] text-text-main lg:text-[3.125rem]/[2.25rem] lg:tracking-[-2px] -pl-1 text-center md:text-start">
          With well crafted pixels to
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.2
          }}
          className="md:text-lg/6 text-[#08090a99] dark:text-[#ffffffb3] text-center">
          Reusable & Intractive UI blocks and components <br />for{" "}
          <span className="font-medium text-black dark:text-white ">apps</span> and{" "}
          <span className="font-medium text-black dark:text-white">web</span>.
        </motion.p>

        <motion.div

          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.5
          }}

          className="flex gap-3 items-center">
          <Link href="/docs/components/badge">
            <Button
              aria-label="Get started"
              typeOfBtn={resolvedTheme == "dark" ? "white": "black"}
              className=" ">
              <p>Get started</p>
            </Button>
          </Link>
          <Link href="https://www.npmjs.com/package/solui">
            <Button
             typeOfBtn={resolvedTheme == "light" ? "white": "black"}
              aria-label="npm icon"
              className="py-[7px]">
              <NpmSmallIcon />
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div

        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}

        transition={{
          delay: 0.7
        }}
        className="w-full overflow-hidden">
        <motion.div
          initial={{
            x: xPosition,
          }}
          animate={{
            x: [xPosition, xEndPosition],
          }}

          transition={{
            duration: 30,
            repeat: Infinity,
          }}
          className="flex  gap-3 ">
          {
            dummyHeroData.map((el, id) => {
              return <WorkDemoScroller
                name={el.name}
                img={el.img}
                key={id} />
            })
          }
        </motion.div>
      </motion.div>

    </section>
  );
}

export default Hero;



export const WorkDemoScroller = ({ img, name }: { img: string, name: string }) => {
  return (
    <div className="">
      <div className="h-90 w-90 overflow-hidden">
        <img
          alt={name}
          draggable={false}
          src={img}
          className="w-full h-full object-cover rounded-[2px]"
        />
      </div>
      <p className="text-center text-[#08090a99] dark:text-[#ffffffb3] select-none">{name}</p>
    </div>
  )
}
