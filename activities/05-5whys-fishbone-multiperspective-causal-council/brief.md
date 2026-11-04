**The ask**
**Given one SLA-breach narrative, produce three independent causal analyses (5-Whys + Fishbone) and rank the branches by TESTABILITY — not by plausibility.**
**Context**
A Coastal Retail Banking SLA breach requires a defensible causal analysis. Three AI models independently read the SAME narrative and produce 5-Why chains + Fishbone branches.

The teaching discipline: three models produce materially different causal chains. ChatGPT typically anchors on vendor-delay. Claude typically anchors on the systemic (SLA tightened without workflow redesign). Gemini typically anchors on capacity.

The Red Team then ranks branches by TESTABILITY. The systemic branches are testable (process-timing study, SOP audit). The individual-blame branches ('the analyst was distracted') are not testable after the fact. This separates signal from speculation.
**Why this matters — the wow moment**
Three AIs produce three materially different causal chains from the SAME narrative. Red Team ranks them by TESTABILITY: 'the systemic branch (SLA tightened without workflow change) is testable in <2 weeks via a process-timing study. The individual-blame branch is unfalsifiable.' Signal vs speculation, surfaced.
**Inputs provided**
- sla_breach_narrative.docx
This brief is the single-page handout participants read before starting. Everything else — datasets, prompts, output guidance — lives in the other folders of this activity.