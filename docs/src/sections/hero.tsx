
"use client"
import { motion } from 'motion/react'
import Link from 'next/link'
import React, { useState } from 'react'

function Hero() {
        const [text, setText] = useState('See UI')
  return (
       <div className=" mx-5 lg:mx-0">
                    <h1 className="block mt-2 text-muted-foreground font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-shadow-2xs">
                        Provided By Roukhood
                    </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6 text-balance ">
                        Make Your Android Screens Better
                    </h1>
                    <div className="flex items-center justify-center mx-auto">
                        <div className="">
                           <Link href='docs/introduction'>
                            <motion.button className='py-2 border bg-black/10 border-neutral-300 text-white px-5 rounded-lg'>
                                See UI
                            </motion.button>
                            <motion.button
                                whileHover={{
                                    scale: 1.1
                                }}

                                transition={{
                                    duration: 0.3
                                }}
                                className='py-2 bg-black border border-neutral-300 dark:bg-white dark:text-black max-w-30 text-white px-5 rounded-lg relative top-2 -left-[81px] tracking-tight cursor-pointer' onMouseEnter={() => {
                                    setTimeout(() => {
                                        setText('Use UI')
                                    }, 400)
                                }} onMouseLeave={() => setText('See UI')}>
                                {
                                    text
                                }
                            </motion.button>
                           </Link>
                        </div>


                    </div>
                </div>
  )
}

export default Hero