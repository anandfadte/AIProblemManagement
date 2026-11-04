**CAPA Design — Multi-Model Validation Loop**
**What you will do**
Design a classified, owned, measurable CAPA from the validated RCA (CHG20641 SSO TTL). Validate across 4 models for completeness.
**Step-by-step approach**
1. Summarize the validated RCA from Activity 3 in 3 sentences.
1. Open Claude with capa-builder-skill invoked. Provide the RCA summary.
1. Claude drafts the full CAPA matrix per the Skill methodology (5 classifications, owner, due date, success metric, verification).
1. Save to /03_AI_Analysts/Claude_CAPA_Draft.docx.
1. Open ChatGPT. Attach Claude's draft + iso_9001_capa_template.docx.
1. Ask ChatGPT: audit this CAPA for completeness. Does it have at least ONE action in each of the 5 classifications? Are all success metrics quantitative?
1. Save to /05_RedTeam/ChatGPT_CAPA_Audit.docx.
1. Open Gemini. Attach Claude's draft + prior_capa_examples.xlsx.
1. Ask Gemini: does this CAPA miss any pattern that prior CAPAs would have taught us?
1. Save to /03_AI_Analysts/Gemini_PatternAudit.docx.
1. Open Mistral. Attach all three + original Claude draft. Ask for the final CAB-ready matrix integrating ChatGPT's completeness finds and Gemini's pattern suggestions.
1. Save to /06_Executive_Deliverables/Activity9_CAPA_Matrix.xlsx.
**Inputs you have been given (in 02_Input_Data folder)**
- iso_9001_capa_template.docx
- prior_capa_examples.xlsx
- (uses validated RCA from Activity 3 as upstream input)
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Claude invoked WITH THE capa-builder-skill follows a documented procedure (SKILL.md). ChatGPT then challenges: 'you have 2 corrective, 1 preventive, 0 detective. Where is the detective action?' Gemini checks against prior CAPAs: 'the prior CAPA 2026-014 for shadow IT used a quarterly audit as verification — consider same here'. Four tools, four distinct contributions.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.