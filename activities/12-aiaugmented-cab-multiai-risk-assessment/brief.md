**The ask**
**The CAB has 25 minutes to render a go/no-go on CHG20641. Three independent AI reviewers score risk; Red Team identifies underweighted risks.**
**Context**
A change request CHG20641 (SSO TTL reduction, submitter self-assessed as 'single config parameter, Low impact') is before the CAB. The dependency map (multimodal input) shows the actual blast radius is substantial — 4 apps, 12,500 sessions, external vendor.

The Tier-1 client Coastal Retail Banking is in financial close window starting 28-Jun — 25 days after proposed deployment. Prior similar changes include two that correlate with historical unresolved incidents (INC98213, INC101090).

Three AI reviewers score the change on 5 dimensions. All three come in at MEDIUM. Red Team catches the pattern none of them saw: two historical unresolved incidents in the SAME change area are in the prior-changes dataset — correct call is DEFER, not MEDIUM.
**Why this matters — the wow moment**
Three AI reviewers independently score the change. Submitter said LOW. Three analysts say MEDIUM. Red Team: 'none of three picked up that two historical unresolved incidents (INC98213, INC101090) are in the prior-changes dataset — the correct call is DEFER until historical root cause is understood.' AI DISCOVERS a risk four reviewers (submitter + 3 AIs) missed.
**Inputs provided**
- change_request_CHG20641.pdf
- dependency_map_CHG20641.png
- client_calendar_tier1.xlsx
- prior_similar_changes.xlsx
This brief is the single-page handout participants read before starting. Everything else — datasets, prompts, output guidance — lives in the other folders of this activity.