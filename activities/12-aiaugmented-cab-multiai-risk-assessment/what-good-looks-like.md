**Expected output structure**
A strong AI output for this activity will contain the following sections / elements:
- Three independent 5-dimension scorings (ChatGPT, Claude-with-skill, Gemini)
- Consensus scorecard: dimension-by-dimension agreement
- Red Team: underweighted risks across all three analysts
- Final CAB recommendation with reasoning
- The specific historical-incident pattern Red Team caught (INC98213, INC101090)
**Scoring rubric (5 dimensions)**
**Common failure modes — watch for these**
- All three accept submitter's 'Low impact'. Response: 'look at the dependency map image — is 4 apps + external vendor + 12,500 sessions LOW blast radius?'
- None reference the client calendar. Response: 'the Coastal Retail close window is 28-Jun. Does the proposed window matter?'
- Red Team misses the historical pattern. Response: 'look at prior_similar_changes.xlsx row-by-row — CHG19801 and CHG20210 have 'Associated with INC...' in the notes'.
**Debrief question for the room**
Where did the AI add the most value — and where would you NOT trust it without a human review step? Be specific about the failure mode you saw.
Scoring is a facilitation device — not an exam. The point is to make the quality dimensions visible and discussable, so participants internalize what a 'good' AI output looks like for their own work.