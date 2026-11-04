Act as a [role — fill in: what senior ITSM role?] preparing the PIR package for incident INC104821.
 
You have [number — fill in] evidence sources with [variations — fill in: what inconsistency exists across them?]:
- server_error_log.txt in [timezone — fill in]
- slack_p1_chat_export.pdf in [timezone — fill in: careful, this is NOT UTC]
- change_management_log.xlsx in [timezone — fill in]
- incident_voice_briefing_transcript.docx — [modality — fill in]
 
Objective: produce a single chronological timeline in [canonical timezone — fill in: which one and why?], covering [window — fill in: how many hours around the incident?].
 
Discipline:
- [Rule 1 — fill in: timezone conversion for Slack chat BST → UTC. State the conversion rule you applied.]
- [Rule 2 — fill in: if two sources disagree on a timestamp, FLAG it. Do NOT silently resolve.]
- [Rule 3 — fill in: for each event, cite the specific source file + line/record.]
- [Rule 4 — fill in: the voice briefing may add context not in the structured logs. Note it explicitly.]
 
Output format:
- A chronological table with columns: [column list — fill in]
- An explicit uncertainty log listing any timestamp conflict and how you flagged (not resolved) it.