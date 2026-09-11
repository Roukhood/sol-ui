import { cn } from "@/lib/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  typeOfBtn?: string;
 
};

export const Button = ({
  className,
  children,
  typeOfBtn,
  ...props
}: ButtonProps) => {
  return(
    <button
    
    className={cn(
      "text-[14px] py-1 px-2.5 rounded-xs flex items-center cursor-pointer active:translate-y-px transition-all select-none border",
      className,
      typeOfBtn == "black" ? "bg-background-inverse text-foreground-inverse hover:bg-(--hover-primary) active:bg-(--hover-primary)"  : "bg-background text-foreground hover:bg-(--hover-secondary) active:bg-(--hover-secondary)"
    )}
    {...props}
  >
    {children}
  </button>
  )
};
