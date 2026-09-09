"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "./ui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeToggle () {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="p-1 w-fit border-none rounded-lg"
      aria-label="Toggle theme">
      {theme == "light" ? (
        <IconMoon className="w-5 h-5" />
      ) : (
        <IconSun className="w-5 h-5" />
      )}
    </Button>
  );
};