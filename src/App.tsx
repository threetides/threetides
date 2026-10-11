import { useEffect, type FC } from "react"
import { Navbar } from "./features/navigation/Navbar"
import { useAtomValue } from "jotai"
import { darkModeAtom } from "./store/state"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { ExternalLink } from "lucide-react"
import multe from "@/assets/multe.svg"

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
        <section className="p-6 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl" id="projects">
              Projects
            </h2>
            <p className="text-muted-foreground text-sm">Some apps, some developer tools.</p>
          </div>
          <div className="grid">
            <a
              href="https://multe.app"
              target="_blank"
              className="group theme-multe flex flex-col gap-4 p-4 border rounded-lg bg-card hover:border-chart-3 transition duration-250 ease-in-out"
            >
              <span className="flex justify-between items-center">
                <img src={multe} alt="Multe logo" />
                <div className="font-light text-xs text-muted-foreground border pb-1 pt-1 pl-2 pr-2 rounded-full [text-box-trim:both] [text-box-edge:cap_alphabetic] text-center">
                  App
                </div>
              </span>
              <span className="flex flex-col gap-2">
                <h3 className="text-2xl">Multe</h3>
                <p className="text-sm text-muted-foreground">
                  Keep track of your collections, from wishlist to owned.
                </p>
              </span>
              <span className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">multe.app</p>
                <ExternalLink className="h-4 text-muted-foreground group-hover:text-chart-3 transition duration-250 ease-in-out" />
              </span>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}