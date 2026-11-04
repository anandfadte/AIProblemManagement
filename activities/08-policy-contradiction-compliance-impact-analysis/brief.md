**The ask**
**Surface contradictions between two SOPs; map each to RBI compliance obligations; rank by severity using the QA error-rate trend; draft remediation.**
**Context**
The QA team flagged a 15% spike in loan-approval errors (from 2.5% baseline to 16% sustained over 3 months). Two SOPs govern the process — Sales SOP and Underwriting SOP. Three built-in contradictions exist, each of which maps to a specific RBI Master Direction clause.

Four tools pipeline: Gemini reads both FORMATTED SOP documents (tables + numbered sections + signatures). Claude maps each contradiction to the RBI directive. ChatGPT ranks severity using the QA error-rate trend data. Mistral drafts the unified SOP structure that would resolve the contradictions.
**Why this matters — the wow moment**
Gemini reads two FORMATTED DOCX files with tables and revision history (not clean .txt). Finds 3 textual contradictions with paragraph-level citations. Claude maps each to a specific RBI clause. ChatGPT uses the error-rate trend to rank which contradiction is driving the 15% spike. Mistral drafts the remediation. Executives see 'AI reads REAL compliance documents, not cleaned excerpts.'
**Inputs provided**
- sop_sales_loan_approval.docx
- sop_underwriting_loan_approval.docx
- compliance_framework_reference.docx
- qa_error_rate_trend.xlsx
This brief is the single-page handout participants read before starting. Everything else — datasets, prompts, output guidance — lives in the other folders of this activity.