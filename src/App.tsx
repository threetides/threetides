import { useEffect, type FC } from "react"
import { Navbar } from "./features/navigation/Navbar"
import { useAtomValue } from "jotai"
import { darkModeAtom } from "./store/state"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"

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
      <main className="flex flex-col gap-10 mt-10 max-w-5xl m-auto">
        <div className="flex flex-col gap-8 p-6">
          <h1 className="text-4xl font-bold flex flex-col">
            Open-source projects and small obsessions.
            <span className="text-muted-foreground">Lightweight and opinionated.</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Threetides is an independent studio and a home for everything I build, from apps to
            developer tools. Made with love in Norway.
          </p>
          <div className="grid w-fit grid-flow-col auto-cols-fr gap-2">
            <Button size="lg" render={<a href="#projects">See the projects</a>} />
            <Button variant="link" size="lg">
              About the name
            </Button>
          </div>
        </div>
        <Separator />
        <section className="p-6">
          <h2 className="text-3xl" id="projects">
            Projects
          </h2>
        </section>
      </main>
    </div>
  )
}