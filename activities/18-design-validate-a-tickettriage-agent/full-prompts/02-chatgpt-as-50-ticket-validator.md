---
tool: ChatGPT as 50-ticket Validator
role: 
sequence_order: 2
---

You are a QA engineer stress-testing an AI agent spec against sample data.
 
Inputs attached:
- Claude's agent spec (paste as text)
- new_inbound_tickets_50.xlsx — 50 tickets, 5 with known-correct engineered classifications (TKT70001-70005), 45 others
 
Task: for each of the 50 tickets, 'play the agent' per the spec and report:
- Your classification (category + priority + queue)
- Which tool calls you would make, in order
- Which hard rules were triggered
- Your confidence (as per the spec's definition)
- Whether you would escalate_human
 
For the 5 engineered tickets (70001-70005), compare your output to the correct answer in the Suggested_Category / Suggested_Priority / Agent_Notes columns. Report match / mismatch.
 
Produce a summary: how many of 50 would be classified correctly, how many escalated, how many triggered hard rules.
 
Length: 1500 words max. If the spec is ambiguous on any ticket, state the ambiguity — do NOT paper over it.