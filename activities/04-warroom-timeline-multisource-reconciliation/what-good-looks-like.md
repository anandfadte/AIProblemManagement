**Expected output structure**
A strong AI output for this activity will contain the following sections / elements:
- Reconciled chronological timeline table (UTC, source, reference, event, uncertainty flag)
- Uncertainty Log section (any timestamp conflict + how flagged)
- Mermaid.js cascade sequence diagram showing failure propagation
- Independent timestamp audit (ChatGPT step) confirming or disputing Gemini's reconciliations
- Final PIR-ready consolidated version
**Scoring rubric (5 dimensions)**
**Common failure modes — watch for these**
- Model silently resolves BST=UTC. Response: 'check the Slack timestamp 21:58 against the server log for the same event — if they are 1 hour apart you have found the timezone conversion issue'.
- Mermaid diagram syntactically broken. Response: paste the code into a Mermaid playground to verify, iterate.
- ChatGPT audit is cursory ('timeline looks fine'). Response: 'be adversarial — find at least one timestamp Gemini may have gotten wrong'.
**Debrief question for the room**
Where did the AI add the most value — and where would you NOT trust it without a human review step? Be specific about the failure mode you saw.
Scoring is a facilitation device — not an exam. The point is to make the quality dimensions visible and discussable, so participants internalize what a 'good' AI output looks like for their own work.