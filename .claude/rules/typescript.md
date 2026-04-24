---
globs:
  - "src/**/*.ts"
  - "src/**/*.tsx"
---

- Use named exports only — no default exports.
- No `console.log` in production code.
- Strict TypeScript — do not use `any` or suppress type errors with `@ts-ignore`.
