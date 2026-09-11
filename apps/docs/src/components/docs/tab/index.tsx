import { cn } from "@/lib/utils/cn";
import { Tab , Tabs} from "fumadocs-ui/components/tabs";

export const DocTab = ({
  className,
  children,
  ...rest
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Tab {...rest} className={cn("bg-transparent border-none", className)}>
      {children}
    </Tab>
  );
};

export const DocTabs = ({className , children , ...rest} : {className ?: string , children : React.ReactNode})=>{
  return(
    <Tabs {...rest} className={cn(" bg-[#ebebeb]/40 dark:bg-[#121212]" ,className )}>
      {
        children
      }
    </Tabs>
  )
}