---
tool: Full Prompt
role: 
sequence_order: 1
---

Act as a Principal Problem Manager preparing the PIR package for incident INC104821.
 
You have four evidence sources with inconsistent timestamp formats:
- server_error_log.txt — UTC timestamps
- slack_p1_chat_export.pdf — London local time (BST, UTC+1 — note: NOT UTC)
- change_management_log.xlsx — ISO-8601 UTC
- incident_voice_briefing_transcript.docx — 90-second verbal briefing from the on-call engineer, delivered in IST (UTC+5:30)
 
Objective: produce a single chronological reconciled timeline in UTC covering 2 hours before incident onset through 1 hour after resolution.
 
Discipline:
- Timezone conversion for Slack chat: subtract 1 hour from BST timestamps to get UTC. State the conversion rule.
- For the voice briefing timestamps mentioned: subtract 5:30 from IST to get UTC. State the conversion rule.
- If two sources disagree on a timestamp (same event, different claimed times), FLAG the conflict — do NOT silently pick one. Include an uncertainty note.
- For each event, cite the specific source file + line number or record ID.
- Note explicitly any event mentioned only in the voice briefing (not corroborated by structured logs).
 
Output format:
```
| UTC Timestamp | Source | Source Reference | Event Description | Uncertainty Flag |
```
 
Followed by a short section "Uncertainty Log" listing every timestamp conflict and how it was flagged.
 
Guardrails:
- Flag > silently resolve.
- Every event cited to a specific source + reference.
- Voice-briefing-only events marked as "VOICE-ONLY (not in structured logs)".