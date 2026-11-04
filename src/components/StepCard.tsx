"use client";

import { useState, useEffect } from "react";
import { Lock, Eye, Paperclip } from "lucide-react";
import { CopyButton } from "./CopyButton";

const TOOL_COLORS: Record<string, string> = {
  ChatGPT: "bg-tool-chatgpt/15 text-tool-chatgpt",
  Gemini: "bg-tool-gemini/15 text-tool-gemini",
  Claude: "bg-tool-claude/15 text-tool-claude",
  Mistral: "bg-tool-mistral/15 text-tool-mistral",
};

function highlightBrackets(text: string): React.ReactNode[] {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) => {
    if (/^\[.+\]$/.test(part)) {
      return (
        <span
          key={i}
          className="rounded px-1 bg-yellow-200/80 text-yellow-900 dark:bg-yellow-500/20 dark:text-yellow-300"
        >
          {part}
        </span>
      );
    }
    return part;
  });
}

interface StepProps {
  slug: string;
  step: number;
  title: string;
  tool?: string;
  tool_config?: string;
  role?: string;
  inputs?: string[];
  instruction: string;
  partial_prompt?: string;
  full_prompt?: string;
}

export function StepCard({
  slug,
  step,
  title,
  tool,
  tool_config,
  role,
  inputs,
  instruction,
  partial_prompt,
  full_prompt,
}: StepProps) {
  const [skeletonRevealed, setSkeletonRevealed] = useState(false);
  const [fullRevealed, setFullRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);

  const skeletonKey = `revealed-skeleton-${slug}-${step}`;
  const fullKey = `revealed-full-${slug}-${step}`;

  useEffect(() => {
    setMounted(true);
    try {
      if (localStorage.getItem(skeletonKey) === "true") setSkeletonRevealed(true);
      if (localStorage.getItem(fullKey) === "true") setFullRevealed(true);
    } catch {}
  }, [skeletonKey, fullKey]);

  const revealSkeleton = () => {
    setSkeletonRevealed(true);
    try { localStorage.setItem(skeletonKey, "true"); } catch {}
  };

  const revealFull = () => {
    setFullRevealed(true);
    try { localStorage.setItem(fullKey, "true"); } catch {}
  };

  const hasPrompts = !!partial_prompt || !!full_prompt;
  const isToolStep = !!tool;
  const toolColorClass = tool ? TOOL_COLORS[tool] || "bg-surface-alt text-text-muted" : "";

  return (
    <div
      className={`relative flex gap-4 rounded-xl border pl-4 pr-5 py-5 sm:pl-5 sm:pr-6 sm:py-6 max-w-[820px] ${
        isToolStep
          ? "border-border border-l-4 border-l-accent"
          : "border-border/60"
      }`}
    >
      {/* Step number badge */}
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
          isToolStep
            ? "bg-accent/10 text-accent"
            : "bg-surface-alt text-text-muted"
        }`}
        style={{ fontFamily: "Georgia, serif" }}
      >
        {String(step).padStart(2, "0")}
      </div>

      <div className="min-w-0 flex-1 space-y-3">
        {/* Title row */}
        <h3
          className={`text-base font-semibold leading-snug ${
            isToolStep ? "text-text-primary" : "text-text-secondary"
          }`}
        >
          {title}
        </h3>

        {/* Tool metadata */}
        {isToolStep && (
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${toolColorClass}`}
            >
              {tool}
            </span>
            {role && (
              <span className="inline-flex items-center rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-text-muted">
                {role}
              </span>
            )}
            {tool_config && (
              <span className="text-xs italic text-text-muted">
                {tool_config}
              </span>
            )}
          </div>
        )}

        {/* Inputs */}
        {inputs && inputs.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
            <Paperclip size={12} className="shrink-0" />
            <span>Inputs:</span>
            {inputs.map((input) => (
              <span
                key={input}
                className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-[11px]"
              >
                {input}
              </span>
            ))}
          </div>
        )}

        {/* Instruction prose */}
        <p
          className={`text-sm leading-relaxed ${
            isToolStep ? "text-text-secondary" : "text-text-muted"
          }`}
        >
          {instruction}
        </p>

        {/* Prompt reveal buttons + content */}
        {mounted && hasPrompts && (
          <div className="space-y-3 pt-1">
            {/* Buttons row */}
            <div className="flex flex-wrap gap-2">
              {partial_prompt && !skeletonRevealed && (
                <button
                  onClick={revealSkeleton}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-alt px-4 py-2 text-xs font-medium text-text-primary hover:border-accent hover:text-accent transition-colors"
                >
                  <Lock size={14} />
                  Show Skeleton Prompt
                </button>
              )}
              {full_prompt && !fullRevealed && (
                <button
                  onClick={revealFull}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-alt px-4 py-2 text-xs font-medium text-text-primary hover:border-accent hover:text-accent transition-colors"
                >
                  <Eye size={14} />
                  Show Full Prompt
                </button>
              )}
            </div>

            {/* Skeleton prompt block */}
            {skeletonRevealed && partial_prompt && (
              <div className="animate-reveal">
                <div className="relative">
                  <div className="absolute right-3 top-3 z-10">
                    <CopyButton text={partial_prompt} />
                  </div>
                  <pre className="overflow-x-auto rounded-lg bg-prompt-bg p-4 pr-24 font-[family-name:var(--font-mono)] text-sm leading-relaxed text-[#c9cdd4] whitespace-pre-wrap">
                    {highlightBrackets(partial_prompt)}
                  </pre>
                </div>
              </div>
            )}

            {/* Full prompt block */}
            {fullRevealed && full_prompt && (
              <div className="animate-reveal">
                <div className="relative">
                  <div className="absolute right-3 top-3 z-10">
                    <CopyButton text={full_prompt} />
                  </div>
                  <pre className="overflow-x-auto rounded-lg bg-prompt-bg p-4 pr-24 font-[family-name:var(--font-mono)] text-sm leading-relaxed text-[#c9cdd4] whitespace-pre-wrap">
                    {full_prompt}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
