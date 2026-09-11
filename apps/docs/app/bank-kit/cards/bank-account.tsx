import { IconArrowLeft } from "@tabler/icons-react";



export const AddBankAccount = () => {
  return (
    <div className="max-w-sm h-fit my-5 mx-2 relative ">
      <div className="flex items-center justify-between mb-6">
        <div
          data-role="back-arrow"
          className="size-8 bg-background rounded-full flex items-center justify-center active:not-aria-[haspopup]:translate-y-px "
        >
          <IconArrowLeft size={18} />
        </div>
        <div data-slot="card-title" className="font-medium">
          Bank Accounts
        </div>
      </div>

      <div className="cursor-pointer border hover:bg-(--hover-secondary) rounded-md flex items-center justify-between relative py-2 my-2">
        <div className="pl-2 inline-flex items-center gap-2">
          <span className="w-[60px] truncate">sola bank bf</span>
          <span>***71</span>
        </div>
        <div className="flex items-center gap-2 pr-1">
          <span
            data-slot="badge"
            data-variant="outline"
            className="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-2xl border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 "
          >
            Primary
          </span>
          <div className="rotate-90">
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
          </div>
        </div>
      </div>
      <div className="cursor-pointer border hover:bg-(--hover-secondary) rounded-md flex items-center justify-between relative py-2 ">
        <div className="pl-2 inline-flex items-center gap-2 ">
          <span className="w-[60px] overflow-hidden">smp</span>
          <span>***89</span>
        </div>
        <div className="flex items-center gap-2 pr-1">
          <div className="rotate-90">
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
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-1 text-center mt-4 ">
        <button
          role="add-new-bank-account"
          data-slot="button"
          data-variant="default"
          data-size="default"
          className="cursor-pointer bg-background-inverse text-foreground-inverse hover:bg-(--hover-primary) active:bg-(--hover-primary)  flex items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3  [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4  gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-[31px] rounded-lg"
        >
          <p className="pb-[2.5px]">Add new bank account</p>
        </button>
      </div>
    </div>
  );
};
