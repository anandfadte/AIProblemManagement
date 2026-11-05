"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, User } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [returning, setReturning] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("participant_name");
    if (saved) {
      setName(saved);
      setReturning(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    localStorage.setItem("participant_name", trimmed);
    router.push("/warmup");
  }

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
            <User size={32} className="text-accent" />
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Welcome to the
          </h1>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-accent sm:text-3xl">
            Applied AI Studio
          </h2>
          <p className="text-base text-text-secondary">
            Problem Management — Hands-on Workshop
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-text-secondary"
            >
              {returning ? "Welcome back! Confirm your name" : "Enter your name to get started"}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              autoFocus
              autoComplete="off"
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-light disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {returning ? "Continue" : "Enter the Platform"}
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-text-muted">
          Your name is stored locally on this device only.
        </p>
      </div>
    </div>
  );
}
