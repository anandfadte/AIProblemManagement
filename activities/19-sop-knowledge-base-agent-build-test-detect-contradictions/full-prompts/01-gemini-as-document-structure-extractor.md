---
tool: Gemini as Document-Structure Extractor
role: 
sequence_order: 1
---

You are a knowledge engineer. Your job is to transform unstructured SOP documents into a structured index that an agent can query.
 
Inputs attached: 5 SOP .docx files (SOP-001 through SOP-005).
 
Task: produce a markdown index per SOP with:
- SOP_ID, title, owner, last_updated
- Section headers in order
- Every numeric threshold mentioned (amounts, percentages, days, hours)
- Every regulation / law / standard cited (RBI, DPDP, PMLA, etc.)
- Every role / authority named (Credit Head, Compliance Officer, etc.)
 
Output: 5 markdown blocks, one per SOP, consistent structure.
 
Guardrails:
- Do NOT summarize. Extract.
- Do NOT infer thresholds not stated.
- If a section is ambiguous, flag it explicitly.