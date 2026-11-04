**The ask**
**Produce a defensible, differential hypothesis register for the overnight P1 (INC104821) within 25 minutes of the P1 debrief kickoff. Red Team must attack the consensus.**
**Context**
A P1 outage (INC104821) affecting CoreBanking-X1 was resolved overnight. The CTO expects a ranked hypothesis register — NOT a single confident answer — for the morning debrief.

Three AI analysts work the same evidence pack INDEPENDENTLY. Each produces a 5-hypothesis register (evidence-for, evidence-against, missing evidence, fastest test). Outputs land in a shared Google Drive folder.

A fourth AI (Mistral) then plays the Red Team role: adversarially challenge the consensus. The point is NOT to find THE answer. The point is to surface what all three analysts agreed on without evidence — because that is where premature closure happens.
**Why this matters — the wow moment**
Three AIs independently rank the same evidence. All three top-rank H1 (SSO TTL change). The Red Team attacks: 'all three anchored on the change log because it was the most prominent artifact. None of the three validated the frontend-asset deployment hypothesis properly.' The room sees CONSENSUS ≠ TRUTH.
**Inputs provided**
- major_incident_case_brief.docx
- change_management_log.xlsx
- server_error_log.txt
- slack_p1_chat_export.pdf
This brief is the single-page handout participants read before starting. Everything else — datasets, prompts, output guidance — lives in the other folders of this activity.