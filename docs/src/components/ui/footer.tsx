
"use client"
import { cn } from '@/lib/utils/cn'
import { IconArrowBadgeLeft, IconBrandGithub } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Link from 'next/link';


function Footer() {
    return (
        <footer className='min-h-[400px]  relative flex items-center  '>
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] mx-4 md:mx-auto md:gap-x-60 gap-5 ">
                <ScheduleCall />
                {/* desktop */}
                <div className="md:block hidden">
                    <SocialLink />
                </div>
                {/* mobile */}
                <div className="md:hidden block grid grid-cols-2" >

                    {/* href list */}
                    <div className="flex items-center justify-center">
                        <ul className='w-sm h-fit py-5 px-10 '>
                            <Link href='/docs/introduction'>
                                <li className={cn('list text-xl font-semibold  ')}>
                                    docs
                                </li>
                            </Link>
                            <Link href='https://x.com/SatishSolera'>
                                <li className='list text-xl '>
                                    Twitter
                                </li>
                            </Link>
                        </ul>
                    </div>

                    {/* github */}
                    <div className="">
                        <Link href='https://github.com/satish-solera/sol-ui'>
                            <motion.div className="w-full h-full flex items-center justify-center cursor-pointer"
                                initial={{
                                    scale: 1,
                                }}

                                whileHover={{
                                    scale: 1.04
                                }}


                                transition={{
                                    duration: 0.3
                                }}>
                                <IconBrandGithub size={40} className=' ' />
                            </motion.div>
                        </Link>


                    </div>

                </div>
                <BottomFooter />
            </div>
        </footer>
    )
}

export default Footer


export const ScheduleCall = () => {
    return (
        <div className="relative h-64 w-72 bg-white dark:bg-black/50 rounded-2xl shadow-sm ring-1 ring-black/10 dark:ring-neutral-500 px-5  py-5 mx-auto">
            <button className="py-2 px-4 rounded-md  shadow-sm shadow-white dark:shadow-black/10 ring-1 ring-black/10 dark:ring-neutral-500 dark:text-white text-black flex gap-2 items-center">
                {/* <div className='animate-pulse size-2 dark:bg-white bg-black rounded-full'></div>  
                */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 fill-emerald-500 rotate-180 animate-pulse"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg>
                        <span className=" text-neutral-500  "> Schedule a Call</span>

            </button>
            <p className='text-black dark:text-white py-3'>
                <b>Have a Project ? </b> <br />
                <span className='text-neutral-500'>we  would love to hear from you</span>
            </p>
            <Link href="https://cal.com/satish-solera-vcuclh/15min">
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
                    name='call-button'
                    className='absolute bottom-0 right-0 size-15  dark:text-white text-black  rounded-lg z-20 cursor-pointer'>
                    <IconArrowBadgeLeft size={50} className='rotate-130 flex items-center justify-center mx-auto ' />
                </motion.button>
            </Link>
            <div className='absolute bottom-0 right-0 size-15  p-8 shadow-sm ring-1 ring-black/30 dark:ring-neutral-500  z-10'
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
            <div className="size-40  py-0.5 px-3 rounded-[5px]  flex items-center justify-center">
                <ul className='w-sm h-fit py-5 px-10 '>
                    < li className={cn('list text-xl font-semibold  ')}>
                        <Link href='/docs/introduction'>
                            docs
                        </Link>
                    </li>
                    <li className='list text-xl '>
                        <Link href='https://x.com/SatishSolera'>
                            Twitter
                        </Link>
                    </li>
                </ul>
            </div>
            <div

                className="size-40 shadow ring-1 ring-neutral-200 py-0.5 px-3 rounded-[5px] bg-white ">
                <Link href='https://github.com/satish-solera/sol-ui' >
                    <motion.div className="w-full h-full flex items-center justify-center cursor-pointer"
                        initial={{
                            scale: 1,
                        }}

                        whileHover={{
                            scale: 1.04
                        }}


                        transition={{
                            duration: 0.3
                        }}>
                        <IconBrandGithub size={40} className='text-black ' />
                    </motion.div>
                </Link>
            </div>
            <div className=""></div>
            <div className="w-40 h-20 shadow ring-1 ring-neutral-200 py-0.5 px-3 rounded-[5px] bg-white flex items-center justify-center p-0.5">
                <a href="https://www.buymeacoffee.com/satishsolen"><img src="https://img.buymeacoffee.com/button-api/?text=Buymeacoffee&emoji=&slug=satishsolen&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" width={100} height={40} alt='buymeacoffee' /></a>
            </div>

           
        </div>
    )
}

export const BottomFooter = () => {
    return (
        <div className="flex gap-2 ml-[23.5px]">
            {
                [{ label: "2026", href: "/" }, { label: "sol-auth", href: "https://github.com/satish-solera/sol-auth" }].map((el, id) => {
                    return (
                        <Link href={el.href} key={id}>
                            <button className='shadow ring-1 ring-neutral-500 py-0.5 px-3 rounded-[5px] cursor-pointer' key={`id-${id}`}
                            >
                                {
                                    el.label
                                }
                            </button>
                        </Link>
                    )
                })
            }

            <div className="w-28 md:hidden block  items-center  py-px">
                <a href="https://www.buymeacoffee.com/satishsolen"><img src="https://img.buymeacoffee.com/button-api/?text=Buymeacoffee&emoji=&slug=satishsolen&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
            </div>
        </div>
    )
}

