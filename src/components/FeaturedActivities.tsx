"use client";

import Link from "next/link";
import { Clock, Layers, Star, Users } from "lucide-react";

interface FeaturedCard {
  id: string;
  slug: string;
  name: string;
  pattern: string;
  duration_minutes: number;
  tools: string[];
  multimodal: boolean;
  sort_order: number;
  complexity: string;
  domain: string;
  group: string;
  group_color: string;
}

export function FeaturedActivities({
  activities,
}: {
  activities: FeaturedCard[];
}) {
  return (
    <section className="mb-14">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5">
          <Star size={16} className="fill-amber-500 text-amber-500" />
          <span className="text-sm font-bold uppercase tracking-wider text-amber-500">
            Demo Day Activities
          </span>
        </div>
        <span className="text-sm text-text-muted">
          5 groups &middot; 1 activity each
        </span>
      </div>

      <p className="mb-6 max-w-2xl text-text-secondary">
        These are the priority activities for the hands-on demo. Each group is
        assigned one activity. Find your group below and dive in.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((a) => (
          <Link
            key={a.slug}
            href={`/activities/${a.slug}`}
            className="group relative overflow-hidden rounded-xl border-2 bg-surface p-5 transition-all hover:shadow-lg"
            style={{ borderColor: a.group_color + "66" }}
          >
            {/* Group badge */}
            <div className="mb-3 flex items-center justify-between">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
                style={{ backgroundColor: a.group_color }}
              >
                <Users size={12} />
                {a.group}
              </span>
              <span className="text-3xl font-bold" style={{ color: a.group_color + "99" }}>
                {String(a.sort_order).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mb-2 text-base font-semibold leading-snug text-text-primary group-hover:text-accent transition-colors">
              {a.name}
            </h3>

            <p className="mb-3 text-xs text-text-muted">{a.domain}</p>

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
              {a.multimodal && (
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent">
                  Multimodal
                </span>
              )}
            </div>

            {/* Glow accent */}
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10 blur-2xl"
              style={{ backgroundColor: a.group_color }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
