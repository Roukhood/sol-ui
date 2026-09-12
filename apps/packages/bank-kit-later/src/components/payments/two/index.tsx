"use client";
import * as React from "react";
import { Button, Heading, Input, SubHeading } from "@sol-ui/components";
import { playBankSound } from "../../../lib/sound";
import { useSlideSheet } from "../../../lib/use-slide-sheet";

const BankAccounts = [
  {
    name: "SOLA Bank",
    selected: true,
  },
  {
    name: "Sb inc",
    selected: false,
  },
];

type SheetKind = "pin" | "delete" | null;

function Payment() {
  const [sheet, setSheet] = React.useState<SheetKind>(null);
  const pin = useSlideSheet(sheet === "pin");
  const del = useSlideSheet(sheet === "delete");

  const openSheet = (kind: SheetKind) => {
    setSheet(kind);
    if (kind) playBankSound("open");
  };

  const closeSheet = (kind: "success" | "close" = "close") => {
    setSheet(null);
    playBankSound(kind === "success" ? "success" : "close");
  };

  return (
    <div
      className="bank-kit w-full max-w-[18rem] flex items-center justify-center rounded-2xl border border-[var(--bk-border)] bg-[var(--bk-surface)]"
      role="region"
      aria-label="Send money"
    >
      <div className="w-full relative h-fit py-4 overflow-hidden">
        <Heading as="h3" className="text-md font-medium mb-1 ps-3 py-0">
          Sending money to
        </Heading>
        <SubHeading className="ps-3 py-0">Satish</SubHeading>
        <div className="flex flex-col items-center gap-2 my-10">
          <Input
            placeholder="Enter amount"
            aria-label="Enter amount"
            className="h-auto w-auto border-0 border-b border-[var(--bk-border)] rounded-none px-0 focus-visible:ring-0"
          />

          <div className="flex items-center gap-2 select-none mt-1">
            <Button
              variant="inverse"
              data-bk-press
              onClick={() => openSheet("pin")}
              className="h-[31px] border-0 rounded-2xl"
            >
              <span className="pb-[2.5px]">Pay</span>
            </Button>
            <Button
              variant="danger"
              data-bk-press
              onClick={() => openSheet("delete")}
              className="h-[31px] border-0 rounded-2xl"
            >
              <span className="pb-[2.5px]">Cancel payment</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col mt-8" role="list" aria-label="Bank accounts">
          {BankAccounts.map((el, id) => {
            return (
              <div
                key={id}
                role="listitem"
                data-slot="bank account"
                className="transform-gpu text-[var(--bk-muted)] text-sm flex justify-between items-center gap-2 border-b border-[var(--bk-border)] p-3 hover:bg-(--hover-secondary) active:hover:bg-(--hover-secondary)"
              >
                <span className="select-none">{el.name}</span>
                {el.selected && (
                  <span className="border border-[var(--bk-border)] rounded-full px-2 py-px select-none text-[var(--bk-foreground)]">
                    Selected
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {del.mounted && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cancel-payment-title"
            data-state={del.entered ? "open" : "closed"}
            className="payment-sheet absolute bottom-0 inset-inline-0 rounded-2xl w-full h-fit py-10 border"
          >
            <div className="flex flex-col items-center gap-2">
              <p id="cancel-payment-title" className="text-center">
                Are you sure you want to <br /> cancel this transaction?
              </p>
              <div className="flex items-center gap-2 select-none">
                <Button
                  variant="inverse"
                  data-bk-press
                  onClick={() => closeSheet("close")}
                  className="h-[31px] border-0 rounded-2xl"
                >
                  <span className="pb-[2.5px]">No</span>
                </Button>
                <Button
                  variant="danger"
                  data-bk-press
                  onClick={() => closeSheet("close")}
                  className="h-[31px] border-0 rounded-2xl"
                >
                  <span className="pb-[2.5px]">Cancel payment</span>
                </Button>
              </div>
            </div>
          </div>
        )}

        {pin.mounted && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="pin-entry-title"
            data-state={pin.entered ? "open" : "closed"}
            className="payment-sheet absolute bottom-0 inset-inline-0 rounded-2xl w-full h-fit pb-5 pt-14 border"
          >
            <div className="relative h-full w-full px-3">
              <p id="pin-entry-title" className="sr-only">
                Enter PIN to confirm payment
              </p>
              <div className="flex flex-col gap-2">
                <Input
                  maxLength={4}
                  type="password"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="Enter pin"
                  aria-label="Enter PIN"
                  className="h-auto border-0 border-b border-[var(--bk-border)] rounded-none  ps-2 py-1 focus-visible:ring-0"
                />
                <div className="flex items-end justify-end me-8">
                  <Button
                    variant="inverse"
                    data-bk-press
                    onClick={() => closeSheet("success")}
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
