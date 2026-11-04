## Why This Activity

**This introduces the Multi-AI Council pattern** — the single most powerful technique in this studio. Instead of asking one AI for an answer, you give three AIs the *same* prompt and the *same* data, then compare where they agree and where they diverge. Divergence is signal, not noise.

### What You Will Learn

- **Same-prompt, multi-model analysis** — Claude, ChatGPT, and Gemini each produce an independent RCA hypothesis from the same incident data. You do not tell them what the others said.
- **Consensus Scorecard** — a structured way to capture agreement (all three say the same root cause) and divergence (Claude says config drift, ChatGPT says capacity, Gemini says both).
- **Red Team with Mistral** — after the council reaches consensus, Mistral's job is to *break it*. Can the consensus survive disconfirmation?

### Why It Matters for Problem Management

RCA is where Problem Management lives or dies. A single AI can hallucinate a plausible-sounding root cause. Three AIs independently reaching the same conclusion is evidence. Three AIs disagreeing tells you where to investigate further — and that is often more valuable than the answer itself.

### Facilitator Notes

- **The key teaching moment** is when the three models disagree. Do not rush past it. Ask: "Which model's hypothesis would you investigate first, and why?"
- Participants will want to "pick the best model." Redirect: the value is in the *comparison*, not the individual output.
- Mistral's Red Team role is deliberately adversarial — if participants say "Mistral agreed with everyone," they likely gave it the consensus instead of asking it to challenge.
- **Time check:** The consensus scorecard is the deliverable. If groups skip it, the exercise loses its teaching value.
