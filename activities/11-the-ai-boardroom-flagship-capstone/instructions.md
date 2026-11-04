**THE AI BOARDROOM — Flagship Capstone**
**What you will do**
Run one FRESH P2 incident through the FULL AI Council pipeline, with the Google Drive folder visible on screen, in 25 minutes.
**Step-by-step approach**
1. Pre-flight: ensure Google Drive folder is up on main screen. All four tools pre-opened in separate windows.
1. Open ChatGPT (DATA ANALYST). Attach pfa_core_service_log.txt + fresh_p2_change_log.xlsx. Ask for pattern-mining of the service log — when did the degradation start, what event preceded it, by how much?
1. Save output to /03_AI_Analysts/ChatGPT_DataAnalyst.docx.
1. Open Claude with solve-rca-skill (RCA INVESTIGATOR). Attach fresh_p2_incident_case.docx + ChatGPT's output. Ask for 5-hypothesis register.
1. Save to /03_AI_Analysts/Claude_RCA_Register.docx.
1. Open Gemini (EVIDENCE INTEGRATOR). Attach all three source files. Ask for reconciled timeline + evidence inventory per hypothesis.
1. Save to /03_AI_Analysts/Gemini_EvidenceIntegration.docx.
1. Populate /04_Consensus/Activity11_Scorecard.xlsx with the three analyses side-by-side.
1. Open Mistral (CONTRARIAN). Attach all three. Ask: what are these three analysts collectively missing?
1. Save to /05_RedTeam/Mistral_Contrarian.docx.
1. Open Claude with synthesis-and-redteam-skill (SYNTHESIZER). Attach all four prior outputs + Mistral's challenge.
1. Ask for: Consensus Scorecard + Red Team integration + Executive Recommendation.
1. Save final to /06_Executive_Deliverables/Activity11_Boardroom_Decision.docx.
1. Executive judgment moment: given the consensus + the Red Team, what is the action? Facilitator captures live.
**Inputs you have been given (in 02_Input_Data folder)**
- fresh_p2_incident_case.docx
- fresh_p2_change_log.xlsx
- pfa_core_service_log.txt
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Five AI tools, five different roles, visible outputs in the Drive Control Tower, consensus scorecard updating live, Red Team attacking consensus, executive making the final decision in the room. 25 minutes. The defining session image.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.