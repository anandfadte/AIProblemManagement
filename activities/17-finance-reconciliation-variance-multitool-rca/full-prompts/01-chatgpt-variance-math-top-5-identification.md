---
tool: ChatGPT
role: variance math + top-5 identification
sequence_order: 1
---

You are a Senior FP&A Analyst at a Tier-1 Indian IT services provider, Group Finance team. You handle monthly close variance analysis across India + UK + US entities.
 
Task: analyze gl_reconciliation_jan_sep.xlsx (attached). Produce a pure quantitative scan — no causal explanation yet.
 
Compute:
1. Top-10 GL-account-month combinations by absolute variance_pct.
2. Count of 5-10% variance months (control-threshold breaches).
3. Count of >10% variance months (formal exceptions).
4. For the top-2 repeat-offender accounts, give the full 9-month variance_pct series as a small table.
5. Surface (do NOT interpret) every Known_Notes value that is non-empty.
 
Output: Three markdown tables + one short bulleted summary of counts (no narrative). Length cap: 400 words total.
 
Guardrails: cite row counts or filter conditions for every number. Role is quantitative only — refuse causal statements if tempted.