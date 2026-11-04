**The ask**
**Build a working KB agent over 5 SOPs that answers 20 real operations queries with citations, detects 3 known cross-SOP contradictions (and ideally finds more), and refuses to invent policy for the 3 queries that have no clean SOP answer.**
**Context**
The India operations team gets ~400 process questions a week. Current practice: email the SOP owner, wait 1-2 days for an answer, often get an answer that misses a cross-reference to another SOP. The operations head wants to pilot a KB agent that answers from the SOP corpus with citations. The corpus has 5 SOPs. 20 real queries have been captured, 3 of which have no clean SOP answer (correct behavior: refuse, point to Compliance/Legal). 3 known contradictions exist across the SOPs (DPDP opt-out, waiver thresholds, communication cutoff times) — the agent must detect them.
**Why this matters — the wow moment**
Gemini extracts a structured index of every SOP (section headers, approval thresholds, citation targets) in one pass — the kind of knowledge-engineering that would take an analyst 2 days. Claude answers 17 of 20 queries with correct citations and REFUSES to answer the 3 that have no clean SOP source (saying 'the SOPs do not directly address this; refer to Compliance/Legal'). Mistral detects all 3 known contradictions and finds a 4th (undocumented waiver authority gap in SOP-002 vs SOP-005). The room sees how 'knowledge management' goes from 'pile of PDFs' to 'queryable system with discipline' in 30 minutes.
**Inputs provided**
- sop_corpus_index.xlsx
- sop_sales_loan_approval.docx
- sop_underwriting_loan_approval.docx
- sop_collections_dunning_cycle.docx
- sop_customer_onboarding_kyc.docx
- sop_dispute_resolution.docx
- test_queries.docx
- citation_requirements.docx
This brief is the single-page handout participants read before starting. Everything else — datasets, prompts, output guidance — lives in the other folders of this activity.