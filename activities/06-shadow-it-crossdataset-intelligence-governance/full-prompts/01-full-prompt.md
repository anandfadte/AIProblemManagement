---
tool: Full Prompt
role: 
sequence_order: 1
---

Act as a Data & Risk Analyst investigating potential Shadow IT and its correlation with CRM API outages.
 
Input:
- software_expense_claims.xlsx: 180 rows of software expense claims from the last quarter
- network_access_logs.xlsx: 324 rows of network access events with event_tag column (OK or API_RATE_LIMIT_ERROR)
- approved_vendor_list.xlsx: 9 approved vendors with max annual spend
 
Objective: quantify Shadow IT spend AND test the hypothesis that shadow-tool network traffic coincides temporally with API_RATE_LIMIT_ERROR events in the core CRM.
 
Steps:
1. Identify all expense claims where the software is NOT on the approved vendor list. Group by team. Sum amount_usd_per_month.
2. Calculate total shadow spend per team per month and the top 5 shadow tools by cumulative spend.
3. Cross-reference the domain of each shadow tool against the destination_domain in the access logs. For each shadow-tool access event, check if any API_RATE_LIMIT_ERROR event (destination = crm.coreinternal.com) occurred within 60 seconds. Count the coincident vs non-coincident events.
4. Calculate the coincidence percentage: (coincident shadow-access events) / (total shadow-access events). Report this as a correlation, NOT as causation.
5. State the specific test that would validate the causal claim: 'block one shadow-tool's network access for 7 days and observe whether the API_RATE_LIMIT_ERROR rate drops'.
 
Discipline:
- Use Python for the correlation. Cite row counts for every calculation.
- Do NOT state 'the shadow tools are causing the API errors' unless the data establishes it.
- The output must distinguish 'observed correlation' from 'causal claim'.
 
Output:
```
(a) Shadow spend summary table: Team | Count of shadow claims | Monthly $ | Top shadow tool
(b) Overall shadow spend: $X / month across Y teams
(c) Correlation finding: Z% of shadow-tool access events coincide within 60s of CRM API_RATE_LIMIT_ERROR
(d) EXPLICIT FLAG: 'This is observed correlation. Not causation. To validate causation we would need [specific test].'
(e) Executive one-liner: for the Operations Steering Committee
```
 
Guardrails: do not infer causation. The 60-second coincidence is a signal, not proof.