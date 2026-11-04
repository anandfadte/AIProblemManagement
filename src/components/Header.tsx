"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-text-primary hover:text-accent transition-colors"
        >
          AI Studio
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/activities"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Activities
          </Link>
          <button
            onClick={toggle}
            className="rounded-md p-2 text-text-muted hover:bg-surface-alt hover:text-text-primary transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
