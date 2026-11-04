**Policy Contradiction & Compliance Impact Analysis**
**What you will do**
Surface contradictions between two SOPs; map each to RBI compliance obligations; rank by severity using the QA error-rate trend; draft remediation.
**Step-by-step approach**
1. Open Gemini (multimodal, long-context). Attach both SOP DOCX files.
1. Ask Gemini to cross-reference and identify specific contradictions with paragraph-level citations.
1. Save to /03_AI_Analysts/Gemini_Contradictions.docx.
1. Open Claude. Attach Gemini's contradictions + compliance_framework_reference.docx (RBI directive excerpts).
1. Ask Claude to map each contradiction to the specific RBI clause being violated, and classify as HIGH / MEDIUM / LOW compliance risk.
1. Save to /03_AI_Analysts/Claude_ComplianceMapping.docx.
1. Open ChatGPT (Advanced Data Analysis). Attach qa_error_rate_trend.xlsx + Claude's compliance mapping.
1. Ask ChatGPT to statistically rank which contradiction is MOST LIKELY driving the error spike — using the trend timing (Feb spike → when was each contradiction introduced?).
1. Save to /03_AI_Analysts/ChatGPT_SeverityRanking.docx.
1. Open Mistral. Attach all three. Ask Mistral to draft the unified SOP structure that would resolve the top contradiction, with forcing-function guardrails.
1. Save to /06_Executive_Deliverables/Activity8_Unified_SOP_Draft.docx.
**Inputs you have been given (in 02_Input_Data folder)**
- sop_sales_loan_approval.docx
- sop_underwriting_loan_approval.docx
- compliance_framework_reference.docx
- qa_error_rate_trend.xlsx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Gemini reads two FORMATTED DOCX files with tables and revision history (not clean .txt). Finds 3 textual contradictions with paragraph-level citations. Claude maps each to a specific RBI clause. ChatGPT uses the error-rate trend to rank which contradiction is driving the 15% spike. Mistral drafts the remediation. Executives see 'AI reads REAL compliance documents, not cleaned excerpts.'
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.