"use client"

import { cn } from '@/lib/utils/cn'
import { motion } from 'motion/react'
import React, { useState } from 'react'

function AnimationThemeComponent() {


    const [themeComponent, setThemeComponent] = useState('white')
    const [activeId, setActiveId] = useState(2)
    return (
        <>
            {/* animation with theme */}
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-4xl sm:text-5xl md:text-2xl lg:text-4xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
                    Match Components with your
                    Color Theme
                </h1>

                {/* if someone use the dark theme then show dark components and if light then show light theme componets */}
                <div className="flex space-x-5 mb-5 relative">
                    <button className=' relative py-2 border bg-black  border-neutral-300 text-white px-5 rounded-lg cursor-pointer' onClick={() => {
                        setThemeComponent('dark')
                        setActiveId(1)
                    }}>
                        Dark <span className={cn('size-2 bg-green-700 rounded-full absolute top-1 left-16 hidden animate-pulse', activeId == 1 && 'block')}></span>
                    </button>
                    <button className='relative py-2 border bg-black/10 dark:bg-white border-neutral-300 text-black/60 px-5 rounded-lg' onClick={() => {
                        setThemeComponent('white')
                        setActiveId(2)
                    }}>
                        White <div className={cn('size-2 bg-green-700 rounded-full absolute top-1 left-17 hidden animate-pulse', activeId == 2 && 'block')}></div>
                    </button>
                </div>
            </div>


            <div className='min-h-screen flex  flex-col md:flex-row justify-between gap-4 '>


                {/* show compoents here in bento grid */}
                <div className="grid grid-cols-1 max-w-50  md:max-w-full mx-auto md:grid-cols-2 w-xl  gap-2">

                    <div className="h-40">
                        <img src='/screen2.jpg' draggable={false} className='object-cover h-full w-full' />
                    </div>
                    <div className="h-60">
                        <img src='/screen-3.jpg' draggable={false} className='object-cover h-full w-full' />
                    </div>
                    <div className="h-60 md:-translate-y-20">
                        <img src='/screen-4.jpg' draggable={false} className='object-cover h-full w-full' />
                    </div>
                    <div className="h-40">
                        <img src='/screen2.jpg' draggable={false} className='object-cover h-full w-full' />
                    </div>
                    <div className="h-40  md:-translate-y-20">
                        <img src='/screen2.jpg' draggable={false} className='object-cover h-full w-full' />
                    </div>
                    <div className="h-40 md:-translate-y-20">
                        <img src='/screen-5.jpg' draggable={false} className='object-cover h-full w-full' />
                    </div>



                </div>

                <div className="mx-auto">
                    {/* color theme components demo */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1  max-w-2xl ">
                        <iframe
                            src="https://sol-ui-krma.vercel.app/ButtonDemo"
                            width={200}
                            height={300}
                            className='col-span-1'
                        >

                        </iframe>
                        <iframe
                            src="https://sol-ui-krma.vercel.app/ButtonDemo"
                            width={200}
                            height={300}
                            className='col-span-1'
                        >

                        </iframe>
                        <iframe
                            src="https://sol-ui-krma.vercel.app/ButtonDemo"
                            width={200}
                            height={270}
                            className='col-span-1'
                        >

                        </iframe>
                        <iframe
                            src="https://sol-ui-krma.vercel.app/ButtonDemo"
                            width={200}
                            height={270}
                            className='col-span-1'
                        >

                        </iframe>
                    </div>

                </div>
            </div>

            {/* end animation with theme */}
        </>

    )
}

export default AnimationThemeComponent