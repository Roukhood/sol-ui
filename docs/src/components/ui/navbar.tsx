
"use client"

import { IconBrandGithub, IconMoon, IconSun } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import React, { useEffect, useState, useCallback } from 'react'


// Theme Toggle Component
const ThemeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []
    )

    if (!mounted) {
        return null
    }



    return (
        <button
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 transition-colors text-foreground/70 hover:text-foreground"
            aria-label="Toggle theme"
        >
            {true ? <IconSun className="w-5 h-5" /> : <IconMoon className="w-5 h-5" />}
        </button>
    )
}

function Navbar() {

    const texts = ["beta", "0.0.1"];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length)
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <div className='p-2'>
            <div className=" max-w-2xl md:max-w-5xl mx-auto  py-2 flex items-center justify-between ">

                <div className="flex gap-4 items-center ">
                    {/* logo */}
                    <Link href='/' >
                        <h1 className='text-2xl font-bold'>SolUI</h1>
                    </Link>
                    <button className='border rounded-md bg-black/5 px-2 dark:border-neutral-300 relative overflow-hidden'>
                        <div className="relative">
                         <AnimatePresence mode="wait">
                            <motion.span
                                key={texts[index]} // String keys work since texts are unique
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className='relative h-full flex items-center justify-center text-center' // Full height, centered
                            >
                                {texts[index]}
                            </motion.span>
                        </AnimatePresence>
                        </div>
                    </button>
                </div>


                <div className="flex lg:mx-20 gap-4 items-center">
                    {/* navLinks */}
                    <ul >
                        <Link href='/docs/introduction'>
                            <li>
                                docs
                            </li>
                        </Link>
                    </ul>
                    <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 transition-colors text-foreground/70 hover:text-foreground">
                       <Link href='https://github.com/satish-solera/sol-ui'>
                        <IconBrandGithub size={18} />
                       </Link>
                    </div>
                    <h1>
                        <ThemeToggle />
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default Navbar