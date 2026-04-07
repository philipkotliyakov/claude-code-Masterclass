# Plan: Authentication Forms

## Context

The `/login` and `/signup` pages are currently stubs — they show a title but have no form elements. This plan implements functional login and signup forms per the spec at `_specs/auth-forms.md`. Forms log to the console on submit (no backend yet). A shared `AuthForm` component handles both modes to keep the two pages DRY and make switching between them straightforward.

---

## Approach

### 1. Create `AuthForm` component

**Files to create:**

- `components/AuthForm/AuthForm.tsx`
- `components/AuthForm/AuthForm.module.css`
- `components/AuthForm/index.ts`

The component accepts a single prop: `mode: "login" | "signup"`.

It renders:

- An email `<input>` (type `email`, required)
- A password `<input>` (type `password` or `text`, toggled by state)
- A password visibility toggle button using `Eye` / `EyeOff` icons from `lucide-react` (already installed)
- A submit button using the global `.btn` class — label is "Log In" or "Sign Up" depending on `mode`
- A switch link: login shows "Don't have an account? Sign up" → `/signup`, and signup shows "Already have an account? Log in" → `/login`

The component must be a **client component** (`"use client"`) because it needs:

- `useState` for password visibility toggle
- `onSubmit` handler that calls `e.preventDefault()` and `console.log({ email, password })`

Inputs are controlled via `useState` for `email` and `password`.

### 2. Update `/login` and `/signup` pages

**Files to modify:**

- `app/(public)/login/page.tsx`
- `app/(public)/signup/page.tsx`

Both pages already use `.center-content` and `.page-content` wrappers. Replace the stub heading with `<AuthForm mode="login" />` and `<AuthForm mode="signup" />` respectively. The `form-title` heading moves inside the `AuthForm` component.

### 3. Write tests

**File to create:** `tests/components/AuthForm.test.tsx`

Tests (following the existing Vitest + Testing Library pattern):

- Login form renders email input, password input, and "Log In" button
- Signup form renders email input, password input, and "Sign Up" button
- Password field is masked by default; clicking the toggle shows it
- Login form renders a link to `/signup`
- Signup form renders a link to `/login`

---

## Files Summary

| Action | File                                      |
| ------ | ----------------------------------------- |
| Create | `components/AuthForm/AuthForm.tsx`        |
| Create | `components/AuthForm/AuthForm.module.css` |
| Create | `components/AuthForm/index.ts`            |
| Create | `tests/components/AuthForm.test.tsx`      |
| Modify | `app/(public)/login/page.tsx`             |
| Modify | `app/(public)/signup/page.tsx`            |

**Reuse:**

- Global `.btn` class from `app/globals.css` for the submit button
- Global `.form-title`, `.center-content`, `.page-content` already in place on the pages
- `Eye` / `EyeOff` from `lucide-react` (already a dependency)
- CSS module `@reference "../../app/globals.css"` pattern (same as Navbar, Avatar)

---

## Verification

1. `npm run dev` → visit `/login` and `/signup` — both show a functional form
2. Fill in email + password and submit — `{ email, password }` appears in the browser console
3. Click the eye icon — password field toggles between masked and visible
4. Click the switch link on each form — navigates to the other form's page
5. Submit with empty fields — browser native validation prevents submission
6. `npx vitest run tests/components/AuthForm.test.tsx` — all tests pass
