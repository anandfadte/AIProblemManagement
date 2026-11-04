---
tool: Full Prompt
role: 
sequence_order: 1
---

You are a commercial strategist evaluating 5 problem patterns for productization as reusable client-facing service offerings for a Tier-1 Indian IT services firm.
 
Input:
- problem_patterns_catalog.xlsx — 5 patterns from today's work (PAT-01 Ticket Clustering, PAT-02 Multi-Model RCA, PAT-03 Timeline Reconciliation, PAT-04 Shadow IT Detection, PAT-05 SOP Contradiction Detection)
- competitor_landscape.docx — Accenture / Deloitte / Infosys / TCS / ServiceNow positioning
 
Score each pattern on 5 dimensions (each 1-10):
1. D1 Reusability — can the same solution ship to 100+ clients with <20% rework? (10 = yes; 1 = each deployment custom)
2. D2 Differentiation — nothing comparable in competitor catalogs? (10 = yes; 1 = fully commoditized)
3. D3 IP Capture — encodes proprietary methodology competitors can't replicate from the raw AI tool? (10 = yes; 1 = mostly reselling AI vendor's capability)
4. D4 Revenue Potential — $5M+ 3-year ARR per large client? (10 = yes; 1 = <$500K)
5. D5 Go-To-Market Speed — saleable within 4-8 weeks? (10 = yes; 1 = 12+ months)
 
Composite = (D1 × 0.25) + (D2 × 0.25) + (D3 × 0.20) + (D4 × 0.20) + (D5 × 0.10)
 
Classification:
- STAR: composite 7+
- BUILD: composite 5-7
- WATCH: composite 3-5
- DROP: composite <3
 
For each pattern, independently assess four red flags:
1. Commercial viability — is there a buyer who will pay? Reference competitor landscape.
2. IP defensibility — will a competitor copy within 6 months?
3. Delivery risk — does the firm have delivery capability for this?
4. AI vendor risk — does success depend on specific AI vendor policies (e.g., multi-model orchestration, specific API features)?
 
Guardrails:
- A pattern scoring high on Reusability but low on Differentiation is DANGEROUS — it will commoditize.
- A pattern scoring high on IP but low on Revenue is INTERNAL CAPABILITY, not a product.
- Do not productize based on technical interest alone.
 
Output:
```
PATTERN SCORING MATRIX:
| Pattern | D1 | D2 | D3 | D4 | D5 | Composite | Class |
 
RED FLAGS (per pattern):
PAT-01: ...
PAT-02: ...
PAT-03: ...
PAT-04: ...
PAT-05: ...
 
INVESTMENT RECOMMENDATION:
INVEST NOW: [list patterns + reasoning]
WATCH: [list + reasoning]
DROP: [list + reasoning]
```