"use client";
import * as React from "react";
import { Button, Input , Bubble} from "@sol-ui/components";
import { playBankSound } from "../../../lib/sound";

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
  const [amount, setAmount] = React.useState("");
  const canPay = amount.trim().length > 0;

  const onPay = () => {
    if (!canPay) {
      playBankSound("error");
      return;
    }
    playBankSound("success");
  };

  return (
    <div
      className="bank-kit w-full max-w-sm flex items-center justify-center rounded-2xl px-4"
      role="region"
      aria-label="Payment chat"
    >
      <div className="w-full relative h-96 bg-[var(--bk-background)] text-[var(--bk-foreground)]">
        <div className="h-[50px] flex items-center gap-1 border-b border-[var(--bk-border)]">
          <Button
            variant="default"
            className="flex items-center justify-center size-8 text-sm border-0 hover:bg-(--hover-secondary)/60 active:bg-(--hover-secondary) rounded-2xl p-0"
            aria-label="Back"
            data-bk-press
            onClick={() => playBankSound("tap")}
          >
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
              className="bk-chevron rotate-180"
              data-icon="inline-end"
              aria-hidden
            >
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </Button>
          <span className="pb-[2.6px] select-none">Satish</span>
        </div>

        <div className="py-2">
          <div
            className="flex-col justify-between overflow-hidden overflow-y-scroll h-64 py-10 scrollbar-none"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {conversions.map((el, id) => {
              return (
                <div key={id} className="grid grid-cols-2 grid-rows-2 gap-4">
                  <Bubble from="agent">{el.from}</Bubble>
                  <div className="row-start-2 col-start-2 flex items-center justify-end">
                    <Bubble from="user">{el.to}</Bubble>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute bottom-0 inset-inline-0 h-2 bg-linear-to-t from-[var(--bk-background)] to-transparent" />
        </div>

        <div className="absolute bottom-0 w-full h-fit border-t border-[var(--bk-border)] rounded-b-2xl py-3">
          <div className="flex items-center justify-between px-2 gap-2">
            <Input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount or chat"
              aria-label="Enter amount or chat"
              className="h-auto border-0 border-b rounded-md me-2 px-0 shadow-none focus-visible:ring-0"
            />
            <Button
              disabled={!canPay}
              data-bk-press
              onClick={onPay}
              className="bg-[var(--bk-accent)] text-[var(--bk-accent-foreground)] border-0 px-4 py-2 rounded-2xl text-sm disabled:opacity-80 disabled:cursor-not-allowed"
            >
              <span className="pb-[2.5px]">Pay</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

