# External Brain Update Rule

## Objective
Enforce log synchronization to the external Digital Brain folder upon completing any task.

## Rules
- Every write or development task must finish by appending details to:
  - `C:\DigitalBrain-Portfolio\brain\05_CONTEXT_LOGS\SESSION_LOG.md`
  - `C:\DigitalBrain-Portfolio\brain\05_CONTEXT_LOGS\AGENT_CHANGELOG.md`
- Ensure `NEXT_EXACT_STEP.md` in the digital brain folder is updated to match the resulting state.
