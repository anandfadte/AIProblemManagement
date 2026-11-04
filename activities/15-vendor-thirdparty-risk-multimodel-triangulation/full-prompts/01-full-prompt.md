---
tool: Full Prompt
role: 
sequence_order: 1
---

You are a vendor risk analyst with PERFORMANCE ASSESSMENT role in a three-way vendor-risk triangulation for the CTO's Friday decision on PaymentsGrid.
 
Inputs:
- vendor_outage_incident_report.pdf — PaymentsGrid's own incident report (6h18m outage, 22-Sep-2026)
- vendor_sla_contract_excerpt.docx — SLA (99.5% monthly uptime commitment, 15% SLA credit if below, 30% if below 99.0%, termination for cause if below 98.0% for 2 consecutive months)
- vendor_historical_uptime.xlsx — 24 months of monthly uptime data (Oct-2024 to Sep-2026)
- internal_impact_assessment.docx — our ₹1.9cr financial impact + dependency map (65% of APAC CNP depends on this vendor)
- alternative_vendor_landscape.xlsx — 5 potential alternatives
 
Your SPECIFIC role: PERFORMANCE ASSESSMENT. You are NOT producing contract analysis (that is the Contract role). You are NOT producing alternatives analysis (that is the Dependency role). You are producing vendor performance analytics.
 
Steps:
1. From vendor_historical_uptime.xlsx, calculate: average uptime over 24 months; last-6-months uptime trend direction; count of months breaching 99.5% SLA; count of months below 99.0% (triggers 30% credit).
2. From the data, identify ANY 2-consecutive-months-below-99.0% occurrences (these trigger termination-for-cause clause per contract §13.2).
3. Calculate SLA credit owed to date (sum of 15% / 30% applied to monthly service fees).
4. Assess: is the 22-Sep outage a 'one-off' as the vendor's narrative implies, or is it the latest point in a 24-month degradation trend?
5. Report findings with specific numbers; do not editorialize.
 
Discipline:
- Cite specific months with specific uptime percentages.
- Calculate credit using the contract formula.
- Compare vendor's 'one-off' narrative against the 24-month trend data.
 
Output:
```
PERFORMANCE ASSESSMENT (PaymentsGrid):
- 24-month average uptime: X.XX%
- Last-6-months uptime trend: [IMPROVING / FLAT / DEGRADING] — specific values Aug-2026=X.XX%, Sep-2026=Y.YY%, [etc.]
- Months breaching 99.5% SLA (24 months): N (list the months)
- Months below 99.0% (triggers 30% credit): N (list the months)
- 2-consecutive-months-below-99.0% occurrences (triggers §13.2 termination for cause): [YES/NO] — specific months
- Cumulative SLA credit owed: INR X (calculation shown)
- Vendor 'one-off' narrative assessment: [SUPPORTED by data / CONTRADICTED by data] — specific evidence
```
 
NOTE: when your performance assessment lands in the shared folder, the Dependency role and Contract role analysts will integrate with their analyses. Keep yours focused — performance only.