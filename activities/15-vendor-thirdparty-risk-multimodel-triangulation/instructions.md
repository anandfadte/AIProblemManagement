**Vendor / Third-Party Risk Multi-Model Triangulation**
**What you will do**
The CTO needs a vendor-relationship recommendation on PaymentsGrid by Friday. Three AI analysts triangulate; Red Team identifies the concentration risk.
**Step-by-step approach**
1. Open THREE parallel sessions. Attach the full vendor-risk pack (5 files) to each.
1. Instruct ChatGPT: performance assessment. Score vendor against SLA using uptime history, calculate penalty exposure, assess trend.
1. Instruct Claude: dependency + alternatives. Map our dependency on this vendor by service, rank alternatives from the landscape by strategic fit.
1. Instruct Gemini: contract analysis. Read SLA contract clauses, identify remedy mechanisms (termination for cause, SLA credits, transition assistance).
1. Save each to /03_AI_Analysts/{tool}_Vendor_Analysis.docx.
1. Populate /04_Consensus/Activity15_Scorecard.xlsx.
1. Open Mistral (Red Team). Attach all three + internal_impact_assessment.docx.
1. Instruct: identify single-points-of-failure + concentration risk. Specifically look at the internal impact assessment's 'Downstream Vendor Dependency Map' section.
1. Save to /05_RedTeam/Activity15_Concentration_Risk.docx.
1. Executive decision: continue / renegotiate / parallelize / terminate.
1. Save to /06_Executive_Deliverables/Activity15_Vendor_Decision.docx.
**Inputs you have been given (in 02_Input_Data folder)**
- vendor_outage_incident_report.pdf
- vendor_sla_contract_excerpt.docx
- vendor_historical_uptime.xlsx
- internal_impact_assessment.docx
- alternative_vendor_landscape.xlsx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Three AIs independently analyze the vendor. ChatGPT: 'uptime 99.08% breaches SLA.' Claude: 'alternatives exist, 6-9 month switch cost.' Gemini: 'contract §13.2 permits termination for cause given repeated SLA breaches.' Red Team: 'all three focused on the outage. None noted: PaymentsGrid handles 65% of our APAC CNP with ZERO parallel arrangement. The outage exposed a concentration risk that pre-dates the outage.'
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.