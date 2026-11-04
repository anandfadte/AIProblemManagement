**Design & Validate a Ticket-Triage Agent — Multi-Model Review**
**What you will do**
Design a complete ticket-triage agent spec — role, decision policy, tool-call order, confidence thresholds, hard rules, failure modes — then validate it against 50 fresh tickets and 10 edge cases using three independent models. Do NOT deploy; this is a design-and-validate exercise.
**Step-by-step approach**
1. Read agent_tools_available.docx carefully. Understand what each of the 8 tools does and does NOT do.
1. Read the taxonomy + edge cases. Internalize the hard rules (PII always redacted, VIP always ≥P2, Security always P1, confidence <70% always escalates).
1. Open Claude. Give it the architect prompt. Produce a complete agent spec — role, call-order policy, confidence threshold definition, 3 forbidden behaviors.
1. Open ChatGPT. Give it the agent spec + the 50 tickets. Have it 'play the agent' on each ticket and report its classification + which tools it would call. Compare to known-correct labels.
1. Open Gemini. Give it the agent spec + the 10 edge cases. Have it predict what the agent will do and whether that is correct per the hard rules.
1. Open Mistral in Red Team mode. Give it the agent spec AND the edge-case outcomes. Prompt it to find a path a malicious or careless user could use to game the agent — priority elevation, PII leakage, bypass of security escalation.
1. Review the three validators' outputs. The named human (Service Desk Head) decides: deploy / iterate / do-not-deploy. Capture the decision reasoning.
**Inputs you have been given (in 02_Input_Data folder)**
- ticket_classification_taxonomy.docx
- agent_tools_available.docx
- new_inbound_tickets_50.xlsx
- edge_case_scenarios.docx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Claude produces a tight agent spec with an opinionated tool-call policy (PII detector FIRST on every ticket, user lookup SECOND, duplicate check THIRD before severity scoring). ChatGPT tests it on all 50 tickets and reports precision/recall against known-correct labels. Gemini runs the 10 edge cases and reveals where the agent breaks (usually Edge Case 3 — security disguised as access — and Edge Case 6 — VIP + security collision). Mistral in safety Red Team finds the exploitation path: 'a user mentions a VIP's name to game priority elevation.' The room sees that AI agents are not something you deploy — they are something you design, test, and iterate like software.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.