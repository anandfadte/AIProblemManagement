**HR Attrition RCA — Multi-Dimensional Causal Council**
**What you will do**
Produce a defensible, team-level root-cause analysis of the 7-point attrition gap vs industry, with a single recommendation on where the CFO should direct the one-time retention budget — compensation adjustment OR manager development, not both.
**Step-by-step approach**
1. Open the attrition dataset. Observe the 18-month trend by team and quarter.
1. Cross-reference with the compensation benchmark file — which teams have the widest Gap_vs_P50_Pct.
1. Cross-reference with the engagement survey — which teams show declining eNPS and manager-effectiveness scores.
1. Read the exit interview notes to triangulate the quantitative signals.
1. Open Claude, ChatGPT, Gemini in three browser tabs. Give the SAME filled prompt to each — people-analyst / financial-analyst / benchmark-analyst roles already encoded.
1. Capture each model's top-3 teams and top-3 causes. Fill the Consensus Scorecard.
1. Then run Mistral in Red Team mode — pass it ONLY the consensus synthesis (not the data) and prompt it to disconfirm or abstain.
1. The named human (CPO) decides between the compensation and manager programs, with reasoning captured in the decision log.
**Inputs you have been given (in 02_Input_Data folder)**
- attrition_dataset_18mo.xlsx
- compensation_benchmark.xlsx
- engagement_survey_results.xlsx
- exit_interview_notes.docx
- hr_business_context.docx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Three AI analysts converge on 'compensation gap in Engineering-Payments + manager tenure in DataOps-Analytics' — then the Red Team flags that the exit-interview text is self-reported and selection-biased, challenges the compensation claim, and asks whether engagement-score decline PRECEDES the exits (leading indicator) or TRAILS them (survivor bias). The room sees that even converged AI consensus has blind spots a disconfirmer catches.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.