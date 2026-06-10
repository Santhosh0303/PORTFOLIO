# Brain Sync Audit Skill

This skill defines instructions to audit alignment and logging synchronization with the external Digital Brain folder.

## Steps
1. **Pointer Validation**: Check if `C:\Portfolio\.brainlink\DIGITAL_BRAIN_POINTER.md` points to an existing directory path.
2. **Log Verification**: Read `SESSION_LOG.md` and `AGENT_CHANGELOG.md` in `C:\DigitalBrain-Portfolio` to confirm the latest task is logged.
3. **Step Check**: Verify that `NEXT_EXACT_STEP.md` is updated.
