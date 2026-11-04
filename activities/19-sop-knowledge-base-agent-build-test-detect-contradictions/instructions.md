**SOP Knowledge Base Agent — Build, Test, Detect Contradictions**
**What you will do**
Build a working KB agent over 5 SOPs that answers 20 real operations queries with citations, detects 3 known cross-SOP contradictions (and ideally finds more), and refuses to invent policy for the 3 queries that have no clean SOP answer.
**Step-by-step approach**
1. Gemini first: give it all 5 SOPs. Prompt it to extract a structured index per SOP — section headers, approval thresholds, cited regulations, dates. Output: a markdown index.
1. Claude second: give it the 5 SOPs + Gemini's index + citation_requirements.docx + the first 10 test queries. Have it answer each with the required citation shape.
1. ChatGPT third: give it the SAME 10 queries (without Claude's answers). Adversarial second opinion — do your answers match Claude's? Where they differ, say which is better-cited.
1. Claude fourth: answer the remaining 10 queries, including the 3 that have no clean SOP answer. The 3 must be refused with explicit 'refer to Compliance/Legal' language.
1. Mistral fifth: run contradiction detection across all 5 SOPs. Prompt it to find policies that conflict, with specific SOP+section citations.
1. Review: compare Mistral's contradictions to the 3 known ones in known_contradictions.docx (do NOT give known_contradictions.docx to Mistral — this is the facilitator's answer key).
1. The named human (Operations Head) decides which contradictions to escalate to Legal and in what order.
**Inputs you have been given (in 02_Input_Data folder)**
- sop_corpus_index.xlsx
- sop_sales_loan_approval.docx
- sop_underwriting_loan_approval.docx
- sop_collections_dunning_cycle.docx
- sop_customer_onboarding_kyc.docx
- sop_dispute_resolution.docx
- test_queries.docx
- citation_requirements.docx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Gemini extracts a structured index of every SOP (section headers, approval thresholds, citation targets) in one pass — the kind of knowledge-engineering that would take an analyst 2 days. Claude answers 17 of 20 queries with correct citations and REFUSES to answer the 3 that have no clean SOP source (saying 'the SOPs do not directly address this; refer to Compliance/Legal'). Mistral detects all 3 known contradictions and finds a 4th (undocumented waiver authority gap in SOP-002 vs SOP-005). The room sees how 'knowledge management' goes from 'pile of PDFs' to 'queryable system with discipline' in 30 minutes.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.