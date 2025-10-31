# 🚀 Nx Monorepo Angular Workspace

This project is a scalable Nx monorepo setup using Angular, designed for enterprise-grade frontend architecture.

## 📦 Structure Overview

- `apps/shell`: Main shell app with routing to feature apps
- `apps/request`: Feature app that dispatches shared NgRx actions
- `apps/workorder`: Feature app that listens to shared NgRx actions
- `libs/common-services`: Shared NgRx logic (actions, reducer, effects)
- `libs/common-components`: Shared UI components (e.g., reusable button)

## ⚙️ Functionality

- The shell app lazily loads `request` and `workorder` via Angular routing.
- `common-services` provides centralized NgRx state management.
- `request` dispatches an action (`triggerSharedEvent`) handled by effects in both apps.
- `workorder` listens to shared state updates using selectors.
- `common-components` includes a reusable button used across apps.

## 🧱 Setup Instructions

```bash
npx create-nx-workspace@latest nx-monorepo-angular --preset=apps
nx generate @nx/angular:application shell --routing --style=scss
nx generate @nx/angular:application request --routing --style=scss
nx generate @nx/angular:application workorder --routing --style=scss
nx generate @nx/angular:library common-services --prefix=app --style=scss
nx generate @nx/angular:library common-components --prefix=app --style=scss
nx generate component button --project=common-components
```
