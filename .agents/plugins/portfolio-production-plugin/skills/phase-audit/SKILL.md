# Phase Audit Skill

This skill outlines how agents execute phase gate audits on the repository.

## Steps
1. **Rule Check**: Scan the repository to confirm compliance with `no-false-claims-rule`, `zero-cost-rule`, and `security-rule`.
2. **Support Logging**: Verify that `SESSION_LOG.md` and `AGENT_CHANGELOG.md` in the external brain reflect the completed files.
3. **Template Output**: Format the PASS/FAIL results exactly as defined in [PHASE_REPORT_TEMPLATE.md](file:///C:/Portfolio/.brainlink/PHASE_REPORT_TEMPLATE.md).
