"use client";
import * as React from "react";

const accounts = [
  { id: 1, name: "Sola bank" },
  { id: 2, name: "Sb inc" },
  { id: 3, name: "solaria" },
];

function Payment() {
  const [isTransferMoney, setisTransferMoney] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [fromAccount, setFromAccount] = React.useState("");
  const [toAccount, setToAccount] = React.useState("");
  const [toAmount, setToAmount] = React.useState("");
  const [fromAmount, setFromAmount] = React.useState("");
  const [isOpen, setIsOpen] = React.useState<string | null>(null);
  const [pin, setPin] = React.useState<string | null>(null);
  const [isPin, setIsPin] = React.useState<boolean>(false);

  const canTransfer =
    fromAccount != "" &&
    toAccount != "" &&
    toAmount.trim() != "" &&
    fromAmount.trim() != "" &&
    Number(toAmount) > 0;

  return (
    <div className="w-full flex items-center justify-center ">
      <div className="relative max-w-122  w-full border rounded-xl ">
        <Heading
          data-slot="title"
          className="text-md font-medium border-b px-4 py-2 bg-(--hover-secondary) rounded-t-[10.2px]"
        >
          Bank to bank transfer
        </Heading>
        <div className="px-4 py-4">
          <div className="py-2 flex flex-col md:flex-row justify-around gap-2 overflow-hidden ">
            <div className="h-full ">
              <SubHeading className="pl-1">From</SubHeading>
              <div className="flex-col gap-2 ">
                <div
                  data-role="bank-title"
                  className={`bg-(--hover-secondary)/90 mb-2 w-full select-none text-sm border rounded-lg p-1 flex items-center justify-end hover:bg-(--hover-secondary) group`}
                >
                  <button
                    className="w-full text-start pl-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen("from");
                    }}
                  >
                    {fromAccount == "" ? "Select account" : fromAccount}
                  </button>
                  {isOpen == "from" && (
                    <div className="dropdown-menu absolute z-50 bg-background border -mr-[9px] mt-4 w-44 h-fit overflow-hidden overflow-y-scroll scrollbar-none rounded-lg p-1">
                      {accounts.map((account, id) => {
                        return (
                          <button
                            aria-label="bank-name"
                            onClick={(e) => {
                              e.preventDefault();
                              setFromAccount(account.name);
                              setIsOpen(null);
                            }}
                            key={id}
                            className="text-start w-full select-none text-sm text-(--text-primary)  hover:bg-(--hover-secondary) px-3 py-2 rounded-md"
                          >
                            {account.name}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="my-6">
                  <SubHeading className="pl-1">Account number</SubHeading>
                    <input
                      value={fromAmount}
                      onChange={(e) => setFromAmount(e.target.value)}
                      min={1}
                      type="number"
                      placeholder="Enter account number"
                      className="outline-none pl-2 py-1 border rounded-lg "
                    />
                </div>
              </div>
            </div>
            <div className="">
              <SubHeading className="pl-1">To</SubHeading>

              <div className="flex-col gap-2">
                <div
                  data-role="bank-title"
                  className="bg-(--hover-secondary)/90 mb-2 relative  outline-none w-full select-none text-sm  border rounded-lg p-1 flex items-center justify-end hover:bg-(--hover-secondary) group"
                >
                  <button
                    className="w-full text-start pl-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen("to");
                    }}
                  >
                    {toAccount == "" ? "Select account" : toAccount}
                  </button>
                  {isOpen == "to" && (
                    <div className=" absolute z-50 bg-background border -mr-1 mt-5 w-44 h-fit overflow-hidden overflow-y-scroll scrollbar-none rounded-lg p-1">
                      {accounts
                        .filter((account) => account.name != fromAccount)
                        .map((account, id) => {
                          return (
                            <button
                              aria-label="bank-name"
                              onClick={(e) => {
                                e.preventDefault();
                                setToAccount(account.name);
                                setIsOpen(null);
                              }}
                              key={id}
                              className="text-start w-full select-none text-sm text-(--text-primary)  hover:bg-(--hover-secondary) px-3 py-2 rounded-md"
                            >
                              {account.name}
                            </button>
                          );
                        })}
                    </div>
                  )}
                </div>
                <div className="my-6">
                  <SubHeading className="pl-1">Account number</SubHeading>
                    <input
                      value={toAmount}
                      onChange={(e) => setToAmount(e.target.value)}
                      min={1}
                      type="number"
                      placeholder="Enter account number"
                      className="outline-none pl-2 py-1 border rounded-lg"
                    />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 mb-2 pr-4">
              <button
                disabled={!canTransfer}
                aria-label="payment-request-btn"
                data-slot="button"
                data-variant="default"
                data-size="default"
                className={`w-30 cursor-pointer bg-background-inverse text-foreground-inverse hover:bg-(--hover-primary) active:bg-(--hover-primary) text-center flex items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3    gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-[31px] rounded-lg ${!canTransfer && " cursor-not-allowed"}`}
                onClick={() => {
                  setisTransferMoney(true);
                  setTimeout(() => {
                    setisTransferMoney(false);
                    setIsPin(true);
                  }, 3000);
                }}
              >
                {!isTransferMoney ? (
                  <p className="pb-[2.5px]">Transfer money</p>
                ) : (
                  <div className="flex flex-1 gap-1 items-center justify-center">
                    <div className="size-2 bg-background rounded-full animate-bounce transition-all ease-in"></div>
                    <div className="size-2 bg-background rounded-full animate-bounce transition-all ease-in delay-150"></div>
                    <div className="size-2 bg-background rounded-full animate-bounce transition-all ease-in"></div>
                  </div>
                )}
              </button>
          </div>

          <div className="flex items-center justify-center">
            <SubHeading
              data-role="bank address"
              className="text-[12px]  hover:text-foreground active:translate-y-px transition-all select-none  flex items-center justify-center mt-2"
            >
              Terms & conditions applied
            </SubHeading>
          </div>
          {isPin && (
            <AmountAndInput
                pin={pin}
                setPin={setPin}
                isSuccess={isSuccess}
                setIsSuccess={setIsSuccess}
            />
          )}
          {isSuccess && (
            <Message
              from={fromAccount}
              to={toAccount}
              isTransactionSuccess={true}
              isSuccess={isSuccess}
              setIsSuccess={setIsSuccess}
              setIsPin={setIsPin}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;

export const UpArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      className=""
      strokeWidth="2"
      stroke="currentColor"
    >
      <path
        d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

interface MessageProps {
  isTransactionSuccess: boolean;
  from: string;
  to: string;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Message = ({
  isTransactionSuccess,
  from,
  to,
  setIsSuccess,
  setIsPin,
}: MessageProps) => {
  return (
    <div className="w-full h-full border  rounded-[11px]  absolute inset-0 z-999 bg-background text-foreground ">
      <Heading
        data-slot="title"
        className="text-md font-medium border-b px-4 py-2 bg-(--hover-secondary) rounded-t-[10.2px]"
      >
        {isTransactionSuccess ? "Transaction Success" : "Transaction Failed"}
      </Heading>

      <div className="px-4">
        <div className="py-4">
          <SubHeading data-role="Sender information" className=" my-2 flex">
            <span className="w-10  flex items-center justify-start">
              from :
            </span>{" "}
            <span className="text-foreground font-medium">{from}</span>
          </SubHeading>
          <SubHeading data-role="Receiver information" className="flex">
            <span className="w-10  flex items-center justify-start">To :</span>
            <span className="text-foreground font-medium">{to}</span>
          </SubHeading>
        </div>

        <div className="flex gap-2 items-center justify-center mt-8">
          <button
            onClick={() => {
              setIsSuccess(false);
              setIsPin(false);
            }}
            aria-label="payment-request-btn"
            data-slot="button"
            data-variant="default"
            data-size="default"
            className={`border cursor-pointer bg-background text-foreground hover:bg-(--hover-secondary) active:bg-(--hover-secondary) text-center flex items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3    gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-[31px] rounded-lg `}
          >
            Back to home
          </button>
          {isTransactionSuccess ? (
            <button
              onClick={() => {
                setIsSuccess(false);
                setIsPin(false);
              }}
              className={`cursor-pointer bg-background-inverse text-foreground-inverse hover:bg-(--hover-primary) active:bg-(--hover-primary) text-center  flex items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3    gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-[31px] rounded-lg `}
            >
              Send Money
            </button>
          ) : (
            <button
              onClick={() => setIsSuccess(false)}
              className={`cursor-pointer bg-background-inverse text-foreground-inverse hover:bg-(--hover-primary) active:bg-(--hover-primary) text-center flex items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 h-[31px] rounded-lg `}
            >
              Try again
            </button>
          )}
        </div>

        <SubHeading
          data-role="Enquiry"
          className="select-none text-[12px] flex items-center justify-center mt-4"
        >
          For any enquiry contact at SOL branch
        </SubHeading>
        <div className="flex items-center justify-center">
          <SubHeading
            data-role="bank address"
            className=" text-[12px]  hover:text-foreground active:translate-y-px transition-all select-none flex items-center justify-center mt-2"
          >
            sol@bank.link
          </SubHeading>
        </div>
      </div>
    </div>
  );
};

interface PinInputProps {
  pin: string | null;
  setPin: React.Dispatch<React.SetStateAction<string | null>>;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
export const PinInput = ({
  pin,
  setPin,
  isSuccess,
  setIsSuccess,
}: PinInputProps) => {
  const [pinLoading, setPinLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean | null>(null);
  return (
    
      <div className="relative h-full w-full">
        <SubHeading className="ml-1">Enter your pin below</SubHeading>
        <div className="flex gap-2 items-center">
          <input
            value={Number(pin)}
            onChange={(e) => setPin(e.target.value)}
            maxLength={4}
            placeholder="Enter passcode"
            className="outline-none pl-2 py-1 border rounded-lg"
          />
          <button
            onClick={() => {
              setPinLoading(true);
              if (Number(pin) == 7777) {
                setTimeout(() => setIsSuccess(true), 3000);
                return;
              }
              setTimeout(() => {
                setPinLoading(false);
              }, 2000);
              setTimeout(() => {
                setIsError(true);
              }, 1000);
            }}
            aria-label="payment-request-btn"
            data-slot="button"
            data-variant="default"
            data-size="default"
            className={`w-20 relative border cursor-pointer bg-background-inverse text-foreground-inverse hover:bg-(--hover-primary) active:bg-(--hover-primary) text-center flex items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3    gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-[31px] rounded-lg `}
          >
            {!pinLoading ? (
              <p className="pb-[2.5px]">Verify</p>
            ) : (
              <div className="flex flex-1 gap-1 items-center justify-center">
                <div className="size-2 bg-background rounded-full animate-bounce transition-all ease-in"></div>
                <div className="size-2 bg-background rounded-full animate-bounce transition-all ease-in delay-150"></div>
                <div className="size-2 bg-background rounded-full animate-bounce transition-all ease-in"></div>
              </div>
            )}
          </button>
        </div>
        <SubHeading className="text-[12px] ml-1">Try pin with 7777</SubHeading>
        {isError && <SubHeading className="mt-4 ml-1">something went wrong, Try again</SubHeading>}
      </div>
    
  );
};

export const Amount = () => {
  return (
    <div className="w-full h-full">
       
     <SubHeading className="ml-1">Enter your amount below</SubHeading>
      <input
        min={1}
        type="number"
        placeholder="Enter amount"
        className="outline-none pl-2 py-1 border rounded-lg "
      />
    </div>
  );
};

export const AmountAndInput = ({pin ,setPin ,isSuccess , setIsSuccess}:PinInputProps) =>{
  return (
    <div className="w-full h-full border rounded-[11px] absolute inset-0 z-50 bg-background text-foreground ">
       <Heading
        data-slot="title"
        className="text-md font-medium border-b px-4 py-2 bg-(--hover-secondary) rounded-t-[10.2px]"
      >
       Amount and PIN
      </Heading>
     <div className="relative md:top-10 top-10 left-2 md:left-26">
      <Amount />
      <div className="my-5"></div>
      <PinInput
        pin={pin}
        setPin={setPin}
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
      />
     </div>
    </div>
  );
}

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}
export const SubHeading = ({ children, className }: HeadingProps) => {
  return (
    <h1
      data-role="subheading"
      className={`select-none text-sm text-(--text-primary) py-px ${className}`}
    >
      {children}
    </h1>
  );
};

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1
      data-role="heading"
      className={`text-md font-medium py-2  ${className}`}
    >
      {children}
    </h1>
  );
};
