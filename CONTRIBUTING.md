# Contributing to the React-Vite Monorepo

We welcome contributions! To ensure a smooth and high-quality workflow, please adhere to the following guidelines. Failure to follow these steps may result in delayed reviews or rejection of your Pull Request (PR).

## 1. Branching Strategy

We use a **Feature Branch Workflow** based on the main branch.

1. **Start Point:** All new work (features, bug fixes, refactoring) must branch off the **`main`** branch.
2. **Naming Convention:** Use descriptive, lowercase branch names prefixed by the type of work being done. Use hyphens (`-`) as separators.
* **Features:** `feature/<short-description>` (e.g., `feature/user-profile-page`)
* **Bug Fixes:** `fix/<short-description>` (e.g., `fix/login-button-alignment`)
* **Refactoring:** `refactor/<short-description>` (e.g., `refactor/migrate-hooks`)
* **Documentation:** `docs/<short-description>` (e.g., `docs/update-readme`)
3. **Creation:** Always create your new branch using the `-b` flag:
```bash
git checkout -b feature/new-branch-name main
```

## 2. Commit Message Format (Conventional Commits)

We enforce the **Conventional Commits** specification. This allows us to automatically generate changelogs and determine semantic version bumps.

Each commit message must follow the format:

### Required Types:

| Type | Description | Example |
| :--- | :--- | :--- |
| **feat** | A new feature or enhancment (e.g., adding a new API endpoint). | `feat(backend): add product search route` |
| **fix** | A bug fix (e.g., correcting an error). | `fix(frontend): adjust navbar z-index` |
| **refactor** | Code changes that do not fix a bug or add a feature (e.g., renaming a variable). | `refactor(all): clean up unused variables` |
| **docs** | Documentation only changes | `docs: clarify setup instructions` |
| **style** | Formatting, missing semi-colons, whitespaces (no code changes). | `style(frontend): fix indentation` |
| **test** | Adding missing tests or correcting existing tests. | `test(backend): ensure validation fails` |
| **chore** | Routine tasks; maintenance (e.g., updating dependencies). | `chore: update node versions` |

## 3. Pull Request (PR) Guidelines

Your PR is the final step before merging.

1. **Squash and Rebase:** Before opening a PR, ensure your branch is clean and rebased onto `main`. Please **squash** multiple small, noisy commits (like "WIP," "fix typo") into a single, cohesive commit.
2. **Self-Review:** Ensure all tests pass locally and run static analysis (linting) on your changes.
3. **PR Template:** Fill out the standard PR template completely, providing a descriptive title and detailed summary of changes.
4. **CODEOWNERS:** Do not merge your own PR. Reviewers will be automatically assigned based on the file paths you modified (see the `CODEOWNERS` FILE). Wait for **at least one approval** from an assigned reviewer.

## 4. Local Development Tips

To minimize conflicts and ensure tooling is consistent:

* **Activate VENV:** If working on the backend, always activate your virtual environment first:
```bash
source backend/venv/bin/activate or backend\venv\scripts\activate
```
* **Run Scripts from Root:** Always execute orchestration scripts (like testing and linting) from the root directory:
```bash
# Runs all tests in both client and server
npm run test:full
```

<!-- end list -->