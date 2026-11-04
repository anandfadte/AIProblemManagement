**War-Room Timeline — Multi-Source Reconciliation with Audio**
**What you will do**
Reconcile three evidence formats + one voice briefing into a single defensible timeline + cascade diagram for the P1 PIR package. Flag — do not silently resolve — any timestamp conflict.
**Step-by-step approach**
1. Open Gemini (multimodal). Attach server_error_log.txt + slack_p1_chat_export.pdf + change_management_log.xlsx + incident_voice_briefing_transcript.docx.
1. Ask Gemini to produce the reconciled chronological timeline in UTC, explicitly flagging timezone conversions.
1. Save Gemini's output as /03_AI_Analysts/Gemini_Timeline.docx.
1. Open fresh Claude session. Attach Gemini's timeline. Ask Claude to generate a Mermaid.js sequence diagram showing the cascade across layers.
1. Save Claude's diagram code as /03_AI_Analysts/Claude_CascadeDiagram.docx.
1. Open fresh ChatGPT session. Attach Gemini's timeline + the original 4 source files.
1. Ask ChatGPT to independently cross-check Gemini's timestamp conversions. Flag ANY conflict or ambiguity.
1. Save ChatGPT's cross-check as /05_RedTeam/ChatGPT_TimestampAudit.docx.
1. Open fresh Mistral. Attach all three prior outputs. Ask Mistral to produce the final PIR-ready reconciled timeline + diagram.
1. Save final as /06_Executive_Deliverables/Activity4_Reconciled_Timeline.docx.
**Inputs you have been given (in 02_Input_Data folder)**
- server_error_log.txt
- slack_p1_chat_export.pdf
- change_management_log.xlsx
- incident_voice_briefing_transcript.docx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Gemini ingests three timestamp formats + the voice briefing. It correctly handles the BST→UTC trap: 'Slack 21:58 = 20:58 UTC, not 21:58 UTC.' A less-careful tool would silently resolve the timezone mismatch and the PIR would be 56 minutes off.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.