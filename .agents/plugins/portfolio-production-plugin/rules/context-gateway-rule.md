# Context Gateway Rule

## Objective
Enforce reading of the `.brainlink` gateway configuration files prior to starting any development tasks.

## Rules
- Cooperative agents must lookup `C:\Portfolio\.brainlink\DIGITAL_BRAIN_POINTER.md` to identify the external digital brain path.
- Check `C:\DigitalBrain-Portfolio\brain\00_CONTROL\COMPACT_CONTEXT.md` to confirm the active development phase is not blocked.
- Stop execution if the phase gate is BLOCKED.
