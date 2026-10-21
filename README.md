# Threetides

The website for Threetides, an independent studio and a home for open-source projects, from apps to developer tools.

## Stack

- React 19 with the React Compiler
- TypeScript
- Tailwind CSS v4
- shadcn/ui on Base UI
- [Vite+](https://viteplus.dev) and pnpm

## Getting started

```sh
vp install
vp dev
```

## Commands

| Command      | Description                  |
| ------------ | ---------------------------- |
| `vp dev`     | Start the dev server         |
| `vp build`   | Build for production         |
| `vp preview` | Preview the production build |
| `vp lint`    | Lint the project             |

## Adding a project

Add an entry to the `projects` array in `src/features/projects/projects.tsx`, with a logo in `src/assets/` and a `theme-*` class in `src/index.css`.
