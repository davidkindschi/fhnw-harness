---
globs:
  - "src/**/*.test.ts"
  - "src/**/*.test.tsx"
---

- Tests live next to source files (`foo.test.ts` beside `foo.ts`).
- Use Vitest (`describe`, `it`, `expect`) — do not import from Jest.
- Never skip tests with `.skip` or `.todo` without a comment explaining why.
