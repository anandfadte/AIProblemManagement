**Multi-Dimensional Problem Prioritization — Adversarial Review**
**What you will do**
Rank 18 candidate operational problems for Q3-Q4 investment prioritization. Make the customer-impact vs financial-impact weighting trade-off explicit. The executive owns the weighting decision.
**Step-by-step approach**
1. Open fresh Claude session. Attach problem_register_18.xlsx AND business_impact_context.docx.
1. Ask Claude for: (a) transparent scoring logic (7 dimensions), (b) base ranking, (c) sensitivity analysis under 'customer-impact 2x weighted'.
1. Save Claude's output to /03_AI_Analysts/Claude_Prioritization.docx.
1. Open fresh ChatGPT session. Attach Claude's output AND business_impact_context.docx.
1. Instruct ChatGPT: 'attack Claude's weighting choices adversarially. Identify where Claude under-weighted or over-weighted any dimension relative to the stated CEO Q3 priorities.'
1. Save ChatGPT's challenge to /05_RedTeam/ChatGPT_Challenge_to_Claude.docx.
1. Facilitator reads both outputs to the room. Executive makes the final weighting call LIVE in the room.
1. Capture the executive decision + reasoning in /06_Executive_Deliverables/Activity2_Final_Ranking.docx.
**Inputs you have been given (in 02_Input_Data folder)**
- problem_register_18.xlsx
- business_impact_context.docx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Claude proposes a scoring. ChatGPT then challenges Claude's weighting ('you weighted recurrence equally with customer-impact — the CEO memo says customer-impact is Q3 priority — justify or re-weight'). The room watches two AIs disagree in a structured way. The executive picks the final weighting live.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.