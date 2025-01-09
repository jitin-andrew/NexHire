"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      isIconOnly
      variant="ghost"
      onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
