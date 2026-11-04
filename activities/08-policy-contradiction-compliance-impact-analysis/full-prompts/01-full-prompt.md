---
tool: Full Prompt
role: 
sequence_order: 1
---

Act as a compliance analyst specializing in BFSI lending policies.
 
You have two formatted SOP documents governing the loan approval process at a Tier-1 Indian BFSI firm:
- sop_sales_loan_approval.docx — owned by VP, Retail Sales
- sop_underwriting_loan_approval.docx — owned by Head of Underwriting & Credit Risk
 
Objective: identify logical contradictions or conflicting instructions between the two documents, with specific paragraph-level citations.
 
Discipline:
- Cite the specific section number (e.g., 'Sales SOP §3.2 vs Underwriting SOP §3.1') for every claimed contradiction.
- Distinguish 'different wording' from 'different operational meaning'. Only operationally meaningful differences count as contradictions.
- Return findings as a two-column comparison table.
- Do NOT infer contradictions not textually present. If you cannot cite both sides, do not include it.
- For each contradiction, estimate operational impact (customer-visible? agent-visible? auditor-visible?)
 
Output format:
```
Contradiction #1: [topic]
  Sales SOP states: "..." (§X.Y)
  Underwriting SOP states: "..." (§X.Y)
  Operational impact: [customer/agent/auditor + severity]
 
Contradiction #2: ...
 
Contradiction #3: ...
```
 
Followed by a short note: 'Of the above, Contradiction #[N] creates a 100% error path — every application submitted under Sales SOP §Y.Z will be rejected per Underwriting SOP §A.B.'
 
Guardrails:
- Textual citations only — if the SOP does not say X, do not claim it says X.
- Operationally meaningful differences only.