

import { cn } from "@/lib/utils/cn";
import { IconGripVertical } from "@tabler/icons-react";
import * as ResizablePremitive from "react-resizable-panels";

function ResizablePanelGroup({ className, ...props} : ResizablePremitive.GroupProps){
    return(
          <ResizablePremitive.Group 
            dat-slot="resizable-panel-group"
            className={cn("flex h-full w-full aria-[orientation=vertical]:flex-col" , className)}

            {...props}
          />
    )
}


function ResizablePanel({...props} : ResizablePremitive.PanelProps){
    return(
        <ResizablePremitive.Panel 
        data-slot="resizable-panel" 
        {...props}
         />
    )
}

function ResizableHandler ({
className , withHandle , ...props
}: ResizablePremitive.SeparatorProps &{ withHandle ?: boolean}){
    return(
        <ResizablePremitive.Separator
        data-solt="resizable-handler"
        className={cn(" relative flex w-px items-center justify-center border"
            ,
            "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2"
             , className)}
        {...props}
        >
            {
                withHandle && (
                    <div className=" absolute z-50 flex h-4 w-3 items-center justify-center rounded-xs border ">
                        <IconGripVertical />
                    </div>
                )
            }

        </ResizablePremitive.Separator>
    )
}

export {ResizablePanelGroup , ResizablePanel  , ResizableHandler}