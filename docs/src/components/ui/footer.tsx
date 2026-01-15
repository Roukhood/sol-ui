
"use client"
import { cn } from '@/lib/utils/cn'
import { IconArrowBadgeLeft, IconArrowBarDown, IconBrandGithub, IconBrandTwitter, IconPhoneCall } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react'
import CardAnimate from './card-animate';


function Footer() {
    return (
        <footer className='min-h-[400px]  relative flex items-center  '>
            <div className="grid grid-cols-[1fr_1fr] mx-auto gap-x-60">
                <ScheduleCall />
                <SocialLink />
                <BottomFooter />
            </div>
        </footer>
    )
}

export default Footer


export const ScheduleCall = () => {
    return (
        <div className="relative h-64 w-72 bg-white dark:bg-black/50 rounded-2xl shadow-sm ring-1 ring-black/10 px-5  py-5">
            <button className="py-2 px-4 rounded-md  shadow-sm shadow-white dark:shadow-black/10 ring-1 dark:ring-black/10 ring-neutral-500 dark:text-white text-black flex gap-2 items-center">
              <div className='size-2 darK:bg-white bg-black rounded-full'></div>  Schedule a Call
            </button>
            <p className='text-black dark:text-white py-3'>
                <b>Have a Project ? </b>
                <p className='text-neutral-400'>we  would love to hear from you</p>
            </p>
            <motion.button
                initial={{
                    scale: 1,

                }}

                whileHover={{
                    scale: 1.04
                }}
                transition={{
                    duration: 0.3
                }}
                className='absolute bottom-0 right-0 size-15  dark:text-white text-black  rounded-lg z-20 cursor-pointer'>
                <IconArrowBadgeLeft size={50} className='rotate-130 flex items-center justify-center mx-auto ' />
            </motion.button>
            <div className='absolute bottom-0 right-0 size-15  p-8 shadow-sm ring-1 dark:ring-black/30 ring-neutral-500  z-10'
                style={{
                    borderRadius: '15px 0px 15px'
                }}
            >

            </div>
        </div>
    )
}


export const SocialLink = () => {
    return (
        <div className="grid grid-cols-2  mx-auto gap-2">
            <div className="size-40  py-0.5 px-3 rounded-[5px]   flex items-center justify-center">
                    <ul className='w-sm h-fit py-5 px-10 '>
                        <Link href='/docs/introduction'>
                            <li className={cn('list text-xl font-semibold  ')}>
                                docs
                            </li> 
                        </Link>
                        <Link href=''>
                            <li className='list text-xl '>
                                Twetter
                            </li>
                        </Link>
                    </ul>
            </div>
            <div

                className="size-40 shadow ring-1 ring-neutral-200 py-0.5 px-3 rounded-[5px] bg-white ">
                <motion.div className="w-full h-full flex items-center justify-center cursor-pointer"
                    initial={{
                        scale: 1,

                    }}

                    whileHover={{
                        scale: 1.04
                    }}
                    transition={{
                        duration: 0.3
                    }}

                >
                    <IconBrandGithub size={40} className='text-black dark:text-white' />
                </motion.div>
            </div>
            <div className="size-40 shadow ring-1 ring-neutral-200 py-0.5 px-3 rounded-[5px] bg-white flex items-center justify-center p-0.5">
                <a href="https://www.buymeacoffee.com/satishsolen"><img src="https://img.buymeacoffee.com/button-api/?text=Buymeacoffee&emoji=&slug=satishsolen&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
            </div>

            <div className="size-40 shadow ring-1  ring-black/10 py-0.5  rounded-[5px] bg-white text-black flex items-center justify-center">
                <motion.button



                    className='dark:bg-neutral-100 py-2 px-3 rounded-md ring-1 dark:ring-black/30 ring-neutral-500 cursor-pointer'>Become Sponcer</motion.button>
            </div>
        </div>
    )
}

export const BottomFooter = () => {
    return (
        <div className="flex gap-2">
            {
                ["2026", "sol-auth"].map((el, id) => {
                    return (
                        <button className='shadow ring-1 ring-neutral-500 py-0.5 px-3 rounded-[5px]' id={`id-${id}`}
                        >
                            {
                                el
                            }
                        </button>
                    )
                })
            }


        </div>
    )
}

