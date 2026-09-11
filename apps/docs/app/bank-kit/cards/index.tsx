import { cn } from "@/lib/utils/cn";
import { AddBankAccount } from "./bank-account";

import { MoneyScanner } from "./money-scanner";
import { History } from "./payment-history";
import { PaymentRequest } from "./payment-request";

import { SideBar } from "./side-bar";
import { PaymentThree } from "@sol-ui/bank-kit/components";

function CardsDemo() {
  return (
    <div 
      data-slot="cards-demo"
      className="relative w-full max-w-none px-10 gap-3 overflow-hidden "
    >
      <div className="grid grid-cols-2 lg:grid-cols-3  mx-auto gap-3  md:max-w-3xl lg:max-w-none ">
        <div className="flex flex-col gap-3 items-start">
          <CardSkelleton>
            <MoneyScanner />
          </CardSkelleton>
          <CardSkelleton className="py-1 px-2">
            <AddBankAccount />
          </CardSkelleton>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <CardSkelleton className="py-4 px-3">
            <PaymentRequest />
          </CardSkelleton>

          <CardSkelleton className="px-2 py-3">
            <SideBar />
          </CardSkelleton>
        </div>

        <div className="hidden md:block">
          <div className="flex flex-col gap-3 items-start ">
            <CardSkelleton className="py-16 px-8 hidden lg:block">
              <PaymentThree />
            </CardSkelleton>
            <CardSkelleton className="py-10 px-5 hidden lg:block ">
              <History />
            </CardSkelleton>
          </div>
        </div>
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
    <div
      className={cn(
        "border  rounded-[min(var(--radius-2xl),24px)] w-[20rem] lg:w-full ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CardsDemo;
