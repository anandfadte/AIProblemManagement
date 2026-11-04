**Shadow IT Cross-Dataset Intelligence & Governance**
**What you will do**
Quantify shadow IT spend, test the hypothesis that it correlates with CRM API rate-limit errors, and MAP findings to the governance policy to identify gaps.
**Step-by-step approach**
1. Open ChatGPT (Advanced Data Analysis). Attach software_expense_claims.xlsx + network_access_logs.xlsx + approved_vendor_list.xlsx.
1. Ask for: (a) list of claims not on approved vendor list, (b) total shadow spend by team, (c) temporal correlation of shadow-tool access with API_RATE_LIMIT_ERROR events — WITH explicit correlation-vs-causation flag.
1. Save to /03_AI_Analysts/ChatGPT_ShadowAnalysis.docx.
1. Open Claude. Attach ChatGPT's output + it_governance_policy.docx.
1. Ask Claude to map each ChatGPT finding to the specific policy clause that applies, and classify as 'policy exists but not enforced' vs 'policy gap'.
1. Save to /03_AI_Analysts/Claude_PolicyMapping.docx.
1. Open Gemini. Attach the FULL it_governance_policy.docx (long-context) and Claude's mapping.
1. Ask Gemini to identify any policy clause that should have prevented this but did not — the GAP identification step.
1. Save to /03_AI_Analysts/Gemini_PolicyGapScan.docx.
1. Open Mistral. Attach all three. Ask for a final executive brief: finding + correlation-vs-causation discipline + top 3 remediation actions ranked by cost:impact.
1. Save to /06_Executive_Deliverables/Activity6_Final_Brief.docx.
**Inputs you have been given (in 02_Input_Data folder)**
- software_expense_claims.xlsx
- network_access_logs.xlsx
- approved_vendor_list.xlsx
- it_governance_policy.docx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
ChatGPT finds 54 shadow-tool claims = $2,235/month in shadow spend. 40% of shadow access coincides with CRM API errors. Claude maps this to §3.1 of the policy (approved-vendor requirement violated). Gemini reads the policy and finds §4.1 (Finance approval threshold at $500) is the specific loophole. Four tools, four distinct findings, one complete picture.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.