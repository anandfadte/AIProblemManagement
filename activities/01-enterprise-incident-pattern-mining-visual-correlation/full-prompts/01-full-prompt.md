---
tool: Full Prompt
role: 
sequence_order: 1
---

You are an enterprise Problem Management analyst analyzing an attached ticket dataset for the CIO.
 
Objective: identify recurring semantic patterns in the raw ticket descriptions. DO NOT infer or propose root cause yet — this is the S (State) step of the SOLVE framework. The subsequent L (List) step will handle hypothesis generation.
 
Steps:
1. Cluster semantically similar incidents based on the description text, IGNORING the existing Category field.
2. Calculate the volume and percentage for each cluster.
3. Independently assess the reliability of the existing Category field by checking whether your clusters align with Category values, or whether a single cluster is spread across many Categories.
4. Flag high-severity and high-business-impact clusters.
5. Identify clusters that look like repeated manifestations of one underlying problem.
6. Show the evidence behind each cluster — specific incident IDs or representative description text.
 
Output format:
- A management-friendly ranked table (cluster, volume, percentage, top 3 example incident IDs).
- A Pareto chart.
- A separate observation on Category-field reliability (align with clusters: yes/no, with evidence).
 
Guardrails:
- Clearly separate observed data from interpretation.
- Cite specific incident IDs for each cluster claim.
- Do NOT propose a root cause.
- Explicitly note which cluster shows the strongest signal for the subsequent RCA step.
 
Now analyze the attached file.