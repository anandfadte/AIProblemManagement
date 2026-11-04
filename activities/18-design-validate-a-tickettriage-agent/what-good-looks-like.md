**Expected output structure**
A strong AI output for this activity will contain the following sections / elements:
- Claude: 7-section agent spec with explicit tool-call order, confidence policy, hard rules, forbidden behaviors, JSON output shape, named failure modes
- ChatGPT: 50-ticket walk-through with precision/recall against known-correct labels
- Gemini: 10-edge-case scorecard with spec-revision recommendations where needed
- Mistral: exploitation paths with specific spec-change rewrites
**Scoring rubric (5 dimensions)**
**Common failure modes — watch for these**
- Claude produces a spec that says 'the agent uses judgment' — this is a design failure, not a feature. Re-prompt for prescriptive policy.
- Validators all agree the spec is fine; Red Team also agrees. This is the fake-consensus trap. Re-prompt Mistral with sharper exploit framing ('assume the user WILL try to game this — what's the easiest path?').
- Spec passes all 50 tickets and all 10 edge cases but fails Mistral's Red Team. Correct call: iterate the spec; do not deploy. The room will want to deploy because 'it mostly works' — resist.
**Debrief question for the room**
Where did the AI add the most value — and where would you NOT trust it without a human review step? Be specific about the failure mode you saw.
Scoring is a facilitation device — not an exam. The point is to make the quality dimensions visible and discussable, so participants internalize what a 'good' AI output looks like for their own work.