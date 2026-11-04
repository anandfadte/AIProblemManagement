import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const ACTIVITIES_DIR = path.join(process.cwd(), "activities");

export interface ActivityMeta {
  id: string;
  slug: string;
  name: string;
  domain: string;
  pattern: string;
  duration_minutes: number;
  tools: string[];
  complexity: string;
  multimodal: boolean;
  sort_order: number;
  practice_only: boolean;
  priority?: boolean;
  group?: string;
  group_color?: string;
}

export interface Step {
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

export interface StepsFile {
  overview?: string;
  steps: Step[];
}

export interface Activity {
  meta: ActivityMeta;
  briefHtml: string;
  clueHtml: string;
  stepsData: StepsFile | null;
  whatGoodLooksLikeHtml: string;
  rationaleHtml: string;
  contentComplete: boolean;
}

async function markdownToHtml(md: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(md);
  return result.toString();
}

function readFileIfExists(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}

async function loadActivity(slug: string): Promise<Activity> {
  const dir = path.join(ACTIVITIES_DIR, slug);

  const metaRaw = readFileIfExists(path.join(dir, "meta.json"));
  if (!metaRaw) {
    throw new Error(`Missing meta.json for ${slug}`);
  }
  const meta: ActivityMeta = JSON.parse(metaRaw);

  const briefMd = readFileIfExists(path.join(dir, "brief.md"));
  const clueMd = readFileIfExists(path.join(dir, "clue.md"));
  const wglMd = readFileIfExists(path.join(dir, "what-good-looks-like.md"));
  const rationaleMd = readFileIfExists(path.join(dir, "rationale.md"));
  const stepsRaw = readFileIfExists(path.join(dir, "steps.json"));

  const stepsData: StepsFile | null = stepsRaw ? JSON.parse(stepsRaw) : null;

  const contentComplete = !!briefMd;

  const briefHtml = briefMd ? await markdownToHtml(briefMd) : "";
  const clueHtml = clueMd ? await markdownToHtml(clueMd) : "";
  const whatGoodLooksLikeHtml = wglMd ? await markdownToHtml(wglMd) : "";
  const rationaleHtml = rationaleMd ? await markdownToHtml(rationaleMd) : "";

  return {
    meta,
    briefHtml,
    clueHtml,
    stepsData,
    whatGoodLooksLikeHtml,
    rationaleHtml,
    contentComplete,
  };
}

export async function getActivities(): Promise<Activity[]> {
  const slugs = fs
    .readdirSync(ACTIVITIES_DIR)
    .filter((entry) =>
      fs.statSync(path.join(ACTIVITIES_DIR, entry)).isDirectory()
    );

  const activities = await Promise.all(slugs.map(loadActivity));
  return activities.sort((a, b) => a.meta.sort_order - b.meta.sort_order);
}

export async function getActivityBySlug(
  slug: string
): Promise<Activity | null> {
  const dir = path.join(ACTIVITIES_DIR, slug);
  if (!fs.existsSync(dir)) return null;
  return loadActivity(slug);
}

export async function getPatterns(): Promise<string[]> {
  const activities = await getActivities();
  const patterns = new Set(activities.map((a) => a.meta.pattern));
  return Array.from(patterns).sort();
}

export async function getTools(): Promise<string[]> {
  const activities = await getActivities();
  const tools = new Set(activities.flatMap((a) => a.meta.tools));
  return Array.from(tools).sort();
}
