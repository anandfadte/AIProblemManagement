"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { Toast } from "./Toast";

export function CopyButton({ text }: { text: string }) {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setShowToast(true);
  }, [text]);

  return (
    <>
      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted hover:bg-surface-alt hover:text-text-primary transition-colors"
      >
        {showToast ? <Check size={14} /> : <Copy size={14} />}
        {showToast ? "Copied" : "Copy"}
      </button>
      {showToast && (
        <Toast message="Copied to clipboard!" onDone={() => setShowToast(false)} />
      )}
    </>
  );
}
