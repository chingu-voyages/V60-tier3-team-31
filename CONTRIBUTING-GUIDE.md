# Contributing Guide

This document defines the workflow and collaboration rules for the project.

---

## 🔀 Git Workflow

We follow a feature-branch workflow:

1. Create a branch from `main`
2. Implement your changes
3. Push your branch
4. Open a Pull Request (PR)

🚫 Do NOT push directly to `main`

---

## 🌿 Branch Naming Convention

Use descriptive names:

```
feature/application-core
feature/application-list
fix/form-validation
refactor/application-service
```

---

## 📝 Commit Message Standards

Format:

```
type: short description
```

### Types

* feat → new feature
* fix → bug fix
* refactor → code improvement
* style → formatting only
* docs → documentation updates
* test → test-related changes

### Examples

```
feat: add application form
fix: correct form validation
refactor: extract service layer
```

🚫 Avoid vague messages:

```
update
changes
fix stuff
```

---

## 🔍 Pull Request Guidelines

Before submitting a PR:

* Ensure the app runs correctly
* Resolve all linting issues
* Keep PRs small and focused

### PR must include:

* Clear title
* Description of changes
* Screenshots (if UI changes)
* Related issue (if applicable)

---

## 🔒 Branch Protection Rules (main)

* No direct pushes to `main`
* Pull Request required for merging
* At least 1 approval before merge

---

## 🚀 Deployment

* Production branch: `main`
* Deployment platform: Vercel (recommended)

---

## 🐛 Issue Tracking

* Assign yourself before starting work
* Break large tasks into smaller issues
* Clearly describe bugs and features

---

## 💬 Communication

* Keep communication clear and concise
* Ask for help early if blocked
* Share progress updates regularly

Example:

```
Working on application form. PR coming today.
```

---

## ⚠️ Final Rule

Collaboration and consistency are more important than individual preference.
