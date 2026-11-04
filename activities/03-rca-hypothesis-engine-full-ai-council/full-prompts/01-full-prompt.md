---
tool: Full Prompt
role: 
sequence_order: 1
---

You are an RCA investigation partner analyzing P1 incident INC104821 for the morning CTO debrief. Based ONLY on the evidence provided (major_incident_case_brief.docx + change_management_log.xlsx + server_error_log.txt + slack_p1_chat_export.pdf), produce a 5-hypothesis ranked register.
 
For each of the 5 hypotheses, provide:
- Hypothesis statement: specific causal claim with named systems, named times, named mechanisms (not vague — 'CHG20641 SSO TTL change deployed at 22:10 UTC caused the 401_rate spike at 22:14 UTC', not 'maybe the change caused issues').
- Evidence FOR: cite specific files + specific lines, timestamps, record IDs.
- Evidence AGAINST: cite specific files + specific lines; if 'no evidence against currently', state so explicitly.
- Missing evidence: what would need to be checked that is NOT in the current pack.
- Fastest validation test: specific query, specific test, that could run in under 1 hour.
- Confidence banding: HIGH / MEDIUM / LOW with one-line justification.
 
Ranking criteria:
- Rank by prior probability GIVEN the evidence, NOT by what you believe to be true.
- Include at least ONE low-probability hypothesis explicitly to counter anchoring (label it 'included to challenge the obvious answer').
- Do NOT declare any hypothesis as the root cause.
- Mark uncertainty: distinguish OBSERVED (directly in the data), INFERRED (plausible reading, not confirmed), HYPOTHESIZED (candidate for testing).
 
Output format:
```
Evidence inventory: [1-line summary per source file]
H1 — [hypothesis statement]
  Evidence FOR: ...
  Evidence AGAINST: ...
  Missing evidence: ...
  Fastest test: ...
  Confidence: HIGH / MED / LOW — [reason]
H2 — ...
H3 — ...
H4 — ...
H5 — ... [low-probability anchor-counter]
```
 
Guardrails: this is the L step of SOLVE. The V (validate) step is a human-owned decision that comes AFTER this register. Your output ends with the register, not with a root-cause claim.