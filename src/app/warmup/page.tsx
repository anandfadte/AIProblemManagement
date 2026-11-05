"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  LayoutDashboard,
  Play,
  RotateCcw,
  Send,
  Zap,
  Trophy,
  Target,
  Eye,
  EyeOff,
  ChevronLeft,
  Copy,
  Check,
} from "lucide-react";
import { createAnimation, type AnimationState, type AnimationController } from "@/lib/warmup-animation";
import {
  scorePrompt,
  getReferencePrompt,
  submissionService,
  type Difficulty,
  type ScoringResult,
} from "@/lib/warmup-scoring";

type Screen = "select" | "animation" | "prompt" | "results";

const DIFFICULTY_INFO: Record<Difficulty, { label: string; color: string; desc: string; duration: string; detail: string }> = {
  simple: {
    label: "Simple",
    color: "#22c55e",
    desc: "Describe a visual scene",
    duration: "15 seconds",
    detail: "3 cities connected by animated flows. No incidents. Focus on describing what you see — the map, the nodes, the movement.",
  },
  medium: {
    label: "Medium",
    color: "#f59e0b",
    desc: "Describe a scenario with a problem",
    duration: "20 seconds",
    detail: "5 cities with an operational incident and recovery. You need to describe what happens, not just what it looks like.",
  },
  complex: {
    label: "Complex",
    color: "#ef4444",
    desc: "Describe a full operational workflow",
    duration: "30 seconds",
    detail: "8 cities, a full incident lifecycle: detection, AI analysis, rerouting, and recovery. The ultimate prompt engineering challenge.",
  },
};

export default function WarmupPage() {
  const [screen, setScreen] = useState<Screen>("select");
  const [difficulty, setDifficulty] = useState<Difficulty>("simple");
  const [animState, setAnimState] = useState<AnimationState | null>(null);
  const [animDone, setAnimDone] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [result, setResult] = useState<ScoringResult | null>(null);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showRef, setShowRef] = useState(false);
  const [copied, setCopied] = useState<"mine" | "ref" | null>(null);
  const [participantName, setParticipantName] = useState("");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controllerRef = useRef<AnimationController | null>(null);

  useEffect(() => {
    const name = localStorage.getItem("participant_name") || "";
    setParticipantName(name);
  }, []);

  const startAnimation = useCallback(() => {
    setAnimDone(false);
    setAnimState(null);
    if (controllerRef.current) controllerRef.current.stop();

    setTimeout(() => {
      if (!canvasRef.current) return;
      const ctrl = createAnimation(
        canvasRef.current,
        difficulty,
        (state) => setAnimState(state),
        () => setAnimDone(true),
      );
      controllerRef.current = ctrl;
      ctrl.start();
    }, 100);
  }, [difficulty]);

  function handleSelectDifficulty(d: Difficulty) {
    setDifficulty(d);
    setScreen("animation");
    setPromptText("");
    setResult(null);
    setAnimatedScore(0);
    setTimeout(() => startAnimation(), 200);
  }

  function handleReplay() {
    setAnimDone(false);
    startAnimation();
  }

  function handleSubmit() {
    if (promptText.trim().split(/\s+/).length < 15) return;
    const res = scorePrompt(promptText, difficulty);
    setResult(res);

    submissionService.save({
      name: participantName,
      prompt: promptText,
      score: res.total,
      difficulty,
      timestamp: Date.now(),
      categories: res.categories,
    });

    setScreen("results");

    let current = 0;
    const target = res.total;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setAnimatedScore(current);
    }, 30);
  }

  function handleTryAgain() {
    setScreen("select");
    setPromptText("");
    setResult(null);
    setAnimatedScore(0);
  }

  function copyText(text: string, which: "mine" | "ref") {
    navigator.clipboard.writeText(text);
    setCopied(which);
    setTimeout(() => setCopied(null), 2000);
  }

  const wordCount = promptText.trim() ? promptText.trim().split(/\s+/).length : 0;

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      {/* Top bar with skip/dashboard link */}
      <div className="border-b border-border bg-surface-alt/50">
        <div className="mx-auto flex h-10 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Zap size={14} className="text-accent" />
            <span className="font-medium text-text-secondary">Warm-up Challenge</span>
            {screen !== "select" && (
              <>
                <span className="text-border">|</span>
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-bold text-white"
                  style={{ backgroundColor: DIFFICULTY_INFO[difficulty].color }}
                >
                  {DIFFICULTY_INFO[difficulty].label}
                </span>
              </>
            )}
          </div>
          <Link
            href="/activities"
            className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <LayoutDashboard size={14} />
            Go to Dashboard
          </Link>
        </div>
      </div>

      {/* Screen: Difficulty Selection */}
      {screen === "select" && (
        <div className="mx-auto max-w-3xl px-4 py-12">
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-text-primary">
              AI Prompt Recreation Challenge
            </h1>
            <p className="mx-auto max-w-xl text-text-secondary">
              Watch a business animation carefully, then write <strong>one prompt</strong> to
              recreate it. How much can you capture? Choose your difficulty level.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {(["simple", "medium", "complex"] as Difficulty[]).map((d) => {
              const info = DIFFICULTY_INFO[d];
              return (
                <button
                  key={d}
                  onClick={() => handleSelectDifficulty(d)}
                  className="group relative rounded-xl border-2 bg-surface p-6 text-left transition-all hover:shadow-lg"
                  style={{ borderColor: info.color + "44" }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold text-white"
                      style={{ backgroundColor: info.color }}
                    >
                      {info.label}
                    </span>
                    <span className="text-xs text-text-muted">{info.duration}</span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {info.desc}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{info.detail}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Start Challenge <ArrowRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Previous scores */}
          {(() => {
            const stats = submissionService.getStats();
            if (!stats) return null;
            return (
              <div className="mt-10 rounded-xl border border-border bg-surface-alt p-5 text-center">
                <p className="text-sm text-text-muted">
                  You have <strong className="text-text-primary">{stats.count}</strong> previous
                  {stats.count === 1 ? " attempt" : " attempts"} — Average:{" "}
                  <strong className="text-text-primary">{stats.average}</strong> | Best:{" "}
                  <strong className="text-accent">{stats.highest}</strong>
                </p>
              </div>
            );
          })()}
        </div>
      )}

      {/* Screen: Animation */}
      {screen === "animation" && (
        <div className="flex flex-col" style={{ height: "calc(100vh - 3.5rem - 2.5rem)" }}>
          {/* KPI Bar */}
          <div className="border-b border-border bg-surface-alt/80 px-4 py-2">
            <div className="mx-auto flex max-w-5xl items-center justify-between">
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-text-muted">Active Locations </span>
                  <span className="font-mono font-bold text-text-primary">
                    {animState?.kpis.locations ?? "—"}
                  </span>
                </div>
                <div>
                  <span className="text-text-muted">Transactions </span>
                  <span className="font-mono font-bold text-text-primary">
                    {animState?.kpis.transactions.toLocaleString() ?? "—"}
                  </span>
                </div>
                <div>
                  <span className="text-text-muted">Success Rate </span>
                  <span
                    className="font-mono font-bold"
                    style={{
                      color: animState && animState.kpis.successRate < 96 ? "#ef4444" : undefined,
                    }}
                  >
                    {animState?.kpis.successRate ?? "—"}%
                  </span>
                </div>
                <div>
                  <span className="text-text-muted">Alerts </span>
                  <span
                    className="font-mono font-bold"
                    style={{
                      color: animState && animState.kpis.alerts > 0 ? "#ef4444" : undefined,
                    }}
                  >
                    {animState?.kpis.alerts ?? 0}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {!animDone && animState && (
                  <span className="font-mono text-lg font-bold text-accent">
                    {Math.ceil(animState.timeLeft)}s
                  </span>
                )}
                {animDone && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleReplay}
                      className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      <RotateCcw size={14} />
                      Replay
                    </button>
                    <button
                      onClick={() => setScreen("prompt")}
                      className="flex items-center gap-1.5 rounded-lg bg-accent px-4 py-1.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
                    >
                      Write Your Prompt
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div className="relative flex-1 bg-[#0a0e17]">
            <canvas ref={canvasRef} className="h-full w-full" />
            {!animDone && !animState && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={startAnimation}
                  className="flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-light transition-colors"
                >
                  <Play size={20} />
                  Start Animation
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Screen: Prompt Input */}
      {screen === "prompt" && (
        <div className="mx-auto max-w-2xl px-4 py-12">
          <div className="mb-8 text-center">
            <Target size={32} className="mx-auto mb-4 text-accent" />
            <h2 className="mb-2 text-2xl font-bold text-text-primary">Your Challenge</h2>
            <p className="text-text-secondary">
              Write <strong>one prompt</strong> that would instruct an AI coding agent to
              recreate the animation you just watched. Describe the full experience — what it
              looks like, what happens, and how it behaves.
            </p>
          </div>

          <div className="mb-4">
            <textarea
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Create a premium enterprise Global Operations Control Tower with..."
              rows={10}
              autoFocus
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-y"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-text-muted">
              <span>{wordCount} word{wordCount !== 1 ? "s" : ""}</span>
              {wordCount > 0 && wordCount < 15 && (
                <span className="text-amber-500">Minimum 15 words required</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setScreen("animation");
                setTimeout(() => startAnimation(), 200);
              }}
              className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <RotateCcw size={14} />
              Rewatch
            </button>
            <button
              onClick={handleSubmit}
              disabled={wordCount < 15}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-light disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={14} />
              Submit Prompt
            </button>
          </div>
        </div>
      )}

      {/* Screen: Results */}
      {screen === "results" && result && (
        <div className="mx-auto max-w-3xl px-4 py-10">
          {/* Score */}
          <div className="mb-10 text-center">
            <Trophy size={40} className="mx-auto mb-4 text-amber-500" />
            <div className="mb-2 font-mono text-6xl font-bold text-text-primary">
              {animatedScore}
              <span className="text-2xl text-text-muted">/100</span>
            </div>
            <p className="text-text-secondary">
              {result.total >= 80 ? "Excellent prompt engineering!" :
               result.total >= 60 ? "Good coverage — some concepts missed." :
               result.total >= 40 ? "Decent start — review what you missed." :
               "Keep practicing — many concepts to capture."}
            </p>
          </div>

          {/* Category Bars */}
          <div className="mb-8 rounded-xl border border-border bg-surface p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Score Breakdown
            </h3>
            <div className="space-y-3">
              {result.categories.map((cat) => (
                <div key={cat.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-text-secondary">{cat.name}</span>
                    <span className="font-mono text-text-muted">
                      {cat.earned}/{cat.max}
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-surface-alt overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(cat.earned / cat.max) * 100}%`,
                        backgroundColor:
                          cat.earned / cat.max >= 0.7 ? "#22c55e" :
                          cat.earned / cat.max >= 0.4 ? "#f59e0b" : "#ef4444",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Captured vs Missed */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-500">
                <Eye size={14} /> Captured ({result.captured.length})
              </h3>
              <ul className="space-y-1.5">
                {result.captured.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check size={14} className="mt-0.5 shrink-0 text-green-500" />
                    {c}
                  </li>
                ))}
                {result.captured.length === 0 && (
                  <li className="text-sm text-text-muted italic">None captured</li>
                )}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-500">
                <EyeOff size={14} /> Missed ({result.missed.length})
              </h3>
              <ul className="space-y-1.5">
                {result.missed.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-0.5 shrink-0 text-red-500">✕</span>
                    {m}
                  </li>
                ))}
                {result.missed.length === 0 && (
                  <li className="text-sm text-text-muted italic">Nothing missed!</li>
                )}
              </ul>
            </div>
          </div>

          {/* Prompt Comparison */}
          <div className="mb-8 rounded-xl border border-border bg-surface p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                Prompt Comparison
              </h3>
              <button
                onClick={() => setShowRef(!showRef)}
                className="text-sm text-accent hover:underline"
              >
                {showRef ? "Hide" : "Show"} Reference Prompt
              </button>
            </div>
            <div className={`grid gap-4 ${showRef ? "sm:grid-cols-2" : ""}`}>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-text-muted">Your Prompt</span>
                  <button
                    onClick={() => copyText(promptText, "mine")}
                    className="flex items-center gap-1 text-xs text-text-muted hover:text-text-primary"
                  >
                    {copied === "mine" ? <Check size={12} /> : <Copy size={12} />}
                    {copied === "mine" ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="rounded-lg bg-surface-alt p-3 text-sm leading-relaxed text-text-secondary">
                  {promptText}
                </div>
              </div>
              {showRef && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-text-muted">Reference Prompt</span>
                    <button
                      onClick={() => copyText(getReferencePrompt(difficulty), "ref")}
                      className="flex items-center gap-1 text-xs text-text-muted hover:text-text-primary"
                    >
                      {copied === "ref" ? <Check size={12} /> : <Copy size={12} />}
                      {copied === "ref" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="rounded-lg bg-surface-alt p-3 text-sm leading-relaxed text-text-secondary">
                    {getReferencePrompt(difficulty)}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Learning Section */}
          <div className="mb-8 rounded-xl border border-border bg-callout-bg p-6">
            <h3 className="mb-3 text-base font-semibold text-text-primary">
              What This Exercise Teaches
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              You were not asked to write code. You were asked to <strong>translate an intended
              business experience into instructions an AI coding agent could understand</strong>.
              This is the core skill of prompt engineering.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {["Observe", "Deconstruct", "Describe", "Prompt", "Evaluate"].map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-lg bg-accent/10 px-3 py-1.5 font-medium text-accent">
                    {step}
                  </span>
                  {i < 4 && <ArrowRight size={14} className="text-text-muted" />}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleTryAgain}
              className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              <RotateCcw size={14} />
              Try Again
            </button>
            <Link
              href="/activities"
              className="flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
            >
              <LayoutDashboard size={14} />
              Go to Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
