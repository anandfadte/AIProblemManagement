import type { Difficulty } from "./warmup-scoring";

interface City {
  name: string;
  x: number; // 0–1 fraction
  y: number;
}

interface Particle {
  from: number;
  to: number;
  progress: number;
  speed: number;
  label?: string;
}

const ALL_CITIES: City[] = [
  { name: "New York", x: 0.22, y: 0.35 },
  { name: "London", x: 0.45, y: 0.28 },
  { name: "Frankfurt", x: 0.49, y: 0.3 },
  { name: "Dubai", x: 0.58, y: 0.42 },
  { name: "Mumbai", x: 0.63, y: 0.45 },
  { name: "Singapore", x: 0.72, y: 0.55 },
  { name: "Tokyo", x: 0.82, y: 0.35 },
  { name: "Sydney", x: 0.84, y: 0.7 },
];

const TRANSACTION_LABELS = [
  "Order #4521", "Payment Processing", "Shipment Dispatch",
  "Invoice #8834", "FX Transfer", "Compliance Check",
  "Settlement #2219", "Audit Trail",
];

function getCities(difficulty: Difficulty): City[] {
  switch (difficulty) {
    case "simple": return [ALL_CITIES[0], ALL_CITIES[1], ALL_CITIES[6]]; // NY, London, Tokyo
    case "medium": return [ALL_CITIES[0], ALL_CITIES[1], ALL_CITIES[3], ALL_CITIES[5], ALL_CITIES[6]]; // NY, London, Dubai, Singapore, Tokyo
    case "complex": return [...ALL_CITIES];
  }
}

function getRoutes(difficulty: Difficulty): [number, number][] {
  switch (difficulty) {
    case "simple": return [[0, 1], [1, 2], [0, 2]];
    case "medium": return [[0, 1], [1, 2], [2, 3], [3, 4], [0, 4], [1, 3]];
    case "complex": return [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [0, 6], [1, 4], [3, 7]];
  }
}

function getDuration(difficulty: Difficulty): number {
  switch (difficulty) {
    case "simple": return 15;
    case "medium": return 20;
    case "complex": return 30;
  }
}

function getIncidentCity(difficulty: Difficulty): number {
  switch (difficulty) {
    case "simple": return -1; // no incident
    case "medium": return 3; // Singapore (index in medium cities)
    case "complex": return 5; // Singapore (index in all cities)
  }
}

export interface AnimationState {
  phase: string;
  timeLeft: number;
  kpis: { locations: number; transactions: number; successRate: number; alerts: number };
}

export interface AnimationController {
  start: () => void;
  stop: () => void;
  getState: () => AnimationState;
}

export function createAnimation(
  canvas: HTMLCanvasElement,
  difficulty: Difficulty,
  onTick: (state: AnimationState) => void,
  onComplete: () => void,
): AnimationController {
  const ctx = canvas.getContext("2d")!;
  const cities = getCities(difficulty);
  const routes = getRoutes(difficulty);
  const duration = getDuration(difficulty);
  const incidentIdx = getIncidentCity(difficulty);

  let animFrame = 0;
  let startTime = 0;
  let running = false;
  let particles: Particle[] = [];
  let showAIPanel = false;
  let aiLines: string[] = [];
  let aiRecommendation = "";
  let rerouteActive = false;
  let recoveryBanner = "";
  let alertBanner = "";

  const kpis = { locations: cities.length + 4, transactions: 8421, successRate: 98.7, alerts: 0 };

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawnParticle() {
    const routeIdx = Math.floor(Math.random() * routes.length);
    const [from, to] = routes[routeIdx];
    const label = Math.random() < 0.15 ? TRANSACTION_LABELS[Math.floor(Math.random() * TRANSACTION_LABELS.length)] : undefined;
    particles.push({ from, to, progress: 0, speed: 0.003 + Math.random() * 0.004, label });
  }

  function getPhase(elapsed: number): string {
    if (difficulty === "simple") return "normal";
    if (difficulty === "medium") {
      if (elapsed < 8) return "normal";
      if (elapsed < 12) return "incident";
      if (elapsed < 16) return "recovery";
      return "normal";
    }
    // complex
    if (elapsed < 10) return "normal";
    if (elapsed < 15) return "incident";
    if (elapsed < 18) return "ai-analysis";
    if (elapsed < 20) return "ai-recommendation";
    if (elapsed < 25) return "rerouting";
    return "recovery";
  }

  function draw(elapsed: number) {
    const w = canvas.getBoundingClientRect().width;
    const h = canvas.getBoundingClientRect().height;
    const phase = getPhase(elapsed);

    ctx.clearRect(0, 0, w, h);

    // Draw map outline (simplified)
    drawMapOutline(ctx, w, h);

    // Draw routes
    for (const [fi, ti] of routes) {
      const from = cities[fi];
      const to = cities[ti];
      const isIncidentRoute = incidentIdx >= 0 && (fi === incidentIdx || ti === incidentIdx);
      const fading = rerouteActive && isIncidentRoute;

      ctx.beginPath();
      ctx.moveTo(from.x * w, from.y * h);
      const cpx = (from.x + to.x) / 2 * w;
      const cpy = (from.y + to.y) / 2 * h - 20;
      ctx.quadraticCurveTo(cpx, cpy, to.x * w, to.y * h);
      ctx.strokeStyle = fading ? "rgba(100,100,120,0.15)" : "rgba(100,140,220,0.25)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Draw reroute path (complex only)
    if (rerouteActive && difficulty === "complex") {
      const rerouteCities = [4, 3, 1]; // Mumbai → Dubai → London
      for (let i = 0; i < rerouteCities.length - 1; i++) {
        const from = cities[rerouteCities[i]];
        const to = cities[rerouteCities[i + 1]];
        ctx.beginPath();
        ctx.moveTo(from.x * w, from.y * h);
        const cpx = (from.x + to.x) / 2 * w;
        const cpy = (from.y + to.y) / 2 * h - 20;
        ctx.quadraticCurveTo(cpx, cpy, to.x * w, to.y * h);
        ctx.strokeStyle = "rgba(59,130,246,0.8)";
        ctx.lineWidth = 2.5;
        ctx.setLineDash([6, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Draw particles
    for (const p of particles) {
      const from = cities[p.from];
      const to = cities[p.to];
      const t = p.progress;
      const cpx = (from.x + to.x) / 2;
      const cpy = (from.y + to.y) / 2 - 20 / h;
      const px = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * cpx + t * t * to.x;
      const py = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * cpy + t * t * to.y;

      ctx.beginPath();
      ctx.arc(px * w, py * h, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = rerouteActive && (p.from === incidentIdx || p.to === incidentIdx)
        ? "rgba(200,200,200,0.3)"
        : "rgba(59,130,246,0.9)";
      ctx.fill();

      if (p.label) {
        ctx.font = "9px Inter, sans-serif";
        ctx.fillStyle = "rgba(180,200,230,0.6)";
        ctx.fillText(p.label, px * w + 6, py * h - 4);
      }
    }

    // Draw city nodes
    for (let i = 0; i < cities.length; i++) {
      const c = cities[i];
      const isIncident = i === incidentIdx && (phase === "incident" || phase === "ai-analysis" || phase === "ai-recommendation" || phase === "rerouting");
      const isRecovering = i === incidentIdx && phase === "recovery";

      // Glow
      const glowColor = isIncident ? "rgba(239,68,68,0.4)" : isRecovering ? "rgba(34,197,94,0.3)" : "rgba(59,130,246,0.3)";
      ctx.beginPath();
      const pulse = Math.sin(elapsed * 3 + i) * 2;
      ctx.arc(c.x * w, c.y * h, 12 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = glowColor;
      ctx.fill();

      // Node
      ctx.beginPath();
      ctx.arc(c.x * w, c.y * h, 5, 0, Math.PI * 2);
      ctx.fillStyle = isIncident ? "#ef4444" : isRecovering ? "#22c55e" : "#3b82f6";
      ctx.fill();

      // Label
      ctx.font = "10px Inter, sans-serif";
      ctx.fillStyle = "rgba(200,215,240,0.9)";
      ctx.textAlign = "center";
      ctx.fillText(c.name, c.x * w, c.y * h + 22);
      ctx.textAlign = "start";
    }

    // AI Panel (complex only)
    if (showAIPanel && difficulty === "complex") {
      const panelW = Math.min(260, w * 0.3);
      const panelX = w - panelW - 16;
      const panelY = 80;
      const panelH = aiRecommendation ? 200 : 140;

      ctx.fillStyle = "rgba(15,20,35,0.92)";
      ctx.strokeStyle = "rgba(59,130,246,0.5)";
      ctx.lineWidth = 1;
      roundRect(ctx, panelX, panelY, panelW, panelH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.font = "bold 11px Inter, sans-serif";
      ctx.fillStyle = "#3b82f6";
      ctx.fillText("AI Operations Assistant", panelX + 12, panelY + 22);

      ctx.font = "10px Inter, sans-serif";
      ctx.fillStyle = "#c9cdd4";
      for (let i = 0; i < aiLines.length; i++) {
        ctx.fillStyle = "#22c55e";
        ctx.fillText("✓", panelX + 12, panelY + 44 + i * 18);
        ctx.fillStyle = "#c9cdd4";
        ctx.fillText(aiLines[i], panelX + 26, panelY + 44 + i * 18);
      }

      if (aiRecommendation) {
        const recY = panelY + 44 + aiLines.length * 18 + 8;
        ctx.fillStyle = "rgba(59,130,246,0.15)";
        roundRect(ctx, panelX + 8, recY, panelW - 16, 36, 4);
        ctx.fill();
        ctx.font = "bold 9px Inter, sans-serif";
        ctx.fillStyle = "#3b82f6";
        ctx.fillText("RECOMMENDED ROUTE:", panelX + 14, recY + 14);
        ctx.font = "10px Inter, sans-serif";
        ctx.fillStyle = "#f1f3f5";
        ctx.fillText("Mumbai → Dubai → London", panelX + 14, recY + 28);
      }
    }

    // Alert banner
    if (alertBanner) {
      const bannerH = 32;
      const bannerY = h - bannerH - 12;
      ctx.fillStyle = alertBanner.includes("NORMAL") ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)";
      roundRect(ctx, 16, bannerY, w - 32, bannerH, 6);
      ctx.fill();
      ctx.font = "11px Inter, sans-serif";
      ctx.fillStyle = alertBanner.includes("NORMAL") ? "#22c55e" : "#ef4444";
      ctx.textAlign = "center";
      ctx.fillText(alertBanner, w / 2, bannerY + 20);
      ctx.textAlign = "start";
    }
  }

  function drawMapOutline(ctx: CanvasRenderingContext2D, w: number, h: number) {
    ctx.strokeStyle = "rgba(60,80,120,0.15)";
    ctx.lineWidth = 0.8;

    // Simplified continent outlines
    // North America
    ctx.beginPath();
    ctx.moveTo(0.08 * w, 0.25 * h); ctx.lineTo(0.12 * w, 0.2 * h); ctx.lineTo(0.2 * w, 0.18 * h);
    ctx.lineTo(0.28 * w, 0.22 * h); ctx.lineTo(0.3 * w, 0.3 * h); ctx.lineTo(0.28 * w, 0.4 * h);
    ctx.lineTo(0.22 * w, 0.48 * h); ctx.lineTo(0.15 * w, 0.45 * h); ctx.lineTo(0.08 * w, 0.35 * h);
    ctx.closePath(); ctx.stroke();

    // South America
    ctx.beginPath();
    ctx.moveTo(0.22 * w, 0.52 * h); ctx.lineTo(0.28 * w, 0.55 * h); ctx.lineTo(0.3 * w, 0.65 * h);
    ctx.lineTo(0.27 * w, 0.78 * h); ctx.lineTo(0.22 * w, 0.82 * h); ctx.lineTo(0.2 * w, 0.7 * h);
    ctx.closePath(); ctx.stroke();

    // Europe/Africa
    ctx.beginPath();
    ctx.moveTo(0.42 * w, 0.2 * h); ctx.lineTo(0.5 * w, 0.18 * h); ctx.lineTo(0.55 * w, 0.22 * h);
    ctx.lineTo(0.52 * w, 0.35 * h); ctx.lineTo(0.48 * w, 0.45 * h); ctx.lineTo(0.42 * w, 0.55 * h);
    ctx.lineTo(0.45 * w, 0.7 * h); ctx.lineTo(0.42 * w, 0.78 * h); ctx.lineTo(0.38 * w, 0.65 * h);
    ctx.lineTo(0.4 * w, 0.45 * h); ctx.lineTo(0.38 * w, 0.3 * h);
    ctx.closePath(); ctx.stroke();

    // Asia
    ctx.beginPath();
    ctx.moveTo(0.55 * w, 0.2 * h); ctx.lineTo(0.7 * w, 0.15 * h); ctx.lineTo(0.85 * w, 0.2 * h);
    ctx.lineTo(0.88 * w, 0.3 * h); ctx.lineTo(0.82 * w, 0.4 * h); ctx.lineTo(0.75 * w, 0.48 * h);
    ctx.lineTo(0.65 * w, 0.52 * h); ctx.lineTo(0.58 * w, 0.45 * h); ctx.lineTo(0.55 * w, 0.35 * h);
    ctx.closePath(); ctx.stroke();

    // Australia
    ctx.beginPath();
    ctx.moveTo(0.78 * w, 0.62 * h); ctx.lineTo(0.88 * w, 0.6 * h); ctx.lineTo(0.92 * w, 0.68 * h);
    ctx.lineTo(0.88 * w, 0.78 * h); ctx.lineTo(0.8 * w, 0.76 * h); ctx.lineTo(0.78 * w, 0.68 * h);
    ctx.closePath(); ctx.stroke();
  }

  function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  }

  function tick(ts: number) {
    if (!running) return;
    if (!startTime) startTime = ts;
    const elapsed = (ts - startTime) / 1000;
    const timeLeft = Math.max(0, duration - elapsed);
    const phase = getPhase(elapsed);

    // Spawn particles
    if (Math.random() < 0.08) spawnParticle();

    // Update particles
    const speedMult = (phase === "incident" || phase === "ai-analysis") ? 0.4 : 1;
    particles = particles
      .map((p) => ({ ...p, progress: p.progress + p.speed * speedMult }))
      .filter((p) => p.progress < 1);

    // Phase logic
    if (difficulty !== "simple") {
      if (phase === "incident") {
        kpis.successRate = 94.2;
        kpis.alerts = 1;
        alertBanner = "OPERATIONAL ALERT — " + (difficulty === "complex" ? "Singapore" : cities[incidentIdx].name) + " processing delay detected";
      }
      if (phase === "recovery" || (phase === "normal" && elapsed > duration * 0.5)) {
        kpis.successRate = 98.7;
        kpis.alerts = 0;
        alertBanner = elapsed > duration * 0.8 ? "OPERATIONS NORMAL — Incident mitigated successfully" : alertBanner;
        rerouteActive = false;
      }
    }

    if (difficulty === "complex") {
      if (phase === "ai-analysis") {
        showAIPanel = true;
        const aiElapsed = elapsed - 15;
        aiLines = [];
        if (aiElapsed > 0.3) aiLines.push("Analyzing network topology...");
        if (aiElapsed > 1) aiLines.push("Identifying affected routes...");
        if (aiElapsed > 1.7) aiLines.push("Calculating alternative paths...");
        if (aiElapsed > 2.4) aiLines.push("Evaluating capacity...");
        aiRecommendation = "";
      }
      if (phase === "ai-recommendation") {
        aiRecommendation = "Mumbai → Dubai → London";
      }
      if (phase === "rerouting") {
        rerouteActive = true;
      }
      if (phase === "recovery") {
        showAIPanel = false;
        aiRecommendation = "";
        if (elapsed > 27) alertBanner = "OPERATIONS NORMAL — Incident mitigated successfully";
      }
    }

    onTick({ phase, timeLeft, kpis: { ...kpis } });

    resize();
    draw(elapsed);

    if (elapsed >= duration) {
      running = false;
      onComplete();
      return;
    }

    animFrame = requestAnimationFrame(tick);
  }

  return {
    start() {
      running = true;
      startTime = 0;
      particles = [];
      showAIPanel = false;
      aiLines = [];
      aiRecommendation = "";
      rerouteActive = false;
      alertBanner = "";
      recoveryBanner = "";
      kpis.successRate = 98.7;
      kpis.alerts = 0;
      resize();
      animFrame = requestAnimationFrame(tick);
    },
    stop() {
      running = false;
      cancelAnimationFrame(animFrame);
    },
    getState() {
      return { phase: "idle", timeLeft: duration, kpis: { ...kpis } };
    },
  };
}
