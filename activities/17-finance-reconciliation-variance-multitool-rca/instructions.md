**Finance Reconciliation Variance — Multi-Tool RCA with Visual Confirmation**
**What you will do**
Produce a Controller-grade root-cause explanation of the August 2026 GL variance spike that the Group Controller can take to the CFO on Day+5 of the Sep close. Identify which 2 GL accounts drove the spike, the causal chain, and the control failure that allowed it to repeat month-over-month.
**Step-by-step approach**
1. ChatGPT first: upload gl_reconciliation_jan_sep.xlsx. Prompt it to flag the top-5 variance-% months-account combinations and compute: how many breached 5%, 10%; which accounts are repeat offenders.
1. Gemini second: upload variance_trend_chart.png (ONLY the image). Prompt it to describe the trend without seeing the data; have it independently confirm or dispute what ChatGPT found.
1. Claude third: give it ChatGPT's top-5, Gemini's visual read, journal_entries_flagged.xlsx, prior_period_adjustments.docx, and finance_control_framework.docx. Ask for a causal RCA using the framework's language.
1. Mistral fourth: give it Claude's RCA + the brief shape required (Controller-grade, 1 page, CFO-ready). Mistral's role is governed consolidation — not analysis.
1. Review the full chain for drift between tools. If ChatGPT found X and Claude's RCA explains Y, the chain is broken — restart that step.
**Inputs you have been given (in 02_Input_Data folder)**
- gl_reconciliation_jan_sep.xlsx
- journal_entries_flagged.xlsx
- variance_trend_chart.png
- prior_period_adjustments.docx
- finance_control_framework.docx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
ChatGPT does the pure variance math (which 2 accounts, how much, which months). Gemini reads the trend chart PNG and independently confirms the August spike is NOT a one-off but the latest point in a worsening trend going back to July. Claude does the causal RCA — FX batch job timing + delayed accrual reversals in UK/US intercompany — using the control framework document. Mistral assembles the Controller-grade close brief. The room sees how FOUR tools, each in a specialist role, produce a brief in 20 minutes that would take a Finance Business Partner a full day.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.