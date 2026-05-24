// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["@threetides/bekk"]
    },
    css: {
      modules: {
        generateScopedName: (name, filename) =>
          filename.includes("@threetides/bekk") ? name : `${name}_[hash:base64:5]`
      }
    }
  },

  integrations: [react()]
})
