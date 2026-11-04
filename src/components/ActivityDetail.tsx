"use client";

import { StepCard } from "./StepCard";

interface Step {
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

interface StepsData {
  overview?: string;
  steps: Step[];
}

export function ActivityDetail({
  slug,
  stepsData,
}: {
  slug: string;
  stepsData: StepsData;
}) {
  return (
    <section className="space-y-4">
      {stepsData.overview && (
        <p className="max-w-[720px] text-sm italic leading-relaxed text-text-muted mb-6">
          {stepsData.overview}
        </p>
      )}

      {stepsData.steps.map((s) => (
        <StepCard
          key={s.step}
          slug={slug}
          step={s.step}
          title={s.title}
          tool={s.tool}
          tool_config={s.tool_config}
          role={s.role}
          inputs={s.inputs}
          instruction={s.instruction}
          partial_prompt={s.partial_prompt}
          full_prompt={s.full_prompt}
        />
      ))}
    </section>
  );
}
