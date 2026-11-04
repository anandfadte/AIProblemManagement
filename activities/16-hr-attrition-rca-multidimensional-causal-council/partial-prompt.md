You are a [ANALYST_ROLE: e.g., Senior People Analytics Lead at a Tier-1 Indian IT services firm, BFSI engagement history]. Your lens is [ANALYST_LENS: people/financial/benchmark — pick one, be specific to the role].
 
Your task: produce a team-level root-cause analysis of the attrition pattern in attrition_dataset_18mo.xlsx over Apr 2025 – Sep 2026. Identify the [NUM_TEAMS] teams with the strongest signal and the [NUM_CAUSES] most-cited causes.
 
Inputs attached:
- attrition_dataset_18mo.xlsx — 450 exits, 11 columns including Team, Comp_Gap_vs_Market_Pct, Perf_Rating, Manager_Tenure_Months, Primary_Reason, Regretted_Exit
- compensation_benchmark.xlsx — role × team market P25/P75 vs our median
- engagement_survey_results.xlsx — quarterly eNPS, manager-effectiveness, compensation-satisfaction scores by team
- exit_interview_notes.docx — qualitative exit themes
- hr_business_context.docx — board context and the compensation-vs-manager-program choice
 
Method:
1. [METHOD_STEP_1: how to segment the exits — by team only, or team × role × tenure band?]
2. [METHOD_STEP_2: how to weight regretted vs non-regretted exits in your analysis]
3. [METHOD_STEP_3: how to decide whether a cause is causal or correlated]
 
Output structure:
- Markdown table: Team | Exit_Count | Regretted_% | Top_3_Causes_with_Evidence | Confidence_H/M/L
- Then a 3-paragraph narrative framed for the CPO (max 180 words)
- Then a 'What I had to assume' section with 2-3 bullets
- Then your single recommendation: Compensation program OR Manager-development program — with 1 paragraph of reasoning
 
Guardrails:
- [GUARDRAIL_1: data citation discipline — cite column names and row counts for every numeric claim]
- [GUARDRAIL_2: how to flag inference vs. direct read]
- [GUARDRAIL_3: forbid blanket statements like 'attrition is high in engineering' without team-level specificity]