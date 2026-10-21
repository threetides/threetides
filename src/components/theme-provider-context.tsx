import type { Theme } from "@/components/theme-provider"
import { createContext } from "react"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)
