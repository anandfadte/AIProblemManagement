---
tool: Full Prompt
role: 
sequence_order: 1
---

Act as a causal analysis partner for a BPO SLA breach investigation. Input: sla_breach_narrative.docx describing a missed monthly financial-reporting deadline for Coastal Retail Banking.
 
Produce:
1. THREE INDEPENDENT 5-Why chains, each with a MATERIALLY DIFFERENT starting point. Chain 1 start from the symptom (deadline missed). Chain 2 start from the vendor-input angle (reconciliation sheet was late). Chain 3 start from the systemic angle (SLA was tightened without workflow redesign).
2. A Fishbone (Ishikawa) analysis across the 7 categories: People, Process, Technology, Data, Vendor, Policy, Environment. Each category gets 2-3 branches with specific examples from the narrative.
3. For every branch (across all chains and the Fishbone), label TESTABLE or SPECULATIVE, with the specific test or evidence that would validate.
 
Discipline:
- The three chains must be substantively different, not three slight rewrites of the same chain. If you cannot differentiate, flag which category you cannot cover.
- Push past 'the analyst forgot' to 'the workflow has no forcing function'. Individual-blame explanations are flagged SPECULATIVE unless you can propose a test.
- For each branch, specify the test: process-timing study? SOP audit? data query? Interview? Historical pattern match?
 
Output:
```
CHAIN 1 — starts from: deadline missed (symptom)
  Why 1: ... [evidence from narrative]
  Why 2: ...
  Why 3: ...
  Why 4: ...
  Why 5 (root): ...
 
CHAIN 2 — starts from: vendor delivery delay
  Why 1-5: ...
 
CHAIN 3 — starts from: SLA tightening without workflow redesign
  Why 1-5: ...
 
FISHBONE (7 categories x 2-3 branches):
  People: ...
  Process: ...
  Technology: ...
  Data: ...
  Vendor: ...
  Policy: ...
  Environment: ...
 
TESTABILITY SORT:
  TESTABLE (can be validated in <2 weeks with available data):
    - [branch] — test: [specific test]
    - [branch] — test: [specific test]
  SPECULATIVE (cannot be validated after the fact):
    - [branch] — reason unfalsifiable
```
 
Guardrails:
- At least ONE branch from each chain must be TESTABLE.
- 'The analyst was tired/distracted' is SPECULATIVE unless there is documentary evidence.