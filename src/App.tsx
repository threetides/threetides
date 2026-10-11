import { useEffect, type FC } from "react"
import { Navbar } from "./features/navigation/Navbar"
import { useAtomValue } from "jotai"
import { darkModeAtom } from "./store/state"
import { Button } from "./components/ui/button"

export const App: FC = () => {
  const darkMode = useAtomValue(darkModeAtom)

  useEffect(() => {
    const html = document.querySelector("html")
    if (darkMode) {
      html?.classList.add("dark")
    } else {
      html?.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div>
      <Navbar />
      <main className="p-6 mt-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold flex flex-col">
            Open-source projects and small obsessions.
            <span className="text-muted-foreground">Lightweight and opinionated.</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Threetides is an independent studio and a home for everything I build, from apps to
            developer tools. Made with love in Norway.
          </p>
          <div className="flex">
            <Button className="flex-1" size="lg">
              See the projects
            </Button>
            <Button variant="link" className="flex-1" size="lg">
              About the name
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}