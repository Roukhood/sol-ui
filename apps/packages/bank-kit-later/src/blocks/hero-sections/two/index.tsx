import Header from "./header";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.333 8h9.334M8.667 4.667 12 8l-3.333 3.333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.5 1.8v8.4c0 .5.6.8 1 .5l6.5-4.2c.4-.3.4-.9 0-1.2L3.5 1.3c-.4-.3-1 .1-1 .5Z" />
    </svg>
  );
}

export function HeroTwo() {
  return (
    <section className="relative min-h-svh overflow-hidden max-w-6xl">
      <Header/>
      <div className="relative mx-auto w-full  px-6 pb-5 pt-20 select-none">
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col">
            <div className="w-fit inline-flex items-center justify-center rounded-[6px] border   px-2 py-px text-[11px] font-medium uppercase tracking-[0.14em] mx-auto  ">
              Global leader at banking
            </div>
              <h1 className="mt-2 font-serif text-center text-[50px] leading-[1.02] tracking-[-0.03em] ">
                Capital that moves at the speed of business
              </h1>

              <p className="mt-2 text-center text-[17px] leading-[1.65] tracking-[-0.01em] text-(--text-primary)">
                Earn yield on idle cash, and send  global wires
                from one minimal <br /> dashboard built for finance teams.
              </p>

               <div className="mt-4 flex flex-wrap items-center gap-3 justify-center">
              <button
                className="active:scale-[101%] transform-gpu will-change-transform bg-background-inverse text-foreground-inverse hover:bg-(--hover-primary) active:bg-(--hover-primary) cursor-pointer group flex items-center gap-1 rounded-[6px]  px-3.5 py-2 text-[16px] font-medium transition-all duration-200   active:translate-y-0"
                type="button"
              >
                <p className="-mt-[3px]">Open an account</p>
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
              <button
                className=" active:scale-[101%] transform-gpu will-change-transform delay-100 bg-background text-foreground hover:bg-(--hover-secondary) active:bg-(--hover-secondary) cursor-pointer inline-flex items-center gap-2 rounded-[6px] border px-3.5 py-2 text-[13px] font-medium  transition-all duration-200   "
                type="button"
              >
                <span className=" inline-flex size-5 items-center justify-center rounded-[6px] ">
                  <PlayIcon />
                </span>
                Watch 2-min demo
              </button>
            </div>
            </div>

           

         
          </div> 
      </div>
    </section>
  );
}

export default HeroTwo;
