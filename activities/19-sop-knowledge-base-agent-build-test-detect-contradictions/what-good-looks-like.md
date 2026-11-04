**Expected output structure**
A strong AI output for this activity will contain the following sections / elements:
- Gemini: 5-SOP structured index — section headers, thresholds, regulations, roles
- Claude: 10-query answer set with required citation shape; refusals where no SOP answers
- ChatGPT: parallel 10-query answers + MATCH/DIFFER comparison with Claude's
- Mistral: 3+ cross-SOP contradictions with specific section citations and recommended resolutions
**Scoring rubric (5 dimensions)**
**Common failure modes — watch for these**
- Claude answers the 3 no-source queries by analogy from adjacent SOPs — this is the mistake operations teams would act on. Hard-reject in debrief. The spec required 'do NOT invent policy'.
- ChatGPT defers to Claude on every answer (groupthink). Re-prompt with 'write your answer BEFORE reading Claude's output, then compare'.
- Mistral finds 2 of 3 known contradictions but misses the DPDP opt-out one (because it is a subtle textual difference between two SOPs, not an explicit conflict). This is the realistic outcome; the facilitator uses this to show why human review of the agent's contradiction list is non-negotiable.
**Debrief question for the room**
Where did the AI add the most value — and where would you NOT trust it without a human review step? Be specific about the failure mode you saw.
Scoring is a facilitation device — not an exam. The point is to make the quality dimensions visible and discussable, so participants internalize what a 'good' AI output looks like for their own work.