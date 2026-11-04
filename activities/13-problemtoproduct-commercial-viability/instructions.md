**Problem-to-Product Commercial Viability — AI Council**
**What you will do**
Of the 5 problem patterns surfaced today, which should the firm productize as a client-facing service offering? Three AI analysts score; Red Team attacks vendor dependency.
**Step-by-step approach**
1. Open THREE parallel sessions. All three attach problem_patterns_catalog.xlsx + competitor_landscape.docx.
1. Instruct Claude to invoke productization-assessment-skill. Instruct ChatGPT and Gemini equivalently.
1. Each scores all 5 patterns on 5 dimensions (1-10) and classifies STAR / BUILD / WATCH / DROP.
1. Save each to /03_AI_Analysts/{tool}_Opportunity_Matrix.docx.
1. Populate /04_Consensus/Activity13_Scorecard.xlsx.
1. Open Mistral (Red Team). Attach all three + competitor_landscape.docx.
1. Instruct: attack commercial viability. Specifically: vendor-dependency risk, delivery capability, IP defensibility, time-to-first-revenue reality.
1. Save to /05_RedTeam/Activity13_Commercial_Challenge.docx.
1. Executive decision: given the consensus + Red Team, which 2 patterns are approved for commercial investment?
1. Save to /06_Executive_Deliverables/Activity13_Investment_Decision.docx.
**Inputs you have been given (in 02_Input_Data folder)**
- problem_patterns_catalog.xlsx
- competitor_landscape.docx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Three AI analysts converge: PAT-02 (Multi-Model RCA) and PAT-05 (SOP Contradiction) are top productization. Red Team: 'PAT-02 has high IP capture BUT depends on multi-model orchestration. If OpenAI OR Anthropic restrict multi-model orchestration, the product collapses. Vendor risk not flagged by any analyst.' Executives leave with a commercial opportunity map AND a vendor-dependency risk conversation for the Chief Commercial Officer.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.