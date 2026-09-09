export const PaymentRequest = () => {
  return (
    <div className="max-w-sm pl-2">
      <div data-slot="card-title" className="text-md font-medium pb-2 ">
        Notifications / Request
      </div>

      <div className="flex flex-col gap-2 ">
        <div data-role="payment-type" className="text-sm text-(--text-primary)">
          Payment request from{" "}
          <span className="text-foreground font-medium">satish</span>
        </div>

        <div className="my-4">
          <button
            aria-label="payment-request-btn"
            data-slot="button"
            data-variant="default"
            data-size="default"
            className="cursor-pointer bg-background-inverse text-foreground-inverse hover:bg-(--hover-primary) active:bg-(--hover-primary) text-center flex items-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3  [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4  gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-[31px] rounded-lg"
          >
            <p className="pb-[2.5px]">Send money</p>
          </button>
        </div>

        <div className="pb-2 ">
          <div
            data-role="payment-type"
            className="text-sm text-(--text-primary)"
          >
            Message for you
          </div>
          <p className="">Your car first installment.</p>
        </div>
      </div>
    </div>
  );
};
