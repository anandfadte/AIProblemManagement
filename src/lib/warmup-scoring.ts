export interface ScoringCategory {
  name: string;
  maxPoints: number;
  concepts: { term: string; weight: number; synonyms: RegExp[] }[];
}

export interface ScoringResult {
  total: number;
  categories: { name: string; earned: number; max: number }[];
  captured: string[];
  missed: string[];
}

export type Difficulty = "simple" | "medium" | "complex";

const SIMPLE_CATEGORIES: ScoringCategory[] = [
  {
    name: "Visual Scene",
    maxPoints: 35,
    concepts: [
      { term: "dark/enterprise theme", weight: 10, synonyms: [/dark/, /enterprise/, /professional/, /sleek/, /modern/] },
      { term: "world map", weight: 15, synonyms: [/map/, /world/, /globe/, /global/, /geographic/] },
      { term: "city nodes/locations", weight: 10, synonyms: [/cit/, /node/, /location/, /hub/, /point/, /dot/, /circle/] },
    ],
  },
  {
    name: "Animation & Movement",
    maxPoints: 35,
    concepts: [
      { term: "animated connections", weight: 15, synonyms: [/connect/, /line/, /path/, /route/, /link/, /flow/] },
      { term: "particle/data flow", weight: 10, synonyms: [/particl/, /flow/, /moving/, /travel/, /stream/, /pulse/] },
      { term: "glowing effects", weight: 10, synonyms: [/glow/, /pulse/, /bright/, /light/, /shine/, /neon/] },
    ],
  },
  {
    name: "Business Context",
    maxPoints: 30,
    concepts: [
      { term: "business operations", weight: 10, synonyms: [/business/, /operat/, /enterprise/, /corporate/, /company/] },
      { term: "transactions", weight: 10, synonyms: [/transact/, /order/, /payment/, /process/, /data/] },
      { term: "KPI/metrics display", weight: 10, synonyms: [/kpi/, /metric/, /stat/, /dashboard/, /number/, /count/, /rate/] },
    ],
  },
];

const MEDIUM_CATEGORIES: ScoringCategory[] = [
  {
    name: "Visual Scene",
    maxPoints: 20,
    concepts: [
      { term: "dark/enterprise theme", weight: 5, synonyms: [/dark/, /enterprise/, /professional/, /sleek/, /modern/] },
      { term: "world map", weight: 10, synonyms: [/map/, /world/, /globe/, /global/, /geographic/] },
      { term: "city nodes/locations", weight: 5, synonyms: [/cit/, /node/, /location/, /hub/, /point/, /dot/, /circle/] },
    ],
  },
  {
    name: "Animation & Connections",
    maxPoints: 15,
    concepts: [
      { term: "animated connections", weight: 8, synonyms: [/connect/, /line/, /path/, /route/, /link/, /flow/] },
      { term: "particle/data flow", weight: 7, synonyms: [/particl/, /flow/, /moving/, /travel/, /stream/] },
    ],
  },
  {
    name: "Business Metrics",
    maxPoints: 15,
    concepts: [
      { term: "business operations", weight: 5, synonyms: [/business/, /operat/, /enterprise/, /corporate/] },
      { term: "transactions", weight: 5, synonyms: [/transact/, /order/, /payment/, /process/] },
      { term: "KPI/metrics display", weight: 5, synonyms: [/kpi/, /metric/, /stat/, /dashboard/, /number/, /count/, /rate/, /success/] },
    ],
  },
  {
    name: "Operational Incident",
    maxPoints: 25,
    concepts: [
      { term: "incident/failure occurs", weight: 10, synonyms: [/incident/, /fail/, /error/, /problem/, /issue/, /delay/, /disrupt/, /alert/, /warning/, /red/] },
      { term: "specific location affected", weight: 8, synonyms: [/singapore/, /city/, /node/, /location/, /one of/, /specific/] },
      { term: "status change", weight: 7, synonyms: [/change/, /turn/, /status/, /color/, /red/, /green/, /slow/, /drop/, /degrad/] },
    ],
  },
  {
    name: "Recovery",
    maxPoints: 25,
    concepts: [
      { term: "system recovers", weight: 10, synonyms: [/recover/, /restore/, /return/, /normal/, /resolv/, /fix/, /heal/, /back to/] },
      { term: "metrics restore", weight: 8, synonyms: [/metric/, /rate/, /kpi/, /stat/, /number/, /return/, /restor/] },
      { term: "visual state change", weight: 7, synonyms: [/green/, /normal/, /clear/, /alert.*0/, /stable/] },
    ],
  },
];

const COMPLEX_CATEGORIES: ScoringCategory[] = [
  {
    name: "Business Scenario",
    maxPoints: 10,
    concepts: [
      { term: "control tower/operations center", weight: 5, synonyms: [/control\s*tower/, /operation/, /command/, /monitor/, /center/] },
      { term: "global/enterprise context", weight: 5, synonyms: [/global/, /enterprise/, /worldwide/, /international/, /corporate/] },
    ],
  },
  {
    name: "Global Map & Locations",
    maxPoints: 15,
    concepts: [
      { term: "world map visualization", weight: 5, synonyms: [/map/, /world/, /globe/, /geographic/] },
      { term: "multiple city locations", weight: 5, synonyms: [/cit/, /location/, /node/, /hub/, /new york/, /london/, /singapore/, /tokyo/, /mumbai/, /dubai/, /frankfurt/, /sydney/] },
      { term: "glowing/pulsing nodes", weight: 5, synonyms: [/glow/, /pulse/, /bright/, /light/, /node/, /dot/, /circle/] },
    ],
  },
  {
    name: "Business Metrics",
    maxPoints: 10,
    concepts: [
      { term: "KPI bar/dashboard", weight: 5, synonyms: [/kpi/, /metric/, /stat/, /dashboard/] },
      { term: "specific metrics (transactions, rate, alerts)", weight: 5, synonyms: [/transact/, /success.*rate/, /alert/, /active.*location/, /rate/, /count/] },
    ],
  },
  {
    name: "Business Animation",
    maxPoints: 20,
    concepts: [
      { term: "animated connections between cities", weight: 8, synonyms: [/connect/, /line/, /path/, /route/, /link/, /flow/, /between/] },
      { term: "particle/transaction flow", weight: 7, synonyms: [/particl/, /flow/, /moving/, /travel/, /stream/, /transact.*flow/] },
      { term: "transaction labels", weight: 5, synonyms: [/label/, /order/, /payment/, /shipment/, /text.*float/, /transaction.*type/] },
    ],
  },
  {
    name: "Operational Incident",
    maxPoints: 15,
    concepts: [
      { term: "Singapore incident", weight: 5, synonyms: [/singapore/, /incident/, /fail/, /error/, /problem/, /issue/] },
      { term: "status turns red/alert", weight: 5, synonyms: [/red/, /alert/, /warning/, /alarm/] },
      { term: "metrics degrade", weight: 5, synonyms: [/drop/, /degrad/, /slow/, /decreas/, /fall/, /94/, /decline/] },
    ],
  },
  {
    name: "AI Response & Rerouting",
    maxPoints: 20,
    concepts: [
      { term: "AI assistant/analysis panel", weight: 7, synonyms: [/ai/, /assistant/, /analy/, /detect/, /panel/, /artificial/] },
      { term: "recommends alternative route", weight: 7, synonyms: [/recommend/, /alternative/, /reroute/, /re-route/, /different.*route/, /bypass/, /redirect/, /change.*route/, /new.*route/] },
      { term: "dynamic rerouting animation", weight: 6, synonyms: [/reroute/, /re-route/, /bypass/, /redirect/, /new.*path/, /alternative.*path/, /mumbai/, /dubai/] },
    ],
  },
  {
    name: "Recovery & State Transition",
    maxPoints: 10,
    concepts: [
      { term: "system recovery", weight: 4, synonyms: [/recover/, /restore/, /return.*normal/, /resolv/, /fix/, /heal/] },
      { term: "Singapore returns to green", weight: 3, synonyms: [/green/, /normal/, /back/, /return/] },
      { term: "metrics restore to original", weight: 3, synonyms: [/restor/, /original/, /98/, /alert.*0/, /back.*normal/] },
    ],
  },
];

export function getCategories(difficulty: Difficulty): ScoringCategory[] {
  switch (difficulty) {
    case "simple": return SIMPLE_CATEGORIES;
    case "medium": return MEDIUM_CATEGORIES;
    case "complex": return COMPLEX_CATEGORIES;
  }
}

export function getReferencePrompt(difficulty: Difficulty): string {
  switch (difficulty) {
    case "simple":
      return "Create a dark-themed global operations visualization showing a world map with city locations displayed as glowing, pulsing nodes. Connect the cities with animated paths showing particle flows representing live transactions. Display a KPI bar at the top with business metrics like active locations, transaction count, and success rate. Use smooth animations and modern enterprise styling.";
    case "medium":
      return "Create a dark-themed Global Operations Control Tower showing a world map with 5 major business locations as glowing nodes connected by animated transaction flows. Display KPI metrics for transactions, success rate and alerts. Animate an operational incident where one city node turns red, transactions slow down, and an alert appears. Then show the system recovering — the node returns to green, metrics restore, and alerts clear. Use smooth transitions between normal operations, incident, and recovery states.";
    case "complex":
      return "Create a premium enterprise Global Operations Control Tower with a dark world map showing multiple global business locations connected by animated transaction flows. Display KPI metrics for active locations, transactions, success rate and alerts. Animate business transactions moving between cities. Introduce an operational incident at Singapore that changes its status from green to red, slows transaction flows and triggers an alert. Display an AI Operations Assistant that detects the anomaly and recommends an alternative route. Dynamically reroute traffic through Mumbai, Dubai and London. Then show the system recovering, Singapore returning to green, alerts returning to zero and the success rate recovering. Use smooth animations, glowing network nodes, status indicators, modern enterprise styling and clear transitions between normal operations, incident, AI response and recovery.";
  }
}

export function getSkeletonPrompt(difficulty: Difficulty): string {
  switch (difficulty) {
    case "simple":
      return "Create a ____-themed global operations visualization showing a ____ ____ with city locations displayed as ____, ____ nodes. Connect the cities with animated ____ showing ____ flows...";
    case "medium":
      return "Create a ____-themed Global Operations ____ ____ showing a world map with ____ major business locations as ____ nodes connected by animated ____ flows. Display KPI metrics for ____. Animate an operational ____ where one city node turns ____, transactions ____, and an ____ appears. Then show the system ____ — the node returns to ____, metrics ____...";
    case "complex":
      return "Create a premium enterprise Global Operations ____ ____ with a dark world map showing multiple global business locations connected by animated ____ flows. Display KPI metrics for ____. Animate business transactions moving between ____. Introduce an operational ____ at ____ that changes its status from ____ to ____. Display an AI ____ ____ that detects the anomaly and recommends ____. Dynamically ____ traffic through ____. Then show the system ____, ____ returning to green, alerts returning to ____ and the success rate ____...";
  }
}

export function scorePrompt(prompt: string, difficulty: Difficulty): ScoringResult {
  const categories = getCategories(difficulty);
  const normalized = prompt.toLowerCase().replace(/[^a-z0-9\s]/g, " ");

  const categoryResults: ScoringResult["categories"] = [];
  const captured: string[] = [];
  const missed: string[] = [];

  for (const cat of categories) {
    let earned = 0;
    for (const concept of cat.concepts) {
      const found = concept.synonyms.some((re) => re.test(normalized));
      if (found) {
        earned += concept.weight;
        captured.push(concept.term);
      } else {
        missed.push(concept.term);
      }
    }
    earned = Math.min(earned, cat.maxPoints);
    categoryResults.push({ name: cat.name, earned, max: cat.maxPoints });
  }

  let total = categoryResults.reduce((sum, c) => sum + c.earned, 0);

  const bonusSignals = [/animation/, /smooth/, /transition/, /visual/, /interact/, /canvas/, /render/, /phase/, /sequence/, /stage/];
  let bonusCount = 0;
  for (const re of bonusSignals) {
    if (re.test(normalized)) bonusCount++;
  }
  const bonus = Math.min(Math.floor(bonusCount * 1.5), 5);
  total = Math.min(total + bonus, 100);

  return { total, categories: categoryResults, captured, missed };
}

export interface Submission {
  name: string;
  prompt: string;
  score: number;
  difficulty: Difficulty;
  timestamp: number;
  categories: ScoringResult["categories"];
}

const STORAGE_KEY = "warmup_submissions";

export const submissionService = {
  save(sub: Submission) {
    const all = this.getAll();
    all.push(sub);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  },
  getAll(): Submission[] {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch { return []; }
  },
  getRecent(n: number): Submission[] {
    return this.getAll().slice(-n).reverse();
  },
  getStats() {
    const all = this.getAll();
    if (all.length === 0) return null;
    const scores = all.map((s) => s.score);
    return {
      count: all.length,
      average: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
      highest: Math.max(...scores),
      lowest: Math.min(...scores),
    };
  },
};
