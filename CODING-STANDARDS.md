# Coding Standards

This document defines coding conventions and architecture rules for this project.

---

## 🧠 General Principles

- Write readable, maintainable code
- Follow existing patterns in the codebase
- Keep components small and focused
- Prefer simplicity over complexity

If unsure, follow React docs and MDN.

---

## 📁 Project Structure

```
src/
  components/
  pages/
  hooks/
  services/
  utils/
  constants/
  context/
  assets/
```

### Responsibilities

- components → UI only
- pages → route-level composition
- hooks → state + logic orchestration
- services → data persistence (localStorage)
- utils → pure helper functions
- constants → static values

---

## 📤 Imports & Exports

Prefer named exports:

```js
export function JobCard() {}
```

Avoid default exports unless agreed.

---

## ⚙️ Component Rules

Use function declarations for React components and named utilities, and arrow functions for local callbacks/handlers; keep all UI logic inside components only.

function JobCard({ job }) {
const handleSave = () => {
alert(`Saved: ${job.title}`);
};

return (
<div>
<h2>{job.title}</h2>
<button onClick={handleSave}>Save</button>
</div>
);
}

---

## 🪝 Hooks Rules

- Only call hooks at top level
- Only use hooks inside components or custom hooks
- Custom hooks must start with `use`

```js
function useApplications() {}
```

---

## 💾 Data Architecture

All data flow must follow:

```
Component → Hook → Service → Storage
```

### Rules:

- Components must NOT access localStorage directly
- Services handle all persistence logic
- Hooks manage state + business logic

---

## 🧮 Utils

- Pure functions only
- No React logic inside utils

Example:

```
utils/calculateMetrics.js
```

---

## 🏷 Naming Conventions

| Type      | Rule         | Example             |
| --------- | ------------ | ------------------- |
| Component | PascalCase   | ApplicationCard     |
| Function  | camelCase    | handleSubmit        |
| Hook      | useSomething | useApplications     |
| Constant  | UPPER_SNAKE  | STATUS_OPTIONS      |
| File      | match export | ApplicationCard.jsx |

---

## 🎨 Styling

- Use one system only (Tailwind OR CSS Modules)
- Avoid mixing approaches
- No inline styles unless necessary

---

## 📊 State Management

- useState → local UI state
- useReducer → complex state logic
- Context → shared state only when needed

---

## 🚀 Feature Rules

### MVP

- CRUD applications
- Status updates
- Filtering
- Dashboard metrics
- Local storage persistence

---

## ⚠️ Final Rule

Consistency across the codebase is more important than personal preference.
