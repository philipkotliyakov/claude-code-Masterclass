# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run test     # Run all tests (Vitest, watch mode)
```

Run a single test file:
```bash
npx vitest run tests/components/Navbar.test.tsx
```

Run tests once (no watch):
```bash
npx vitest run
```

## Architecture

This is a **Next.js App Router** project using **route groups** to separate authenticated and unauthenticated experiences:

- `app/(public)/` — Unauthenticated pages (landing, login, signup, preview). Has its own layout.
- `app/(dashboard)/` — Authenticated pages (heists). Has its own layout that wraps content with the Navbar.

Route groups use parentheses and do **not** affect the URL path — e.g. `app/(public)/login/page.tsx` serves `/login`.

### Key conventions

- **Components** live in `components/<Name>/` with an `index.ts` barrel export and optional `.module.css` for scoped styles.
- **Path alias** `@/` maps to the project root (configured in `tsconfig.json`).
- **Styling** uses Tailwind CSS v4 with theme tokens defined in `app/globals.css` under `@theme`. Use the token names (`text-primary`, `bg-dark`, etc.) rather than raw hex values. Global utility classes (`.page-content`, `.center-content`, `.form-title`) are also defined there.
- **Tests** live in `tests/` mirroring the source structure. The test environment is jsdom with `globals: true`, so no explicit imports of `describe`/`it`/`expect` are needed (though explicit imports are used in existing tests — follow that pattern).


### Additional Coding Preferences

- Do NOT use semicolons for JavaScript of Typescript code.
- Do NOT apply tailwind classes directly in component templates unless essential or just 1 at most. if an element needs more than a single tailwind class, combine them into a custom class using `@apply` directive.
- Use minimal project dependencies where possible.
- Use the `git switch -c` command to switch to new branhes, not `git checkout`. 
