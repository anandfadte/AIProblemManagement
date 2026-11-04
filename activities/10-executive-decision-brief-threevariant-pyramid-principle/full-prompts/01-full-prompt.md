---
tool: Full Prompt
role: 
sequence_order: 1
---

Act as an executive communications specialist drafting the TACTICAL variant of an executive brief for the CEO + exec committee.
 
Context: CEO's Weekly Operating Review (WOR) is Monday 09:00. Max 10 agenda items. Each slot: 2 minutes to brief, 10 minutes discussion. CEO reads decks longer than 5 slides on paper.
 
Input:
- Findings summary from Activities 1-9 (attached — covers SSO-timeout cluster + CAPA + SOP contradictions + shadow IT finding)
- ceo_review_calendar.docx (CEO's current priorities: customer attrition #1, operating cost #2, regulatory compliance #3)
 
Variant: TACTICAL. Focus on operational specifics: exactly what happened, exactly what we did, exactly what the next action is, exactly when.
 
Required structure (Pyramid Principle):
- Slide 1 — THE ANSWER: single-sentence summary with the single most important number. 'Ticket volume for CoreBanking-X1 increased 23% in June 2026, driven by a 477-record SSO-timeout cluster; root cause (CHG20641) has been rolled back; CAPA plan ready for CAB approval.' Do NOT lead with background.
- Slide 2 — WHY IT MATTERS: business impact in INR with specific numbers (affected sessions, SLA exposure, customer impact).
- Slide 3 — WHAT THE EVIDENCE SHOWS: top 2-3 findings each with specific citations.
- Slide 4 — OPTIONS: 2 options with trade-offs clearly stated (e.g., approve CAPA as-is vs. defer pending further validation).
- Slide 5 — PROPOSED NEXT STEP: single specific ask with owner, timeline, and the one decision the CEO is being asked to make.
 
Discipline:
- Lead with the answer. Pyramid Principle, not chronological.
- Every claim traces to a specific finding from the attached summary.
- No padding. If a slide does not advance the ask, cut it.
- Two-minute test: CEO must understand the ask after 2 minutes of reading.
 
Output: 5-slide deck as structured markdown with clear slide markers (---).