**The ask**
**Design a complete ticket-triage agent spec — role, decision policy, tool-call order, confidence thresholds, hard rules, failure modes — then validate it against 50 fresh tickets and 10 edge cases using three independent models. Do NOT deploy; this is a design-and-validate exercise.**
**Context**
The service desk receives ~15,000 tickets a month. Current L1 triage averages 4-6 minutes per ticket and misclassifies ~12%. The desk wants to pilot an AI triage agent on net-new tickets. Before any pilot, the design must be reviewed by three models for logic gaps, edge-case robustness, and safety. The 50 fresh tickets contain known-correct classifications; the 10 edge cases are designed to break naive agents (PII in subject, VIP via proxy, security disguised as access, cross-symptom duplicates). The agent has 8 tools available; call-order discipline matters.
**Why this matters — the wow moment**
Claude produces a tight agent spec with an opinionated tool-call policy (PII detector FIRST on every ticket, user lookup SECOND, duplicate check THIRD before severity scoring). ChatGPT tests it on all 50 tickets and reports precision/recall against known-correct labels. Gemini runs the 10 edge cases and reveals where the agent breaks (usually Edge Case 3 — security disguised as access — and Edge Case 6 — VIP + security collision). Mistral in safety Red Team finds the exploitation path: 'a user mentions a VIP's name to game priority elevation.' The room sees that AI agents are not something you deploy — they are something you design, test, and iterate like software.
**Inputs provided**
- ticket_classification_taxonomy.docx
- agent_tools_available.docx
- new_inbound_tickets_50.xlsx
- edge_case_scenarios.docx
This brief is the single-page handout participants read before starting. Everything else — datasets, prompts, output guidance — lives in the other folders of this activity.