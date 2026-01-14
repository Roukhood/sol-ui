
"use client"
import { cn } from '@/lib/utils/cn'
import { IconBrandGithub, IconBrandTwitter, IconPhoneCall } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react'
import CardAnimate from './card-animate';


const Logo1 = () => (
    <svg viewBox="0 0 120 40" className="h-8">
        {/* <rect x="0" y="8" width="24" height="24" rx="4" fill="currentColor" /> */}
        <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
            sol-auth
        </text>
    </svg>
);

const Logo2 = () => (
    <svg viewBox="0 0 120 40" className="h-8">
        {/* <circle cx="12" cy="20" r="12" fill="currentColor" /> */}
        <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
            Magma
        </text>
    </svg>
);

// const Logo3 = () => (
//   <svg viewBox="0 0 120 40" className="h-8">
//     <polygon points="12,8 24,32 0,32" fill="currentColor" />
//     <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
//       Initech
//     </text>
//   </svg>
// );

// const Logo4 = () => (
//   <svg viewBox="0 0 120 40" className="h-8">
//     <rect x="0" y="8" width="12" height="24" rx="2" fill="currentColor" />
//     <rect x="14" y="14" width="12" height="18" rx="2" fill="currentColor" opacity="0.7" />
//     <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
//       Stark
//     </text>
//   </svg>
// );

// const Logo5 = () => (
//   <svg viewBox="0 0 120 40" className="h-8">
//     <path d="M12 8 L24 20 L12 32 L0 20 Z" fill="currentColor" />
//     <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
//       Wayne
//     </text>
//   </svg>
// );

// const Logo6 = () => (
//   <svg viewBox="0 0 130 40" className="h-8">
//     <circle cx="8" cy="20" r="6" fill="currentColor" />
//     <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.7" />
//     <text x="34" y="27" fontSize="16" fontWeight="600" fill="currentColor">
//       Hooli
//     </text>
//   </svg>
// );

// const Logo7 = () => (
//   <svg viewBox="0 0 140 40" className="h-8">
//     <rect x="0" y="10" width="20" height="20" fill="currentColor" transform="rotate(45 10 20)" />
//     <text x="28" y="27" fontSize="14" fontWeight="600" fill="currentColor">
//       Pied Piper
//     </text>
//   </svg>
// );

// const Logo8 = () => (
//   <svg viewBox="0 0 130 40" className="h-8">
//     <path d="M0 20 Q12 8 24 20 Q12 32 0 20" fill="currentColor" />
//     <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
//       Umbrella
//     </text>
//   </svg>
// );

const sampleLogos = [

    <Logo2 key="2" />,


];
function Footer() {
    return (
        <footer className='h-[450px] '>
            <div className="grid md:grid-cols-[1fr_1fr] h-full">


                <div className="m-auto">
                    <ul className='w-sm h-fit py-5 px-10'>
                        <Link href='/docs/introduction'>
                            <li className={cn('list text-xl font-medium ')}>
                                Components
                            </li> 
                        </Link>

                        <Link href='https://github.com/satish-solera'>
                            <li className='list text-3xl font-bold'>
                                Github
                            </li>
                        </Link>

                        <Link href=''>
                            <li className='list text-xl'>
                                Tweeter
                            </li>
                        </Link>
                    </ul>
                    {/* gives sponcers */}

                    <div className="w-sm px-10">
                        
                        <motion.button
                            initial={{
                                rotate: 0
                            }}
                            whileHover={{
                                scale: 1.08,
                                rotate: [0, -2, 2, 0]
                            }}

                            transition={{
                                duration: 0.3,
                                ease: 'easeIn'
                            }}
                            className='group flex gap-2 items-center py-2   px-3 border border-black dark:border-neutral-300 rounded-lg rotate-0'>

                            Book a call <IconPhoneCall size={18} className='group-hover:rotate-5' />

                        </motion.button>



                    </div>
                </div>

                {/* something crazy 3d object that moves with our other products*/}


                <div className=" h-full   relative">
                    <div className="grid grid-cols-2 gap-2 mx-auto border-b  border-neutral-300 ">
                        <button>
                            <Link href='https://github.com/satish-solera/sol-auth'>
                                sol-auth
                            </Link>
                        </button>
                        <button>
                            become a sponcer
                        </button>
                    </div>

                    <div className="my-10 grid grid-cols-2 gap-5 mx-2 ">
                        <div className="border border-black dark:border-neutral-300 rounded-lg col-span-1  flex   justify-center p-4">
                            <h1 className='text-md py-1 flex items-center gap-2'>Open Isuue <IconBrandGithub size={16} /></h1>
                            
                        </div>
                        <div className="w-40  py-2">
                            <a href="https://www.buymeacoffee.com/satishsolen"><img src="https://img.buymeacoffee.com/button-api/?text=Buymeacoffee&emoji=&slug=satishsolen&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
                        </div>

                    </div>







                </div>




            </div>

        </footer>
    )
}

export default Footer




export const FluidFooter = () => {
    return (
        <section className='fluid-wrapper' >

            <motion.svg viewBox='0 0 1440 400' preserveAspectRatio='none' className='fluid-svg'>

                <defs>
                    <linearGradient id='liquidGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                        <stop offset='0%' stopColor='#ff5fa2' />
                        <stop offset='50%' stopColor='#ffc371' />
                        <stop offset='100%' stopColor='#7f7fd5' />
                    </linearGradient>
                </defs>

                <motion.path

                    d="M0,120
                   C200,40 450,260 700,180
                   950,100 1150,40
                   1440,120
                   V400 H0 Z"
                    strokeLinecap='round'
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                    fill='url(#liquidGradient)'

                />



            </motion.svg>

            <h1 className='flex items-center text-white absolute inset-0 text-center left-20'>
                sweet
            </h1>

        </section>
    )
}

/* =============================================================================
   LogoSlider Component
   
   A smooth, infinite marquee/slider component for displaying logos.
   Uses Tailwind CSS where possible, raw CSS only for animations/masks.
============================================================================= */

export interface ProductSliderProps {
    /** Array of React nodes (logos, icons, images) to display */
    logos: React.ReactNode[];
    /** Animation speed - higher = slower (default: 60) */
    speed?: number;
    /** Scroll direction. Default: "left" */
    direction?: "left" | "right";
    /** Whether to show blur overlays on edges. Default: true */
    showBlur?: boolean;
    /** Number of blur layers for progressive effect. Default: 8 */
    blurLayers?: number;
    /** Blur intensity multiplier. Default: 1 */
    blurIntensity?: number;
    /** Additional CSS classes */
    className?: string;
    /** Whether to pause animation on hover. Default: false */
    pauseOnHover?: boolean;
}

/**
 * LogoSlider Component
 *
 * A beautiful infinite marquee for showcasing logos, partners, or any content.
 * Uses per-item CSS animations for optimal performance.
 */


export const ProductSlider = ({
    logos,
    speed = 60,
    direction = "left",
    showBlur = true,
    blurLayers = 8,
    blurIntensity = 1,
    className,
    pauseOnHover = false,
}: ProductSliderProps) => {
    return (
        <div
            className={cn(
                "logo-slider w-full overflow-hidden",
                className
            )}
            style={
                {
                    "--speed": speed,
                    "--count": logos.length,
                    "--blurs": blurLayers,
                    "--blur": blurIntensity,
                } as React.CSSProperties
            }
        >
            <div
                className={cn(
                    "logo-slider__container",
                    "relative w-full min-h-[80px] grid"
                )}
                data-direction={direction}
                data-pause-on-hover={pauseOnHover}
            >
                {/* Progressive Blur Overlay - Left */}
                {showBlur && (
                    <div className="logo-slider__blur logo-slider__blur--left absolute top-0 bottom-0 left-0 w-1/4 z-10 pointer-events-none rotate-180">
                        {Array.from({ length: blurLayers }).map((_, i) => (
                            <div
                                key={`blur-left-${i}`}
                                className="absolute inset-0"
                                style={{ "--blur-index": i } as React.CSSProperties}
                            />
                        ))}
                    </div>
                )}

                {/* Progressive Blur Overlay - Right */}
                {showBlur && (
                    <div className="logo-slider__blur logo-slider__blur--right absolute top-0 bottom-0 right-0 w-1/4 z-10 pointer-events-none">
                        {Array.from({ length: blurLayers }).map((_, i) => (
                            <div
                                key={`blur-right-${i}`}
                                className="absolute inset-0"
                                style={{ "--blur-index": i } as React.CSSProperties}
                            />
                        ))}
                    </div>
                )}

                {/* Logo Track */}
                <ul className="logo-slider__track flex items-center h-full w-fit m-0 p-0 list-none">
                    {logos.map((logo, index) => (
                        <Link href=''>


                            <li
                                key={index}
                                className="logo-slider__item h-4/5 w-[120px] sm:w-[140px] lg:w-[160px] aspect-video grid place-items-center shrink-0"
                                style={{ "--item-index": index } as React.CSSProperties}
                            >
                                <div className="w-full h-full flex items-center justify-center [&>svg]:h-[65%] [&>svg]:w-auto [&>svg]:fill-zinc-800 dark:[&>svg]:fill-zinc-200 [&>img]:h-[65%] [&>img]:w-auto [&>img]:object-contain [&>img]:grayscale [&>img]:brightness-50 dark:[&>img]:brightness-125">
                                    {logo}
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

ProductSlider.displayName = "LogoSlider";


