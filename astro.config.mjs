// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      noExternal: ["@threetides/bekk"]
    },
    css: {
      // Bekk publishes per-component CSS as `*.module.css`, but the class
      // names are already hashed at publish time and its JS references them as
      // literal strings. If Vite handles them as CSS modules, the emitted CSS
      // gets tree-shaken (the JS export goes unused) and styles never reach
      // the page. We have no CSS modules of our own, so disable globally.
      modules: false
    }
  },

  integrations: [react()]
})
