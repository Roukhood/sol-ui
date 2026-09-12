"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";
// import { Index } from "@/registry/__index__";
import { Loader2 } from "lucide-react";
import { Card } from "@sol-ui/components";

interface ComponentPreviewProps extends React.ComponentProps<"div"> {
  name?: string;
  align?: "center" | "start" | "end";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  full?: boolean;
}

export function ComponentPreview({
  children,
  className,
  align = "center",
  size = "md",
  full = false,
  ...props
}: ComponentPreviewProps) {
  return (
    <div className={cn("relative w-full", className)} {...props}>
      <div
        className={cn(
          "relative flex items-center border border-[var(--border)] rounded-2xl justify-center w-full overflow-hidden py-20",
        )}
      >
        <React.Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-full">
              <Loader2 className="w-6 h-6 animate-spin " />
            </div>
          }
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { size } as any);
            }
            return child;
          })}
        </React.Suspense>
      </div>
    </div>
  );
}
