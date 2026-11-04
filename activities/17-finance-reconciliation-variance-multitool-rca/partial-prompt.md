TOOL 1 — ChatGPT (variance math + top-5 identification):
 
You are a [FINANCE_ROLE: e.g., Senior FP&A Analyst at a Tier-1 Indian IT services firm, Group Finance team].
 
Your task: analyze gl_reconciliation_jan_sep.xlsx (attached) and produce a quantitative scan.
 
Specifically:
1. [COMPUTE_1: list the top-N GL-account-month combinations by absolute variance %]
2. [COMPUTE_2: which accounts breach 5%, which breach 10%]
3. [COMPUTE_3: for repeat-offender accounts, show their 9-month variance series]
 
Output: [OUTPUT_SHAPE: table with columns and length cap]
 
Guardrails:
- Do NOT attempt causal explanation. Your role is quantitative only.
- Cite row counts or filter conditions for every number.
- If a cell in Known_Notes contains text, surface it in the output — do NOT interpret it.