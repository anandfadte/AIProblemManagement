import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Clock,
  Download,
  FileText,
  Layers,
  Star,
  Users,
} from "lucide-react";
import { getActivities, getActivityBySlug } from "@/lib/activities";
import { ActivityDetail } from "@/components/ActivityDetail";

export async function generateStaticParams() {
  const activities = await getActivities();
  return activities.map((a) => ({ slug: a.meta.slug }));
}

const basePath = process.env.NODE_ENV === "production" ? "/AIProblemManagement" : "";

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = await getActivityBySlug(slug);
  if (!activity) notFound();

  const allActivities = await getActivities();
  const currentIndex = allActivities.findIndex(
    (a) => a.meta.slug === slug
  );
  const prev = currentIndex > 0 ? allActivities[currentIndex - 1] : null;
  const next =
    currentIndex < allActivities.length - 1
      ? allActivities[currentIndex + 1]
      : null;

  const { meta } = activity;

  return (
    <div className="mx-auto max-w-[900px] px-4 py-10">
      {/* Breadcrumb */}
      <Link
        href="/activities"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
      >
        <ChevronLeft size={16} />
        Back to activities
      </Link>

      {/* Priority banner */}
      {meta.priority && meta.group && (
        <div
          className="mb-6 flex items-center gap-3 rounded-xl border-2 px-5 py-3"
          style={{
            borderColor: meta.group_color || "#F59E0B",
            backgroundColor: (meta.group_color || "#F59E0B") + "0A",
          }}
        >
          <Star
            size={18}
            className="shrink-0 fill-amber-500 text-amber-500"
          />
          <span className="text-sm font-semibold text-text-primary">
            Demo Day Priority Activity
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
            style={{ backgroundColor: meta.group_color || "#F59E0B" }}
          >
            <Users size={12} />
            {meta.group}
          </span>
        </div>
      )}

      {/* Section 1 — Header + Brief + Download */}
      <section className="mb-10">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          <span
            className="text-accent"
            style={
              meta.priority && meta.group_color
                ? { color: meta.group_color }
                : undefined
            }
          >
            {String(meta.sort_order).padStart(2, "0")}.
          </span>{" "}
          {meta.name}
        </h1>

        {/* Metadata strip */}
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-alt px-3 py-1 font-medium text-text-secondary">
            <Layers size={14} />
            {meta.pattern}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-alt px-3 py-1 text-text-secondary">
            <Clock size={14} />
            {meta.duration_minutes} min
          </span>
          {meta.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-surface-alt px-3 py-1 text-text-muted"
            >
              {tool}
            </span>
          ))}
          {meta.multimodal && (
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              Multimodal
            </span>
          )}
        </div>

        {/* Brief */}
        {activity.briefHtml && (
          <div className="mb-8 max-w-[720px]">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
              <FileText size={14} />
              Problem Brief
            </div>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: activity.briefHtml }}
            />
          </div>
        )}

        {/* Download buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`${basePath}/downloads/${meta.slug}.zip`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            <Download size={16} />
            Download Activity Pack
          </a>
          {meta.consensus && (
            <a
              href={`${basePath}/consensus/${meta.slug}.xlsx`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-accent px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              <FileText size={16} />
              Download Consensus Workbook
            </a>
          )}
        </div>
      </section>

      {/* Rationale — Why This Activity (priority only) */}
      {activity.rationaleHtml && (
        <section className="mb-10">
          <div
            className="rounded-xl border-l-4 p-6"
            style={{
              borderColor: meta.group_color || "#F59E0B",
              backgroundColor: (meta.group_color || "#F59E0B") + "08",
            }}
          >
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: activity.rationaleHtml }}
            />
          </div>
        </section>
      )}

      {/* Section 2 — The Clue (always visible) */}
      {activity.clueHtml && (
        <section className="mb-10">
          <div className="rounded-xl border-l-4 border-l-callout-border bg-callout-bg p-6">
            <h3 className="mb-3 text-lg font-semibold text-text-primary">
              A hint before you write the prompt
            </h3>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: activity.clueHtml }}
            />
          </div>
          <p className="mt-3 max-w-[720px] text-sm italic text-text-muted">
            Use the clue and the brief to try writing the prompts yourself. If
            you want to see the Skeleton or Complete versions, each step has its
            own reveal buttons below.
          </p>
        </section>
      )}

      {/* Section 3 — Steps */}
      {activity.stepsData && (
        <section className="mb-10">
          <h2 className="mb-6 text-xl font-semibold text-text-primary">
            Steps
          </h2>
          <ActivityDetail slug={slug} stepsData={activity.stepsData} />
        </section>
      )}

      {/* Section 4 — What Good Looks Like */}
      {activity.whatGoodLooksLikeHtml && (
        <section className="mb-10">
          <div className="rounded-xl border border-border bg-callout-bg p-6 max-w-[820px]">
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              What good looks like
            </h3>
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: activity.whatGoodLooksLikeHtml,
              }}
            />
          </div>
        </section>
      )}

      {/* Previous / Next navigation */}
      <nav className="mt-16 flex items-center justify-between border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/activities/${prev.meta.slug}`}
            className="group flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            <div>
              <div className="text-xs text-text-muted">Previous</div>
              <div className="font-medium text-text-secondary group-hover:text-accent">
                {String(prev.meta.sort_order).padStart(2, "0")}. {prev.meta.name}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/activities/${next.meta.slug}`}
            className="group flex items-center gap-2 text-right text-sm text-text-muted hover:text-accent transition-colors"
          >
            <div>
              <div className="text-xs text-text-muted">Next</div>
              <div className="font-medium text-text-secondary group-hover:text-accent">
                {String(next.meta.sort_order).padStart(2, "0")}. {next.meta.name}
              </div>
            </div>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
