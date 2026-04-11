# Project Standards (Job Application Tracker)

This document combines the **Contributing Guide** and **Coding Standards** for the project.

---

# 📘 CONTRIBUTING GUIDE

## 📌 Overview

This guide defines workflow and collaboration rules for the project.

---

## 🔀 Git Workflow

We follow a feature-branch workflow:

1. Create a branch from `main`
2. Implement changes
3. Push branch
4. Open a Pull Request (PR)

🚫 Never push directly to `main`

---

## 🌿 Branch Naming

Use descriptive names:

```
feature/login-form
feature/job-tracker-ui
fix/navbar-alignment
refactor/application-service
```

---

## 📝 Commit Standards

Format:

```
type: short description
```

### Types

- feat → new feature
- fix → bug fix
- refactor → code improvement (no feature change)
- style → formatting only
- docs → documentation changes
- test → testing changes

### Examples

```
feat: add application form
fix: correct navbar alignment
refactor: extract service layer logic
```

🚫 Avoid vague commits:

```
update
fix stuff
changes
```

---

## 🔍 Pull Requests

Before submitting:

- Code must run successfully
- No lint errors
- Keep PRs small and focused

### Must include:

- Clear title
- Description of changes
- Screenshots (UI changes if applicable)
- Related issue (if any)

---

## 🐛 Issue Tracking

- Assign yourself before starting work
- Break large tasks into smaller issues
- Clearly describe bugs/features

---

## 💬 Communication

- Keep messages clear and direct
- Ask early if blocked
- Share progress updates regularly

Example:

```
Working on application form. PR today.
```

---

## ✅ Final Rule

Collaboration > individual preference
