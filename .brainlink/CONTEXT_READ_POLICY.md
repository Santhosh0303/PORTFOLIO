# Context Read Policy

To minimize token usage, prevent context bloat, and speed up execution, all cooperating agents must adhere to this reading policy.

## 1. Gateway Files (Read Every Prompt)
These files must be loaded at the start of every developer prompt:
- [C:\Portfolio\AGENTS.md](file:///C:/Portfolio/AGENTS.md)
- [C:\Portfolio\.brainlink\DIGITAL_BRAIN_POINTER.md](file:///C:/Portfolio/.brainlink/DIGITAL_BRAIN_POINTER.md)
- [C:\Portfolio\.brainlink\CONTEXT_READ_POLICY.md](file:///C:/Portfolio/.brainlink/CONTEXT_READ_POLICY.md)
- [C:\DigitalBrain-Portfolio\brain\00_CONTROL\COMPACT_CONTEXT.md](file:///C:/DigitalBrain-Portfolio/brain/00_CONTROL/COMPACT_CONTEXT.md)
- [C:\DigitalBrain-Portfolio\brain\03_TASKS\NEXT_EXACT_STEP.md](file:///C:/DigitalBrain-Portfolio/brain/03_TASKS/NEXT_EXACT_STEP.md)

## 2. Phase-Transition Files (Read Only at Phase Start)
Only read when starting or ending development phases:
- Project Charter, Source Alignment, Phase Gate Register, Public Claims Policy, Zero Cost Policy.

## 3. Detailed Files (Read Only on Demand)
Do not load technical dossiers, risk registers, archives, old session logs, or QA check files unless explicitly instructed by the user or required for debugging.
