## TODO: Withdraw rejected submissions + re-submit flow

- [x] Create branch `blackboxai/withdraw-rejected-submission`
- [x] Add `SubmissionStatus::Withdrawn`
- [x] Update submission status transition rules to allow `Rejected -> Withdrawn -> Pending`
- [x] Add `SubmissionWithdrawn` event publisher
- [ ] Implement `withdraw_submission` in `contracts/earn-quest/src/submission.rs`
- [ ] Add `withdraw_submission` entrypoint in `contracts/earn-quest/src/lib.rs`
- [ ] Update `commit_submission` and `submit_proof` to allow re-submission after withdrawal
- [ ] Add/adjust tests for withdraw + re-submit behavior
- [ ] Run `cargo test` for the contract crate and fix any compilation/test failures

