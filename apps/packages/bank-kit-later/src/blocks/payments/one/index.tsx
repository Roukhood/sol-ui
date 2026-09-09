"use client";
import * as React from "react";

const conversions = [
  {
    to: "hi",
    from: "hey",
  },
  {
    to: "i need money",
    from: "how much ?",
  },

  {
    to: "i need money , i want to pay my bill",
    from: "how much ? , i needd oogg",
  },
];
function Payment() {
  const [isPayment, setIsPayment] = React.useState<boolean>(true);
  return (
    <div className="w-full max-w-sm flex items-center justify-center  rounded-2xl">
      <div className="w-full relative h-96 max-w-[20rem] bg-background text-foreground border rounded-2xl ">
        <div className="pl-2 h-[50px] flex items-center gap-1 border-b bg-(--hover-secondary)/40">
          <button className="flex items-center justify-center size-8 text-sm hover:bg-(--hover-secondary)/60 active:bg-(--hover-secondary) rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-180"
              data-icon="inline-end"
            >
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </button>

          <span className="pb-[2.6px] select-none">Satish</span>
        </div>

        <div className="relative mt-3">
          <div className=" flex-col justify-between px-3 overflow-hidden overflow-y-scroll h-58 pb-10  ">
            {conversions.map((el, id) => {
              return (
                <div key={id} className="grid grid-cols-2 grid-rows-2 pt-5">
                  <span className="select-none border h-fit w-fit px-2 rounded-md bg-(--hover-secondary)/40  hover:bg-(--hover-secondary)">
                    {el.from}
                  </span>
                  <div className="row-start-2 col-start-2 flex items-center justify-end">
                    <span className="  select-none  border h-fit w-fit px-2 rounded-md bg-(--hover-secondary)/40  hover:bg-(--hover-secondary)">
                      {el.to}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-2 bg-linear-to-t from-background to-transparent " />
        </div>

        <div className="absolute bottom-0  w-full h-fit rounded-b-2xl pb-3 ">
          {/* <div className="border-t pt-2" /> */}
          <div className="flex items-center justify-between px-4  ">
            <input
              placeholder="Enter amount or chat"
              className="outline-none border-b "
            />
            <button
              disabled={isPayment ? false : true}
              className="bg-background-inverse text-foreground-inverse px-3 py-1 rounded-2xl text-sm active:translate-y-px transition-all disabled:bg-gray-100 disabled:text-black disabled:cursor-not-allowed"
            >
              <span className="pb-[2.5px]">Pay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
