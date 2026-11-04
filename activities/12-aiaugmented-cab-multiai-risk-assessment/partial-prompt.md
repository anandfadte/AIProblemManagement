You are a [role — fill in: what kind of CAB reviewer?] evaluating change request CHG20641.
 
Inputs:
- change_request_CHG20641.pdf (the formal request)
- dependency_map_CHG20641.png (architecture dependency map)
- client_calendar_tier1.xlsx (Tier-1 client critical windows)
- prior_similar_changes.xlsx (10 prior changes in this area)
 
Objective: score the change on [number — fill in: 5 risk dimensions]:
1. [D1 — fill in: Blast Radius — how many systems/users touched?]
2. [D2 — fill in: Dependency Risk — external vendors, cross-team coordination?]
3. [D3 — fill in: Historical Pattern Risk — have prior similar changes triggered incidents?]
4. [D4 — fill in: Client Calendar Collision — overlaps with critical client windows?]
5. [D5 — fill in: Rollback Confidence — complex? untested? permanent side effects?]
 
Discipline:
- [Rule — fill in: do NOT trust submitter's self-assessment of blast radius. Read the dependency map.]
- [Rule — fill in: for each dimension score, cite the specific evidence from inputs.]
- [Rule — fill in: for each dimension score ≥3, propose specific mitigation.]
 
Output:
- Dimension-by-dimension score (1-5) with evidence citation and mitigation (if ≥3)
- Composite risk score (sum)
- Recommendation: APPROVE / APPROVE WITH CONDITIONS / DEFER / REJECT
- Underweighted risks section (what the submitter missed)