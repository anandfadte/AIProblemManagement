**AI-Augmented CAB — Multi-AI Risk Assessment**
**What you will do**
The CAB has 25 minutes to render a go/no-go on CHG20641. Three independent AI reviewers score risk; Red Team identifies underweighted risks.
**Step-by-step approach**
1. Open THREE parallel sessions. All three attach change_request_CHG20641.pdf + dependency_map_CHG20641.png + client_calendar_tier1.xlsx + prior_similar_changes.xlsx.
1. Instruct Claude to invoke cab-risk-assessment-skill. Instruct ChatGPT and Gemini with the equivalent instruction.
1. Each produces a 5-dimension risk score + composite + recommendation.
1. Save each to /03_AI_Analysts/{tool}_CAB_Scoring.docx.
1. Populate /04_Consensus/Activity12_Scorecard.xlsx with three scorings side-by-side.
1. Open Mistral (Red Team). Attach all three scorings + prior_similar_changes.xlsx.
1. Instruct: identify risks the three analysts underweighted or missed. Specifically look at prior-change-to-historical-incident correlations.
1. Save to /05_RedTeam/Activity12_Underweighted_Risks.docx.
1. Executive decision: given consensus (MEDIUM) + Red Team (DEFER), what is the CAB verdict?
**Inputs you have been given (in 02_Input_Data folder)**
- change_request_CHG20641.pdf
- dependency_map_CHG20641.png
- client_calendar_tier1.xlsx
- prior_similar_changes.xlsx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Three AI reviewers independently score the change. Submitter said LOW. Three analysts say MEDIUM. Red Team: 'none of three picked up that two historical unresolved incidents (INC98213, INC101090) are in the prior-changes dataset — the correct call is DEFER until historical root cause is understood.' AI DISCOVERS a risk four reviewers (submitter + 3 AIs) missed.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.