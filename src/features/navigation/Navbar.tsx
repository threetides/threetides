import { useState, type FC } from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { Threetides } from "@/assets/Threetides"
import { useTheme, type Theme } from "@/components/theme-provider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export const Navbar: FC = () => {
  const { theme, setTheme } = useTheme()
  const [value, setValue] = useState([theme])

  const handleChange = (theme: string | undefined) => {
    if (theme) {
      setValue([theme as Theme])
      setTheme(theme as Theme)
    }
  }

  return (
    <nav className="border-b border-sidebar">
      <div className="flex items-center p-6 justify-between max-w-5xl m-auto">
        <div className="flex items-center gap-2">
          <Threetides className="h-8 w-8" />
          <span className="text-xl">Threetides</span>
        </div>
        <ToggleGroup
          variant="outline"
          value={value}
          onValueChange={(theme) => handleChange(theme[0])}
        >
          <Tooltip>
            <TooltipTrigger
              render={
                <ToggleGroupItem value="light" aria-label="Toggle light">
                  <Sun />
                </ToggleGroupItem>
              }
            />
            <TooltipContent>Light mode</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToggleGroupItem value="dark" aria-label="Toggle dark">
                  <Moon />
                </ToggleGroupItem>
              }
            />
            <TooltipContent>Dark mode</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToggleGroupItem value="system" aria-label="Match system">
                  <Monitor />
                </ToggleGroupItem>
              }
            />
            <TooltipContent>Match system</TooltipContent>
          </Tooltip>
        </ToggleGroup>
      </div>
    </nav>
  )
}