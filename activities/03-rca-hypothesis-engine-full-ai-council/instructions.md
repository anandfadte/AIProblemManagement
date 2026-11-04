**RCA Hypothesis Engine — Full AI Council**
**What you will do**
Produce a defensible, differential hypothesis register for the overnight P1 (INC104821) within 25 minutes of the P1 debrief kickoff. Red Team must attack the consensus.
**Step-by-step approach**
1. Open THREE parallel sessions (ChatGPT, Claude, Gemini). All three attach the same evidence pack.
1. Instruct Claude to invoke solve-rca-skill. The other two use the generic hypothesis-engine prompt.
1. Each produces an independent 5-hypothesis register. Save as /03_AI_Analysts/{tool}_Register.docx.
1. Populate /04_Consensus/Activity3_Scorecard.xlsx with the three registers side-by-side (hypothesis + each tool's confidence). Classify agreement per hypothesis.
1. Open fresh Mistral (or Claude new session with synthesis-and-redteam-skill). Attach all three registers.
1. Instruct Red Team to identify: (a) shared unexamined assumption, (b) collectively ignored evidence, (c) alternative explanation, (d) falsification test, (e) revised confidence.
1. Save Red Team output to /05_RedTeam/Activity3_Challenge.docx.
1. Executive judgment moment: given the consensus + the Red Team challenge, what action is approved?
**Inputs you have been given (in 02_Input_Data folder)**
- major_incident_case_brief.docx
- change_management_log.xlsx
- server_error_log.txt
- slack_p1_chat_export.pdf
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Three AIs independently rank the same evidence. All three top-rank H1 (SSO TTL change). The Red Team attacks: 'all three anchored on the change log because it was the most prominent artifact. None of the three validated the frontend-asset deployment hypothesis properly.' The room sees CONSENSUS ≠ TRUTH.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.