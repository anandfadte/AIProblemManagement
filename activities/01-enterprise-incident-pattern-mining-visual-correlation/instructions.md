**Enterprise Incident Pattern Mining & Visual Correlation**
**What you will do**
Characterize the Q2 ticket surge BEFORE tomorrow's CAB. Correlate the ticket pattern with the production dashboard anomaly and the change log. Deliver one executive brief defensible under cross-examination.
**Step-by-step approach**
1. Open a fresh ChatGPT (Advanced Data Analysis) session, attach itsm_tickets_2500.xlsx. Ask for semantic clustering of raw descriptions, Pareto distribution, and explicit callout of Category-field reliability.
1. Save ChatGPT's output as /03_AI_Analysts/ChatGPT_Clustering.docx.
1. Open a fresh Gemini session (multimodal). Attach grafana_alert_screenshot.png AND ChatGPT's clustering output. Ask Gemini to describe what the dashboard shows, specifically the timing of any anomaly, and whether it correlates with the top cluster from ChatGPT.
1. Save Gemini's output as /03_AI_Analysts/Gemini_VisualCorrelation.docx.
1. Open a fresh Claude session. Attach change_log_excerpt.xlsx AND Gemini's correlation output. Ask Claude to cross-reference change records against the anomaly window and identify which change(s) temporally align — WITHOUT claiming causation yet.
1. Save Claude's output as /03_AI_Analysts/Claude_ChangeRef.docx.
1. Open a fresh Mistral session. Attach all three prior outputs. Ask Mistral to produce the final executive brief: observed pattern, visual confirmation, suspected trigger (with explicit uncertainty), and the ONE action a well-run CAB would take.
1. Score Mistral's final brief against the 5-dimension rubric (Evidence-grounding, Falsifiability, MECE coverage, Actionability, Concision).
**Inputs you have been given (in 02_Input_Data folder)**
- itsm_tickets_2500.xlsx
- grafana_alert_screenshot.png
- change_log_excerpt.xlsx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
ChatGPT clusters the 2,500 tickets. Gemini reads the PRODUCTION DASHBOARD IMAGE and confirms the auth-svc anomaly matches the cluster timing. Claude cross-references the change log and identifies CHG20641. Mistral consolidates all three into one executive brief. Four tools, four modalities, five minutes.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.