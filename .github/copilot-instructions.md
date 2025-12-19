<!-- Copilot instructions tailored for the DevFinder React project -->
# Copilot instructions — DevFinder (devfinder-react)

Purpose: Give AI coding agents the essential, discoverable knowledge to be productive in this repository.

- **Project type:** Single-page React app powered by Vite. See [devfinder-react/package.json](devfinder-react/package.json#L1) and [devfinder-react/vite.config.js](devfinder-react/vite.config.js#L1).
- **Start / build commands:** Use the `devfinder-react` package.json in the subfolder:

```bash
cd devfinder-react
npm install
npm run dev    # runs vite dev server
npm run build  # production build
npm run preview
npm run lint
```

- **JS/Framework details:** React 19 functional components and hooks (`useState`) are used (example: [devfinder-react/src/App.jsx](devfinder-react/src/App.jsx#L1-L220)). Prefer small, focused changes that follow the existing functional style.

- **Key patterns & files to inspect:**
  - `devfinder-react/src/App.jsx` — main UI, local state, and the `fetchUser` GitHub API call (handles empty input and non-200 responses).
  - `devfinder-react/src/App.css` — styling for the single page.
  - `devfinder-react/public/` and `devfinder-react/src/assets/` — static assets served by Vite.
  - `devfinder-react/vite.config.js` — Vite + React plugin; HMR is enabled by default.

- **Network / external integrations:** The app queries the GitHub public API at `https://api.github.com/users/:username` from the browser (see `fetchUser` in `src/App.jsx`). Keep that in mind for CORS, rate-limiting, and mocked tests.

- **Conventions & small-but-important details:**
  - The app uses plain JavaScript (ES modules) and not TypeScript. Add types only if converting the whole codebase.
  - Error handling is minimal and uses `alert()` in the UI; when expanding, keep UX consistent and avoid adding heavy libraries.
  - SVG icons are embedded as path strings in `src/App.jsx` (top of the file) — reuse that pattern for small icons rather than adding an icon library.

- **When editing components:**
  - Keep components small and pure; prefer local `useState` where present.
  - For visual changes, update `src/App.css` alongside `src/App.jsx` to keep markup and styles in sync.

- **Testing & CI:** No test runner is present. Avoid creating tests that require heavy infra unless requested.

- **Linting:** ESLint is configured in the template (see `devfinder-react/eslint.config.js`); run `npm run lint` before proposing style changes.

- **Example change requests we can fulfill quickly:**
  - Replace `alert()` messages with inline error UI in `src/App.jsx` and `src/App.css`.
  - Add a small loading state around the `fetchUser` call.
  - Extract SVG icons into a small helper module under `src/` if multiple components need them.

- **What not to do automatically:**
  - Do not introduce TypeScript or a test runner without confirming scope.
  - Do not change project structure (move files between root and `devfinder-react`) — the runnable project lives in the `devfinder-react` folder.

If anything above is unclear or you want more examples (component extraction, adding loading UI, or test scaffolding), tell me which area to expand and I will update this file.
