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
