**Regulatory Compliance Fast-Track Impact Assessment**
**What you will do**
Produce the DPDP Act compliance impact matrix: which current operations are compliant, which are not, cost of compliance, timeline. Red Team identifies missed obligations.
**Step-by-step approach**
1. Open THREE parallel sessions. All three attach the full regulatory pack (4 files).
1. Instruct each to produce DPDP impact matrix: for each clause in the regulation, assess current state (compliant / partially compliant / non-compliant), identify specific gap, estimate cost of compliance (High/Med/Low), propose timeline.
1. Save each to /03_AI_Analysts/{tool}_DPDP_Impact_Matrix.docx.
1. Populate /04_Consensus/Activity14_Scorecard.xlsx with the three matrices side-by-side.
1. Open Mistral (Red Team). Attach all three + the regulation.
1. Instruct: identify DPDP obligations the three analysts missed or underweighted. Specifically check for less-obvious obligations (children's data, cross-border notified countries, SDF classification).
1. Save to /05_RedTeam/Activity14_Missed_Obligations.docx.
1. Executive decision: given full impact + Red Team finds, what are the top 3 investment priorities for compliance?
1. Save to /06_Executive_Deliverables/Activity14_Compliance_Investment_Plan.docx.
**Inputs you have been given (in 02_Input_Data folder)**
- regulation_dpdp_act_summary.pdf
- current_data_handling_sop.docx
- current_consent_policy.docx
- data_processing_inventory.xlsx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Three AIs produce three different impact matrices. All three catch the consent-architecture change, retention gap, and cross-border transfer risk. Red Team: 'none of three flagged children's data (DP007 in inventory). DPDP Act requires verifiable parental consent — your current process does not have digital verification. Penalty up to ₹200 crore.'
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.