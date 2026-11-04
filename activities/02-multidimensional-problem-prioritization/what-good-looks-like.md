**Expected output structure**
A strong AI output for this activity will contain the following sections / elements:
- Weighted scoring logic with 7 weights summing to 1.0, each tied to a line in the business context document
- Base ranking table (top 10 problems with composite scores)
- Sensitivity-adjusted ranking table (top 10 under customer-impact 2x)
- Diff summary: which problems jumped IN or OUT of top 5 between the two rankings
- One-sentence executive trade-off question
**Scoring rubric (5 dimensions)**
**Common failure modes — watch for these**
- Claude's weightings are not justified from the business context. Response: ask Claude to re-run with explicit quotes.
- The sensitivity analysis shows trivial change. Response: increase the sensitivity multiplier to 3x to reveal real differences.
- ChatGPT's challenge is weak ('seems fine'). Response: re-prompt with 'be adversarial — attack a specific weighting Claude made'.
**Debrief question for the room**
Where did the AI add the most value — and where would you NOT trust it without a human review step? Be specific about the failure mode you saw.
Scoring is a facilitation device — not an exam. The point is to make the quality dimensions visible and discussable, so participants internalize what a 'good' AI output looks like for their own work.