---
tool: Full Prompt
role: 
sequence_order: 1
---

Act as a Quality Management auditor specializing in ISO 9001:2015 CAPA structure.
 
Input: a draft CAPA plan produced by Claude using the capa-builder-skill, addressing the validated root cause CHG20641 (SSO TTL reduction). Reference: iso_9001_capa_template.docx.
 
Objective: audit the draft CAPA for completeness and ISO 9001:2015 compliance before CAB submission.
 
Audit checklist:
1. Classification coverage: does the plan have at least ONE action in each of the 5 classifications (Corrective, Preventive, Detective/Monitoring, Process, Governance)? Name any missing.
2. Ownership: every action has a ROLE owner (not individual name, not 'the team'). Flag any violations.
3. Success metric quality: every success metric is QUANTITATIVE with a specific number. Flag any qualitative metrics ('improved monitoring').
4. Verification quality: every verification method is a specific TEST that could actually be run (not just 'review by the team'). Flag any vague verifications.
5. Symptom vs. root-cause: any action labeled 'corrective' that actually only treats symptom (not root cause)? Flag.
6. ISO 9001 clause alignment: does the plan satisfy the required elements of Clause 10.2 (nonconformity and corrective action)?
 
Discipline:
- Be adversarial. Find real gaps, not stylistic preferences.
- If the plan passes a check, state so and move on. Do not invent gaps.
- Suggestions must be specific and actionable.
 
Output:
```
AUDIT CHECKLIST RESULT:
1. Classification coverage: [PASS/FAIL — missing: ...]
2. Ownership: [PASS/FAIL — violations: ...]
3. Success metrics: [PASS/FAIL — qualitative metrics: ...]
4. Verification quality: [PASS/FAIL — vague verifications: ...]
5. Symptom vs root-cause: [PASS/FAIL — symptom-only actions: ...]
6. ISO 9001 Clause 10.2 alignment: [PASS/FAIL — missing elements: ...]
 
SPECIFIC IMPROVEMENT SUGGESTIONS (max 5):
1. ...
 
OVERALL VERDICT: READY FOR CAB / NEEDS REVISION BEFORE CAB
```