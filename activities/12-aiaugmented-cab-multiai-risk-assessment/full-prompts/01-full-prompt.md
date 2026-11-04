---
tool: Full Prompt
role: 
sequence_order: 1
---

You are a Change Advisory Board reviewer evaluating change request CHG20641 (SSO Token TTL reduction on CoreBanking-X1).
 
Inputs:
- change_request_CHG20641.pdf — the formal request. Submitter self-assessed 'single config parameter, Low impact.'
- dependency_map_CHG20641.png — the architecture dependency map. Read this carefully; the submitter did NOT reference it in their assessment.
- client_calendar_tier1.xlsx — Tier-1 client critical windows.
- prior_similar_changes.xlsx — 10 prior changes in the same area (auth/session configuration).
 
Objective: score the change on 5 risk dimensions (each 1-5, 5 is HIGHEST RISK):
1. D1 Blast Radius — how many systems, users, layers affected? Read the dependency map, not the submitter's assessment.
2. D2 Dependency Risk — external vendor touchpoints, cross-team coordination required?
3. D3 Historical Pattern Risk — have prior similar changes in this area triggered incidents? Check prior_similar_changes carefully.
4. D4 Client Calendar Collision — does the proposed window overlap any Tier-1 client critical period?
5. D5 Rollback Confidence — is rollback simple + tested + fast? Or complex / untested / with side effects?
 
Discipline:
- Do NOT trust submitter's self-assessment. The dependency map shows actual blast radius.
- For each dimension score, cite the specific evidence from the inputs ('§X of change request', 'row Y of prior_similar_changes', 'the dependency map shows Z').
- For each dimension score ≥3, propose a specific mitigation.
- Scoring:
  - 1-10 total: LOW risk — standard CAB review
  - 11-15 total: MEDIUM — enhanced monitoring + reconsider timing
  - 16-20 total: HIGH — defer, redesign, or add safeguards
  - 21-25 total: CRITICAL — reject or redesign
 
Output:
```
D1 Blast Radius: X/5 — [specific evidence] — Mitigation (if ≥3): [...]
D2 Dependency Risk: X/5 — ...
D3 Historical Pattern Risk: X/5 — ...
D4 Client Calendar Collision: X/5 — ...
D5 Rollback Confidence: X/5 — ...
 
Composite: X/25 — [LOW/MEDIUM/HIGH/CRITICAL]
 
Underweighted Risks (not flagged by submitter): [list]
 
Recommendation: APPROVE / APPROVE WITH CONDITIONS / DEFER / REJECT
Reasoning: [one paragraph]
```