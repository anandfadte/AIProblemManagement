import Link from "next/link";
import { Zap } from "lucide-react";
import { getActivities, getPatterns, getTools } from "@/lib/activities";
import { ActivityGrid } from "@/components/ActivityGrid";
import { FeaturedActivities } from "@/components/FeaturedActivities";

export default async function ActivitiesPage() {
  const [activities, patterns, tools] = await Promise.all([
    getActivities(),
    getPatterns(),
    getTools(),
  ]);

  const priorityActivities = activities.filter((a) => a.meta.priority);
  const allCards = activities.map((a) => ({
    id: a.meta.id,
    slug: a.meta.slug,
    name: a.meta.name,
    pattern: a.meta.pattern,
    duration_minutes: a.meta.duration_minutes,
    tools: a.meta.tools,
    multimodal: a.meta.multimodal,
    sort_order: a.meta.sort_order,
    priority: a.meta.priority,
    group: a.meta.group,
    group_color: a.meta.group_color,
  }));

  const featuredCards = priorityActivities.map((a) => ({
    id: a.meta.id,
    slug: a.meta.slug,
    name: a.meta.name,
    pattern: a.meta.pattern,
    duration_minutes: a.meta.duration_minutes,
    tools: a.meta.tools,
    multimodal: a.meta.multimodal,
    sort_order: a.meta.sort_order,
    complexity: a.meta.complexity,
    domain: a.meta.domain,
    group: a.meta.group!,
    group_color: a.meta.group_color!,
  }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Warm-up Activity Banner */}
      <Link
        href="/warmup"
        className="group mb-8 flex items-center justify-between rounded-xl border border-border bg-surface-alt p-4 transition-all hover:border-accent/40 hover:shadow-md"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Zap size={20} className="text-accent" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
              Warm-up: AI Prompt Recreation Challenge
            </p>
            <p className="text-xs text-text-muted">
              Practice prompt engineering with 3 difficulty levels before diving into the activities
            </p>
          </div>
        </div>
        <span className="hidden sm:block rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted group-hover:border-accent/40 group-hover:text-accent transition-colors">
          Open Warm-up
        </span>
      </Link>

      {/* Featured Activities */}
      {featuredCards.length > 0 && (
        <FeaturedActivities activities={featuredCards} />
      )}

      {/* All Activities */}
      <section>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-text-primary">
          All Activities
        </h2>
        <p className="mb-8 text-text-muted">
          {activities.length} exercises across four AI orchestration patterns.
        </p>
        <ActivityGrid activities={allCards} patterns={patterns} tools={tools} />
      </section>
    </div>
  );
}
