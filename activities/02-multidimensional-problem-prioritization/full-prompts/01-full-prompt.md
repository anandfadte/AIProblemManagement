---
tool: Full Prompt
role: 
sequence_order: 1
---

Act as a strategic prioritization analyst evaluating 18 candidate operational problems for the Operations Steering Committee of a Tier-1 Indian BFSI firm.
 
Input: problem_register_18.xlsx (18 candidate problems scored on 7 dimensions: frequency, customer impact, SLA impact, hours lost, financial impact, recurrence, regulatory risk) + business_impact_context.docx (CEO's current Q3-Q4 priorities).
 
Step 1: Propose a transparent weighted scoring model across the 7 dimensions. State your weights explicitly as fractions summing to 1.0. Justify each weight by direct reference to the business context document (quote the relevant line from the context).
 
Step 2: Calculate the base ranking under your proposed weights. Show the top 10.
 
Step 3: Run a sensitivity analysis under 'customer-impact weighted 2x the base weight' (adjust other weights proportionally). Show how the top 10 shifts.
 
Step 4: State in ONE sentence the specific weighting trade-off question the executive committee is being asked to make.
 
Guardrails:
- Do NOT declare any single problem 'the best investment' — expose the trade-off, do not resolve it.
- Your output must enable the executive to re-weight live in the room.
- Every weighting choice must trace to a specific line in business_impact_context.docx.
 
Output:
(a) Scoring logic with weights + justification per weight.
(b) Base ranking table (top 10).
(c) Sensitivity ranking table (top 10 under customer-impact 2x).
(d) The one-sentence weighting trade-off question for the executive.