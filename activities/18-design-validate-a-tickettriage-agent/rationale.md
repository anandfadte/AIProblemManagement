## Why This Activity

**This is the future of Problem Management — agent design.** Instead of using AI tools one prompt at a time, you design a complete autonomous agent that triages tickets on its own. Then you validate it like software: bulk testing, edge-case stress testing, and adversarial safety review.

### What You Will Learn

- **Agent architecture** — Claude designs the full spec: role, tool-call policy, confidence thresholds, hard rules, forbidden behaviors, output format, and failure modes. This is not pseudocode — it is an operational policy document.
- **3-model validation pipeline** — ChatGPT validates against 50 real tickets (precision/recall). Gemini stress-tests 10 edge cases. Mistral Red Teams for safety exploits (priority gaming, PII leakage, security bypass).
- **Design thinking for AI** — you do not deploy. You design, test, find gaps, iterate. The spec is the deliverable, not a working agent.

### Why It Matters for Problem Management

Every ITSM organization is building or buying ticket-triage agents. The question is not *whether* AI will triage tickets, but *who sets the policy*. This activity trains Problem Managers to be the policy designers — the people who decide what the agent can and cannot do, before it goes live.

### Facilitator Notes

- **The key insight is that "the agent decides" is a design failure.** Every decision point in the spec must have a policy. If participants write "the agent uses judgment," push back: judgment is what humans do after the agent escalates.
- The edge-case stress test (Gemini, Step 4) is where most agent specs fail. Expect 3-4 out of 10 edge cases to expose spec gaps. This is the teaching moment — not the failure, but the iteration.
- Mistral's safety Red Team (Step 5) will find at least one exploitation path. The most common: a user mentions a VIP's name to game priority elevation. Ask: does your spec defend against this?
- **The deliverable is the SPEC, not a working agent.** If participants try to build the agent, redirect them: design first, build later.
- This is the most "software engineering" activity in the studio. Participants from non-technical backgrounds may need extra support on the validation framework. Pair them with technically confident members.
