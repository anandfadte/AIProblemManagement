**Interactive Executive Problem Dashboard**
**What you will do**
Build a working, filterable Problem Management dashboard in 20 minutes. The Operations Steering Committee clicks through it LIVE at their next meeting — not a static deck.
**Step-by-step approach**
1. Open fresh Claude session with Artifacts enabled. Attach itsm_tickets_2500.xlsx.
1. Ask Claude to build an interactive dashboard with: total tickets, top problem clusters (semantic clustering), Pareto chart, severity distribution, trend by month, application breakdown, drill-down to incident detail.
1. Add filters: date range, severity, application, assignment group, region.
1. Iterate CONVERSATIONALLY: 'add a Mumbai-region filter', 'show only P1/P2', 'add a drill-down to the top cluster'.
1. Save the Artifact URL to /03_AI_Analysts/Claude_Analyst/Activity7_Dashboard_URL.docx.
1. The deliverable IS the live Artifact. The DOCX just captures the URL + screenshot.
**Inputs you have been given (in 02_Input_Data folder)**
- itsm_tickets_2500.xlsx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
In <5 minutes of conversational iteration, Claude Artifacts produces a working React dashboard the room clicks through LIVE. 'AI can build a tool, not just a report.' The single most mental-model-shifting moment of the day.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.