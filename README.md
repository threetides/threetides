# threetides

The home of the threetides studio.

`threetides` is the studio's website, a static site built with
[Astro](https://astro.build).

## Development

threetides uses [Bun](https://bun.sh) as its package manager. Clone the repo,
install dependencies, and start the dev server:

```sh
bun install
bun run dev      # serves the site at http://localhost:4321
```

Other scripts:

```sh
bun run build    # build the production site into dist/
bun run preview  # preview the production build locally
bun run check    # format + lint + type-check
```

## Project structure

```
threetides/
├── public/             static assets (favicons, web manifest)
├── src/
│   ├── pages/          one file per route (index.astro)
│   ├── layouts/        shared page shells (Layout.astro)
│   ├── styles/         global styles (index.css)
│   └── assets/         images and svgs
├── astro.config.mjs
└── package.json
```

## License

See [LICENSE](LICENSE).
