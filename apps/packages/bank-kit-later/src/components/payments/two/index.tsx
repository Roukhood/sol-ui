"use client";
import * as React from "react";
import { Button, Heading, Input, SubHeading } from "@sol-ui/components";

const BankAcconts = [
  {
    name: "SOLA Bank",
    selected: true,
  },
  {
    name: "Sb inc",
    selected: false,
  },
];

function Payment() {
  const [isPinOpen, setIsPinOpen] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);

  return (
    <div className="w-full max-w-[18rem] flex items-center justify-center rounded-2xl border dark:bg-[#121212]">
      <div
        className={`w-full relative h-fit py-4 overflow-hidden ${(isPinOpen || isDelete) && ""}`}
      >
        <Heading as="h3" className="text-md font-medium mb-1 pl-3 py-0">
          Sending money to
        </Heading>
        <SubHeading className="pl-3 py-0">Satish</SubHeading>
        <div className="flex flex-col items-center gap-2 my-10">
          <Input
            placeholder="Enter amount"
            className="h-auto w-auto border-0 border-b border-background-inverse/40 rounded-none px-0 focus-visible:ring-0"
          />

          <div className="flex items-center gap-2 select-none mt-1">
            <Button
              variant="inverse"
              onClick={() => setIsPinOpen(true)}
              className="h-[31px] border-0 rounded-2xl"
            >
              <span className="pb-[2.5px]">Pay</span>
            </Button>
            <Button
              variant="danger"
              onClick={() => setIsDelete(true)}
              className="h-[31px] border-0 rounded-2xl"
            >
              <span className="pb-[2.5px]">Cancle payment</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          {BankAcconts.map((el, id) => {
            return (
              <div
                key={id}
                data-slot="bank account"
                className="transform-gpu will-change-transform text-(--text-primary) text-sm flex justify-between items-center gap-2 border-b border-background-inverse/40 p-3 hover:bg-(--hover-secondary) active:hover:bg-(--hover-secondary)"
              >
                <span className=" select-none">{el.name}</span>{" "}
                {el.selected && (
                  <span className="border border-background-inverse/40 rounded-full px-2 py-px select-none ">
                    Selected
                  </span>
                )}
              </div>
            );
          })}
        </div>
        {isDelete && (
          <div className="absolute bottom-0 right-0 left-0 rounded-2xl w-full h-fit py-10 border bg-background scrollUp ">
            <div className="flex flex-col items-center gap-2 ">
              <p className="text-center ">
                Are you want to <br /> cancle this transaction
              </p>
              <div className="flex items-center gap-2 select-none">
                <Button
                  variant="inverse"
                  onClick={() => setIsDelete(false)}
                  className="h-[31px] border-0 rounded-2xl"
                >
                  <span className="pb-[2.5px]">No</span>
                </Button>
                <Button
                  variant="danger"
                  onClick={() => setIsDelete(false)}
                  className="h-[31px] border-0 rounded-2xl"
                >
                  <span className="pb-[2.5px]">Cancle payment</span>
                </Button>
              </div>
            </div>
          </div>
        )}

        {isPinOpen && (
          <div className="absolute bottom-0 right-0 left-0 rounded-2xl w-full h-fit pb-5 pt-14 border bg-background scrollUp ">
            <div className="relative h-full w-full px-3">
              <div className="flex flex-col gap-2 ">
                <Input
                  maxLength={4}
                  placeholder="Enter pin"
                  className="h-auto border-0 border-b border-background-inverse/40 rounded-none mx-8 pl-2 py-1 focus-visible:ring-0"
                />
                <div className="flex items-end justify-end mr-8">
                  <Button
                    variant="inverse"
                    onClick={() => setIsPinOpen(false)}
                    className="h-[31px] border-0 rounded-2xl"
                  >
                    verify
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
