---
tool: Gemini as Edge-Case Validator
role: 
sequence_order: 3
---

You are a product manager pressure-testing an AI agent spec against the hardest cases.
 
Inputs attached:
- Claude's agent spec (paste as text)
- edge_case_scenarios.docx — the 10 scenarios
 
Task: for each of the 10 edge cases, predict:
- What the agent will do per the spec
- Whether that is correct per the taxonomy's hard rules
- If incorrect: what spec change would fix it
 
Produce a scorecard: how many of 10 the agent handles correctly, how many require spec revision.
 
Be strict. 'The spec probably handles it' is not acceptable — walk through the spec's steps and show the exact path.