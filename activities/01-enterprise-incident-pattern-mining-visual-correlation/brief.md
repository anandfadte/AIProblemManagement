## What you will do

Characterize the Q2 ticket surge for CoreBanking-X1 **before** tomorrow's Change Advisory Board. Correlate the ticket pattern with the production dashboard anomaly and the change log. Deliver one executive brief that is defensible under cross-examination.

## Why it matters

Ticket volume for CoreBanking-X1 has grown 38% quarter-on-quarter. The CIO has asked for a pattern-mining pass before any change is approved — because the last three CAB sessions approved changes that turned out to be unrelated to the real issue. Your job is to produce a brief the CIO can defend.

## The pattern

This is a **multi-tool pipeline** — four AI tools, each with a role-exclusive job, running in sequence. Each tool's output is the next tool's input. The orchestration is the discipline; the individual prompts matter less than the handoffs.

## Inputs provided

- `itsm_tickets_2500.xlsx` — 2,500 Q2 tickets with Description, Timestamp, Category_Label, Reporter columns
- `grafana_alert_screenshot.png` — production dashboard image showing the Q2 incident-rate trend
- `change_log_excerpt.xlsx` — change management entries for the Q2 window
