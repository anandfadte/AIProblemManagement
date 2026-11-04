**The ask**
**The CTO needs a vendor-relationship recommendation on PaymentsGrid by Friday. Three AI analysts triangulate; Red Team identifies the concentration risk.**
**Context**
A critical SaaS vendor (PaymentsGrid) had a 6h18m outage with ₹1.9cr net financial impact. Vendor's own incident report, SLA contract, 24-month uptime history, internal impact assessment, and 5 alternative vendors are provided.

Three AI analysts triangulate: ChatGPT scores vendor performance against SLA, Claude maps our dependency + ranks alternatives, Gemini reads the contract for remedy mechanisms. Red Team identifies the single-points-of-failure none of them flagged: PaymentsGrid handles 65% of our APAC CNP transactions with NO parallel vendor arrangement. Concentration risk = systemic risk.
**Why this matters — the wow moment**
Three AIs independently analyze the vendor. ChatGPT: 'uptime 99.08% breaches SLA.' Claude: 'alternatives exist, 6-9 month switch cost.' Gemini: 'contract §13.2 permits termination for cause given repeated SLA breaches.' Red Team: 'all three focused on the outage. None noted: PaymentsGrid handles 65% of our APAC CNP with ZERO parallel arrangement. The outage exposed a concentration risk that pre-dates the outage.'
**Inputs provided**
- vendor_outage_incident_report.pdf
- vendor_sla_contract_excerpt.docx
- vendor_historical_uptime.xlsx
- internal_impact_assessment.docx
- alternative_vendor_landscape.xlsx
This brief is the single-page handout participants read before starting. Everything else — datasets, prompts, output guidance — lives in the other folders of this activity.