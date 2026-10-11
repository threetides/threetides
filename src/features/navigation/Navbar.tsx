import type { FC } from "react"
import favicon from "/favicon.svg"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useAtom } from "jotai"
import { darkModeAtom } from "@/store/state"

export const Navbar: FC = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  return (
    <nav className="border-b border-sidebar">
      <div className="flex items-center p-6 justify-between max-w-5xl m-auto">
        <div className="flex items-center gap-2">
          <img src={favicon} alt="Threetides favicon" className="h-8" />
          <span className="text-xl">Threetides</span>
        </div>
        <Button variant="outline" size="icon" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </div>
    </nav>
  )
}