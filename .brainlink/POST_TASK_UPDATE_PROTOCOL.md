# Post-Task Update Protocol

At the end of every execution task, cooperating agents must sync logs back to the external Obsidian Digital Brain.

## Steps for Synchronization
1. **Locate Vault**: Query `C:\Portfolio\.brainlink\DIGITAL_BRAIN_POINTER.md` to get the external path (`C:\DigitalBrain-Portfolio`).
2. **Update Session Log**: Append a new session entry (Session ID, Date, Tasks Done) to `brain\05_CONTEXT_LOGS\SESSION_LOG.md`.
3. **Update Agent Changelog**: Add the list of modified files, authors, and phase tags to `brain\05_CONTEXT_LOGS\AGENT_CHANGELOG.md`.
4. **Update Tasks**: If a phase gate checklist has changed, mark the task as complete in the brain's task board.
5. **Confirm Next Step**: Ensure `brain\03_TASKS\NEXT_EXACT_STEP.md` is updated to guide the next agent turn.
