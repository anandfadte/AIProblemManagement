"use client";

import { useEffect, useState } from "react";

export function Toast({
  message,
  onDone,
}: {
  message: string;
  onDone: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1700);
    const cleanup = setTimeout(onDone, 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] rounded-lg bg-text-primary px-4 py-2 text-sm font-medium text-surface shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
}
