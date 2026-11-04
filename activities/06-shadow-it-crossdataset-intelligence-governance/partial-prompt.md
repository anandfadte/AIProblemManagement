Act as a [role — fill in: what analytical role?] investigating potential [problem — fill in: what two-dataset problem?].
 
Input:
- software_expense_claims.xlsx: [number — fill in] rows of software expense claims
- network_access_logs.xlsx: [number — fill in] rows of network access events
- approved_vendor_list.xlsx: [number — fill in] approved vendors
 
Objective: quantify [metric 1 — fill in] AND test [hypothesis — fill in: what correlation?]
 
Steps:
1. [Step 1 — fill in: identify claims not matching approved vendor list, by team]
2. [Step 2 — fill in: calculate total shadow spend / team / month]
3. [Step 3 — fill in: cross-reference shadow-tool domains against the access-log events; coincident with API_RATE_LIMIT_ERROR? how often?]
4. [Step 4 — fill in: the critical discipline — distinguish correlation from causation. What is required to establish causation that is NOT in these datasets?]
 
Discipline:
- [Rule — fill in: do not state causation unless the data establishes it]
- [Rule — fill in: identify the test that would validate the causal claim]
- [Rule — fill in: use Python for the correlation; cite row counts]
 
Output:
- Shadow spend table (team / tool / amount / monthly)
- Correlation finding with explicit flag: 'This is CORRELATION, not causation'
- Proposed causation test
- Shadow spend summary for executive briefing