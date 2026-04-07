# Spec for Authentication Forms

branch: claude/feature/auth-forms  
figma_component (if used): N/A

## Summary

- Add functional login and signup forms to the `/login` and `/signup` pages
- Each form includes email, password, and a submit button
- A toggle icon allows users to show/hide the password field
- On submission, form data is logged to the console (no backend integration yet)
- Each page includes a link to easily switch to the other form

## Functional Requirements

- The login form at `/login` must include:
  - Email input field
  - Password input field with show/hide toggle icon
  - A "Log In" submit button
  - A link to the `/signup` page ("Don't have an account? Sign up")
- The signup form at `/signup` must include:
  - Email input field
  - Password input field with show/hide toggle icon
  - A "Sign Up" submit button
  - A link to the `/login` page ("Already have an account? Log in")
- The password visibility toggle should switch the input type between `password` and `text`
- On form submission, prevent default browser behaviour and log the email and password values to the console
- Both forms should use the existing `.btn` class for submit buttons
- Both forms should use shared form styling consistent with the existing `.form-title` and global styles

## Figma Design Reference (only if referenced)

- N/A

## Possible Edge Cases

- User submits with empty fields — form should not submit (rely on browser native required validation)
- Password visibility state should reset if the user navigates away and returns
- Both pages should remain accessible without authentication guards

## Acceptance Criteria

- Visiting `/login` shows a form with email, password, and a "Log In" button
- Visiting `/signup` shows a form with email, password, and a "Sign Up" button
- Clicking the show/hide icon toggles the password field between masked and plain text
- Submitting either form logs `{ email, password }` to the browser console
- Each form has a visible link to switch to the other form
- Forms are styled consistently with the existing design system

## Open Questions

- Should the password toggle icon use an existing Lucide icon (e.g. `Eye` / `EyeOff`)?
- Should the switch-form link use the existing `.btn` class or a plain text link style?

## Testing Guidelines

Create a test file(s) in the ./tests folder for the new feature, and create meaningful tests for the following cases, without going too heavy:

- Login form renders email input, password input, and submit button
- Signup form renders email input, password input, and submit button
- Password visibility toggles correctly when the icon is clicked
- Each form renders a link pointing to the other form's route
