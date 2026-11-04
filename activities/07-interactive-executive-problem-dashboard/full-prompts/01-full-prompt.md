---
tool: Full Prompt
role: 
sequence_order: 1
---

Create an interactive React dashboard from the attached ticket dataset (itsm_tickets_2500.xlsx) suitable for an Operations Steering Committee's standing meeting.
 
Required views:
- Total tickets stat tile with 'vs previous period' delta
- Top 7-10 clusters based on semantic analysis of the description text (ignoring the unreliable Category field)
- Pareto chart (bar chart + cumulative line) of cluster volume
- Severity distribution donut chart with counts
- Trend-by-month line chart
- Application breakdown bar chart
- Drill-down table into the top cluster: incident IDs, descriptions, severities, SLA status
 
Required filters (must combine, not single-select):
- Date range picker
- Severity multi-select
- Application multi-select
- Region multi-select
- Assignment group multi-select
 
Design principles:
- Executive audience: labels in plain English, no jargon
- Color coding: red for P1/P2, orange for P3, grey for P4
- Pareto chart must show the cumulative-percentage overlay line
- Filters must combine: filtering to Mumbai + P1 must return a Mumbai-AND-P1 result, not either
- Any derived metric (e.g., clustering) must be visibly labeled 'derived — AI clustering of description text'
 
Guardrails:
- Drill-down must surface specific incident IDs, not just aggregates
- Dashboard must render responsively — stat tiles across top, charts in a 2-column grid, drill-down table at bottom
 
Build it now in a Claude Artifact.