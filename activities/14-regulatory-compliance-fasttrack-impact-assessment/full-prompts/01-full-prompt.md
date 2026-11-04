---
tool: Full Prompt
role: 
sequence_order: 1
---

You are a compliance analyst producing a DPDP Act 2023 impact assessment for the Chief Risk Officer of a Tier-1 Indian BFSI firm.
 
Input:
- regulation_dpdp_act_summary.pdf — DPDP Act operational summary with ~10 key obligations
- current_data_handling_sop.docx — current SOP (acknowledged to have pre-DPDP gaps)
- current_consent_policy.docx — current consent approach (bundled T&C)
- data_processing_inventory.xlsx — 12 current data processing operations with DPDP gap flags
 
Objective: for EACH DPDP obligation (consent, purpose limitation, data minimization, breach notification, data principal rights, children's data, cross-border transfer, retention, grievance), produce an impact assessment with 6 fields:
1. Current compliance status: Compliant / Partially compliant / Non-compliant
2. Specific gap: citation from current SOP (quote the relevant line)
3. Affected processes: list the specific Process_IDs from data_processing_inventory
4. Cost of compliance: High (>INR 5cr) / Medium (INR 1-5cr) / Low (<INR 1cr) with one-line reasoning
5. Timeline: realistic implementation window given DPDP phased deadlines
6. Penalty exposure if not fixed: specific INR amount from regulation summary
 
Discipline:
- Cite specific DPDP obligation (e.g., 'per regulation summary §2, "Breach Notification"')
- Cite specific current SOP gap (quote the relevant line)
- Reference specific Process_IDs from the inventory
- Reasoned cost estimates, not just H/M/L
 
Output:
```
OBLIGATION-BY-OBLIGATION IMPACT MATRIX:
 
Obligation 1: Consent
  Current status: Non-compliant
  Specific gap: current SOP says "Consent is captured through the standard terms-and-conditions acceptance" (§2) — DPDP requires specific, informed, free, unambiguous consent per purpose
  Affected processes: DP001, DP002, DP003, DP004, DP005, DP010, DP012 (7 of 12)
  Cost of compliance: High (>INR 5cr) — architectural change to consent capture + storage + audit
  Timeline: 9-12 months (Phase 2 deadline: 1-Jul-2026)
  Penalty exposure: ₹50cr per violation (other obligations)
 
Obligation 2: Purpose Limitation
  ...
 
[continue through all obligations]
 
TOP 3 INVESTMENT PRIORITIES (ranked by penalty exposure × remediation urgency):
1. ...
2. ...
3. ...
```