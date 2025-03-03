"use client";

import { Button } from "@/components/ui/Button";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Toggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-10 hidden  md:block border-2 border-white rounded-lg dark:border-black">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun
          color="white"
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />

        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
