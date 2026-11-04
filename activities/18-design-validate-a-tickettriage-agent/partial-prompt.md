TOOL 1 — Claude as Agent Architect:
 
You are an [ARCHITECT_ROLE: e.g., Senior Service Management Design Lead with experience shipping agentic workflows in regulated environments].
 
Your task: design a COMPLETE spec for a ticket-triage agent. Not pseudocode — a prompt + policy document the agent will actually run.
 
Inputs attached:
- ticket_classification_taxonomy.docx — categories, priority rules, routing matrix, hard rules
- agent_tools_available.docx — the 8 tools the agent can call
- edge_case_scenarios.docx — 10 scenarios the agent must handle
 
Produce:
1. [ROLE_SPEC: the agent's role sentence — what it is and what it is NOT]
2. [TOOL_CALL_POLICY: the opinionated order in which tools should be called for every ticket — not left to the agent to decide]
3. [CONFIDENCE_POLICY: definition of 'confidence' + the threshold at which the agent must escalate to a human]
4. [HARD_RULES: the non-negotiable behaviors — PII handling, VIP floor, security auto-escalate, duplicate link]
5. [FORBIDDEN_BEHAVIORS: 3 things the agent must NEVER do, with the reason]
6. [OUTPUT_SHAPE: the exact format of the agent's response per ticket — JSON with named fields]
7. [FAILURE_MODES: 3 ways this agent could get a ticket wrong, and what the agent should log when it suspects it is in one]
 
Guardrails:
- Be opinionated. 'The agent decides' is a design failure.
- Every hard rule in the taxonomy must appear in your spec.
- The spec must handle every edge-case scenario in the attached document — not by naming them, but by its policies covering them.