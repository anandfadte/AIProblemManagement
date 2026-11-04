**The ask**
**Quantify shadow IT spend, test the hypothesis that it correlates with CRM API rate-limit errors, and MAP findings to the governance policy to identify gaps.**
**Context**
The CFO has flagged unusual small SaaS subscriptions on expense claims. The CRM operations team is complaining about API rate-limit errors. The CIO wants to know whether these are related AND where the governance policy failed to prevent this.

Four tools work the pipeline. ChatGPT does Python correlation on the two datasets. Claude maps the findings to the IT Governance Policy. Gemini reads the full policy and identifies the specific policy clauses that failed to prevent this. Mistral enforces the correlation-vs-causation discipline on the final finding and drafts remediation.
**Why this matters — the wow moment**
ChatGPT finds 54 shadow-tool claims = $2,235/month in shadow spend. 40% of shadow access coincides with CRM API errors. Claude maps this to §3.1 of the policy (approved-vendor requirement violated). Gemini reads the policy and finds §4.1 (Finance approval threshold at $500) is the specific loophole. Four tools, four distinct findings, one complete picture.
**Inputs provided**
- software_expense_claims.xlsx
- network_access_logs.xlsx
- approved_vendor_list.xlsx
- it_governance_policy.docx
This brief is the single-page handout participants read before starting. Everything else — datasets, prompts, output guidance — lives in the other folders of this activity.