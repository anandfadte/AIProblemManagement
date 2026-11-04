## What a good output looks like

A strong finish to this activity names three specific things:

- **The top 3 behavioural clusters by volume.** Each with its own behavioural name (not a copy of a Category_Label), each with the time window it concentrates in.
- **An independent visual confirmation from Gemini** that the volume spike occurred when ChatGPT said it did. If Gemini disagrees with ChatGPT's timing, flag it — do not paper over it.
- **A specific cluster + specific time window + leading change hypothesis** handed to the next step. Not "investigate CoreBanking issues." Something like: "Investigate the Login-fails-silently cluster centered on weeks 7–9, with CHG-20641 as the primary hypothesis."
- **No causal claim.** This is the S (State) step of SOLVE. Causes belong to the next step (L and O).

## Signals your output is NOT ready

- Any sentence of the form "This is caused by…". You skipped a step.
- Mistral introduces a cluster, timing, or change ID that is not in the ChatGPT, Gemini, or Claude outputs. The chain is broken — the brief is not safe to send.
- Gemini's spike timing matches ChatGPT's because you accidentally fed Gemini ChatGPT's output. Re-run Gemini cold.
- The handoff is "we recommend further investigation." That is a non-handoff. Name the cluster, the window, and the leading hypothesis.
