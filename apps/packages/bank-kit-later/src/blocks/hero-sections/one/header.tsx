"use client";

import * as React from "react";
import { Hamburger } from "../../../components/svgs";

export default function Header() {
  const [smallNav, setSmallNav] = React.useState<boolean>(false);
  return (
    <header className="md:border rounded-md max-w-6xl flex items-center justify-between">
      <p className="font-semibold font-serif select-none pl-2">sola</p>
      <nav className=" border  rounded-full md:rounded-0 md:border-0  p-[2px]">
        <div className="hidden md:block">
          <div className=" flex  justify-between items-center gap-4">
            <ul className="flex gap-3 items-center">
              {["Home", "Pricing", "About"].map((el, id) => {
                return (
                  <li
                    aria-label={el}
                    role="navlink"
                    key={id}
                    className="cursor-pointer"
                  >
                    {el}
                  </li>
                );
              })}
            </ul>

            <button className="bg-blue-700 hover:bg-blue-700/90 text-white px-3 py-1 rounded-[4px] cursor-pointer">
              Sign in
            </button>
          </div>
        </div>

        <div className="block md:hidden ">
          <div className="">
            <button
              aria-label="hamburger"
              onClick={() => setSmallNav((prev) => !prev)}
              className="w-10 h-10   flex items-center justify-center"
            >
              <span className="sr-only">hamburger</span>
              <span
                className={`text-neutral-500 active:text-black ${smallNav && "text-black"}`}
              >
                <Hamburger />
              </span>
            </button>
          </div>
          {smallNav && (
            <div className="absolute w-full -right-0 gap-4 z-50 bg-white pb-6 mt-1">
              <ul className="flex-col gap-3 items-center">
                {["Home", "Pricing", "About"].map((el, id) => {
                  return (
                    <li
                      aria-label={el}
                      role="navlink"
                      key={id}
                      className="hover:text-[#08090a99] cursor-pointer"
                    >
                      {el}
                    </li>
                  );
                })}
              </ul>

              <button className="bg-blue-700 hover:bg-blue-700/90 text-white px-3 py-1 rounded-[4px] cursor-pointer">
                Sign in
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
