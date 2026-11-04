import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Applied AI Studio{" "}
          <span className="block text-accent">Problem Management</span>
        </h1>
        <p className="mb-10 text-lg leading-relaxed text-text-secondary">
          Four AI orchestration patterns. Nineteen activities. Pattern
          discipline over tool choice.
        </p>
        <Link
          href="/activities"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-light"
        >
          Browse the activities
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
