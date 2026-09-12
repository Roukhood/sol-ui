"use client";

import * as React from "react";
import { bankKitMotion } from "../tokens";

/** Interruptible sheet enter/exit with delayed unmount. */
export function useSlideSheet(open: boolean, durationMs = bankKitMotion.durationSheet) {
  const [mounted, setMounted] = React.useState(open);
  const [entered, setEntered] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setMounted(true);
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setEntered(true));
      });
      return () => cancelAnimationFrame(id);
    }

    setEntered(false);
    const timeout = window.setTimeout(() => setMounted(false), durationMs);
    return () => window.clearTimeout(timeout);
  }, [open, durationMs]);

  return { mounted, entered };
}
