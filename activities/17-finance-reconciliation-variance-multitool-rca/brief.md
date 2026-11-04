**The ask**
**Produce a Controller-grade root-cause explanation of the August 2026 GL variance spike that the Group Controller can take to the CFO on Day+5 of the Sep close. Identify which 2 GL accounts drove the spike, the causal chain, and the control failure that allowed it to repeat month-over-month.**
**Context**
The Jan-Sep 2026 reconciliation shows a consistent ~5% control threshold with one exception — August, where 2 of 12 GL accounts breached 10%. Prior-period adjustments confirm the same accounts (GL-3002 FX unrealized + GL-4002 accrued revenue) have had PPAs in Jul and Aug. The CAPA from July was NOT yet effective. The CFO is scheduled to see the Sep close variance report on Day+5. The Controller needs an explanation that is Finance-grade, not auditor-grade — crisp, causal, with a named control gap.
**Why this matters — the wow moment**
ChatGPT does the pure variance math (which 2 accounts, how much, which months). Gemini reads the trend chart PNG and independently confirms the August spike is NOT a one-off but the latest point in a worsening trend going back to July. Claude does the causal RCA — FX batch job timing + delayed accrual reversals in UK/US intercompany — using the control framework document. Mistral assembles the Controller-grade close brief. The room sees how FOUR tools, each in a specialist role, produce a brief in 20 minutes that would take a Finance Business Partner a full day.
**Inputs provided**
- gl_reconciliation_jan_sep.xlsx
- journal_entries_flagged.xlsx
- variance_trend_chart.png
- prior_period_adjustments.docx
- finance_control_framework.docx
This brief is the single-page handout participants read before starting. Everything else — datasets, prompts, output guidance — lives in the other folders of this activity.