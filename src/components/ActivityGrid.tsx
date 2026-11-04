"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Layers, RotateCcw } from "lucide-react";

interface ActivityCard {
  id: string;
  slug: string;
  name: string;
  pattern: string;
  duration_minutes: number;
  tools: string[];
  multimodal: boolean;
  sort_order: number;
}

export function ActivityGrid({
  activities,
  patterns,
  tools,
}: {
  activities: ActivityCard[];
  patterns: string[];
  tools: string[];
}) {
  const [patternFilter, setPatternFilter] = useState("");
  const [toolFilter, setToolFilter] = useState("");

  const filtered = activities.filter((a) => {
    if (patternFilter && a.pattern !== patternFilter) return false;
    if (toolFilter && !a.tools.includes(toolFilter)) return false;
    return true;
  });

  const hasFilters = patternFilter || toolFilter;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={patternFilter}
          onChange={(e) => setPatternFilter(e.target.value)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary focus:border-accent focus:outline-none"
        >
          <option value="">All patterns</option>
          {patterns.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          value={toolFilter}
          onChange={(e) => setToolFilter(e.target.value)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary focus:border-accent focus:outline-none"
        >
          <option value="">All tools</option>
          {tools.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {hasFilters && (
          <button
            onClick={() => {
              setPatternFilter("");
              setToolFilter("");
            }}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        )}

        <span className="ml-auto text-sm text-text-muted">
          {filtered.length} activit{filtered.length === 1 ? "y" : "ies"}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/activities/${a.slug}`}
            className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/50 hover:shadow-md"
          >
            <div className="mb-3 flex items-start justify-between">
              <span className="text-3xl font-bold text-accent/80">
                {String(a.sort_order).padStart(2, "0")}
              </span>
              {a.multimodal && (
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent">
                  Multimodal
                </span>
              )}
            </div>

            <h3 className="mb-3 text-base font-semibold leading-snug text-text-primary group-hover:text-accent transition-colors">
              {a.name}
            </h3>

            <div className="mb-3 flex items-center gap-3 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1 rounded-md bg-surface-alt px-2 py-1 font-medium">
                <Layers size={12} />
                {a.pattern}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {a.duration_minutes} min
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {a.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md bg-surface-alt px-2 py-0.5 text-[11px] font-medium text-text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
