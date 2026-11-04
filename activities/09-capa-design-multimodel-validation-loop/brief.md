**The ask**
**Design a classified, owned, measurable CAPA from the validated RCA (CHG20641 SSO TTL). Validate across 4 models for completeness.**
**Context**
The validated root cause from Activity 3 (CHG20641 SSO TTL change) requires a formal CAPA for CAB approval. ISO 9001-compliant format. Multi-model validation ensures the CAPA covers all 5 action classifications (not just corrective).

The pipeline is a VALIDATION LOOP, not just drafting. Claude drafts (using the skill — a documented procedure). ChatGPT then challenges: did Claude miss a classification? Gemini audits against ISO 9001 AND against prior-CAPA patterns to spot organization-specific gaps. Mistral synthesizes the final CAB-ready matrix.
**Why this matters — the wow moment**
Claude invoked WITH THE capa-builder-skill follows a documented procedure (SKILL.md). ChatGPT then challenges: 'you have 2 corrective, 1 preventive, 0 detective. Where is the detective action?' Gemini checks against prior CAPAs: 'the prior CAPA 2026-014 for shadow IT used a quarterly audit as verification — consider same here'. Four tools, four distinct contributions.
**Inputs provided**
- iso_9001_capa_template.docx
- prior_capa_examples.xlsx
- (uses validated RCA from Activity 3 as upstream input)
This brief is the single-page handout participants read before starting. Everything else — datasets, prompts, output guidance — lives in the other folders of this activity.