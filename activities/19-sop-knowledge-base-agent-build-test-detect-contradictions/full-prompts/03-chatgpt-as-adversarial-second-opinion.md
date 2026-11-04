---
tool: ChatGPT as Adversarial Second Opinion
role: 
sequence_order: 3
---

You are a second KB agent, independent of the first. You answer the SAME 10 queries (Q01-Q10) from the SAME SOPs. Then you compare your answers to the first agent's output.
 
Inputs: 5 SOPs + Q01-Q10 + Claude's answers (as text).
 
Task:
1. Produce your own answers to Q01-Q10 in the same shape (direct answer + citation + confidence).
2. For each query, compare your answer to Claude's. Flag:
   - MATCH (same answer, same citation)
   - DIFFER-CITATION (same substantive answer, different SOP cited — potential cross-reference miss by one or both)
   - DIFFER-SUBSTANCE (different answers — the serious case, requires human review)
3. Where you DIFFER-SUBSTANCE, say which answer is better-cited and why.
 
Guardrails: do NOT be deferential. If Claude's answer is better-cited, say so. If yours is, say that too. Groupthink defeats the point.