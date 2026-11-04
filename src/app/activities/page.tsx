import { getActivities, getPatterns, getTools } from "@/lib/activities";
import { ActivityGrid } from "@/components/ActivityGrid";

export default async function ActivitiesPage() {
  const [activities, patterns, tools] = await Promise.all([
    getActivities(),
    getPatterns(),
    getTools(),
  ]);

  const cards = activities.map((a) => ({
    id: a.meta.id,
    slug: a.meta.slug,
    name: a.meta.name,
    pattern: a.meta.pattern,
    duration_minutes: a.meta.duration_minutes,
    tools: a.meta.tools,
    multimodal: a.meta.multimodal,
    sort_order: a.meta.sort_order,
  }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-text-primary">
        Activities
      </h1>
      <p className="mb-8 text-text-muted">
        {activities.length} exercises across four AI orchestration patterns.
      </p>
      <ActivityGrid activities={cards} patterns={patterns} tools={tools} />
    </div>
  );
}
