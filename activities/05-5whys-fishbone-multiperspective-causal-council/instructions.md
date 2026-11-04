**5-Whys & Fishbone — Multi-Perspective Causal Council**
**What you will do**
Given one SLA-breach narrative, produce three independent causal analyses (5-Whys + Fishbone) and rank the branches by TESTABILITY — not by plausibility.
**Step-by-step approach**
1. Open THREE parallel sessions. All three attach sla_breach_narrative.docx.
1. Instruct each independently to produce: 3 distinct 5-Why chains + Fishbone across 7 standard categories (People, Process, Technology, Data, Vendor, Policy, Environment).
1. Save each to /03_AI_Analysts/{tool}_CausalAnalysis.docx.
1. Open fresh Mistral (or Claude with synthesis-and-redteam-skill). Attach all three.
1. Instruct: rank EVERY branch across the three analyses by TESTABILITY (1-5 scale), with the specific test or evidence that would validate.
1. Save Red Team ranking to /05_RedTeam/Activity5_Testability_Ranking.docx.
1. Executive judgment: which testable branch is pursued first?
**Inputs you have been given (in 02_Input_Data folder)**
- sla_breach_narrative.docx
**Two prompts are provided — use them in this order**
- Prompt A (Skeleton) — First, open Prompt_A_Partial_Skeleton.docx. This is deliberately incomplete. Fill in the bracketed sections [LIKE_THIS] with your own analysis before pasting into the AI tool. This builds the prompt-engineering muscle.
- Prompt B (Complete) — Second, if you get stuck, or after you have tried Prompt A, open Prompt_B_Complete_Ready.docx. This is the fully formed prompt — paste as-is to see a reference execution. Compare your Prompt A output against Prompt B output to see what structured prompting delivers.
**Facilitator wow-moment**
Three AIs produce three materially different causal chains from the SAME narrative. Red Team ranks them by TESTABILITY: 'the systemic branch (SLA tightened without workflow change) is testable in <2 weeks via a process-timing study. The individual-blame branch is unfalsifiable.' Signal vs speculation, surfaced.
Tip: Attach input files to the AI tool directly — do not re-type data into the chat window. Where a connector (Google Drive, Microsoft Graph) is wired, point the AI to the file rather than uploading. Multi-AI runs: open each model in a separate tab; same prompt in all tabs; collect outputs; converge.