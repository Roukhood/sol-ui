import { cn } from "@/lib/utils/cn";
import { AddBankAccount } from "./bank-account";

import { MoneyScanner } from "./money-scanner";
import { History } from "./payment-history";
import { PaymentRequest } from "./payment-request";

import { SideBar } from "./side-bar";
import { PaymentThree } from "@sol-ui/bank-kit/components";
import { Card } from "@sol-ui/components";

function CardsDemo() {
  return (
    <div
      data-slot="cards-demo"
      className="relative w-full max-w-none px-10 gap-3 overflow-hidden "
    >
      <div className="grid grid-cols-2 mx-auto gap-3 md:max-w-3xl relative">
        <div className="flex flex-col gap-3 items-start">
          <CardSkelleton>
            <MoneyScanner />
          </CardSkelleton>
          <CardSkelleton className="py-1 px-2">
            <AddBankAccount />
          </CardSkelleton>
          <CardSkelleton className="py-16 px-8 hidden lg:block">
            <PaymentThree />
          </CardSkelleton>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <CardSkelleton className="py-4 px-3">
            <PaymentRequest />
          </CardSkelleton>

          <CardSkelleton className="px-2 py-3">
            <SideBar />
          </CardSkelleton>

          <CardSkelleton className="py-10 px-5 hidden lg:block ">
            <History />
          </CardSkelleton>
        </div>
        <div className="absolute -inset-x-px bottom-[-2px] h-[30%] bg-linear-to-t from-white dark:from-black to-transparent"></div>
      </div>
    </div>
  );
}

export const CardSkelleton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Card
      className={cn(
        "border rounded-[min(var(--radius-2xl),24px)] w-[20rem] lg:w-full ",
        className,
      )}
    >
      {children}
    </Card>
  );
};

export default CardsDemo;
