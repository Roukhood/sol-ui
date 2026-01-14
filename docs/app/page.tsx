"use client"
import Image from "next/image";
// import BottomToolbar from "@expo/app/components/BottomToolbar";


// import { Button } from '@/components/ui/button'





import React, { useState } from 'react'
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";
import Hero from "@/src/sections/hero";
import AnimationThemeComponent from "@/src/sections/animation-theme-component";
// import CardAnimate from "@/src/components/ui/card-animate";
// import { ComponentPreview } from "@/src/components/docs/component-preview";
// import { ComponentContainer } from "@/src/components/docs/component-container";
// import ComponentShow from "@/src/sections/component-show";



export const TrustedCompany = () => {
  return (
    <div className=" w-80 h-50 border border-neutral-300 bg-black/5 rounded-lg shadow p-5 ">
      <h1 className='text-xl font-bold tracking-tight text-foreground leading-[1.05] mb-2'>Magma</h1>
      <p className='text-muted-foreground font-medium tracking-tight leading-[1.05] '>We are using this for our latest <br /> ads ediote</p>
      {/* <div className="flex  justify-end relative -bottom-18">
                <ArrowBigRight />
            </div> */}
    </div>
  )
}
export default function Home() {


  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const base_speed = 40;
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })

  const direction = useTransform(smoothVelocity, v => {
    if (v > 0) return -1;
    if (v < 0) return 1
    return -1
  })


  const lastY = useRef(0)
  useEffect(() => {
    return scrollY.on('change', (y) => {
      const diff = y - lastY.current

      if (diff > 0) direction.set(-1)
      else if (diff < 0) direction.set(1)
      lastY.current = y

    })
  }, [scrollY, direction])

  const x1 = useMotionValue(0);
  const x2 = useMotionValue(0)
  const x3 = useMotionValue(0)

  useAnimationFrame((t, delta) => {
    const autoMove = direction.get() * base_speed * (delta / 1000)
    const movedBy = direction.get() * (delta / 30)

    x1.set(x1.get() + movedBy + autoMove)
    x2.set(x2.get() - movedBy - autoMove)
    x3.set(x3.get() + movedBy * 0.7 + autoMove)
  })



  const [themeComponent, setThemeComponent] = useState('white')
  const [activeId, setActiveId] = useState(2)
  return (
    <>
      <div className=' min-h-screen flex items-center justify-center '>
        <Hero />
      </div>
      <div className="min-h-50"></div>
      <AnimationThemeComponent />
      <div className="min-h-50">
      </div>
    </>
  );
}
