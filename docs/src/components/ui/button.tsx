import { cn } from "@/lib/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({
  className,
  children,
  ...props
}: ButtonProps) => {
  return(
    <button
    className={cn(
      "text-24 font-semibold border py-2 px-3 rounded-[4px] w-32 h-10   relative flex items-center cursor-pointer ",
      className,
    )}
    {...props}
  >
    {children}
  </button>
  )
};
