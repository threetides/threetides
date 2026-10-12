import { useEffect, type FC } from "react"
import { Navbar } from "./features/navigation/Navbar"
import { useAtomValue } from "jotai"
import { darkModeAtom } from "./store/state"
import { Separator } from "./components/ui/separator"
import { ExternalLink } from "lucide-react"
import { Footer } from "./features/navigation/Footer"
import { Multe } from "@/assets/Multe"
import { Havelle } from "@/assets/Havelle"
import { Tideauth } from "@/assets/Tideauth"
import { Gonet } from "@/assets/Gonet"
import { Linkedin } from "@/assets/Linkedin"
import { Github } from "@/assets/Github"
import { Mail } from "@/assets/Mail"

export const App: FC = () => {
  const darkMode = useAtomValue(darkModeAtom)

  useEffect(() => {
    if (darkMode === null) {
      delete document.documentElement.dataset.theme
    } else {
      document.documentElement.dataset.theme = darkMode ? "dark" : "light"
    }
  }, [darkMode])

  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-10 mt-10 max-w-5xl m-auto p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold flex flex-col">
              Open-source projects and small obsessions.
              <span className="text-muted-foreground">Lightweight and opinionated.</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Threetides is an independent studio and a home for everything I build, from apps to
              developer tools. Made with love in Norway.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/threetides" target="_blank" className="group">
                <Github
                  aria-label="github icon link"
                  className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition duration-150 ease-in-out"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jonas-lillebø-haugen-6a442222a"
                target="_blank"
                className="group"
              >
                <Linkedin
                  aria-label="linkedin icon link"
                  className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition duration-150 ease-in-out"
                />
              </a>
              <a href="mailto:hello@threetides.dev" className="group">
                <Mail
                  aria-label="mail icon link"
                  className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition duration-150 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
        <Separator />
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl" id="projects">
              Projects
            </h2>
            <p className="text-muted-foreground text-sm">Some apps, some developer tools.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://multe.app"
              target="_blank"
              className="group theme-multe flex flex-col gap-4 p-4 border rounded-lg bg-card hover:border-chart-3 transition duration-300 ease-in-out relative overflow-hidden"
            >
              <div className="bg-[radial-gradient(420px_circle_at_0%_0%,color-mix(in_oklch,var(--chart-3)_14%,transparent),transparent_70%)] absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
              <div className="z-1 flex flex-col gap-4">
                <span className="flex justify-between items-center">
                  <Multe aria-label="Multe logo" />
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
                  <ExternalLink className="h-4 text-muted-foreground group-hover:text-chart-3 transition duration-300 ease-in-out group-hover:-translate-y-1" />
                </span>
              </div>
            </a>

            <a
              href="https://havelle.pages.dev"
              target="_blank"
              className="group theme-havelle flex flex-col gap-4 p-4 border rounded-lg bg-card hover:border-chart-3 transition duration-300 ease-in-out relative overflow-hidden"
            >
              <div className="bg-[radial-gradient(420px_circle_at_0%_0%,color-mix(in_oklch,var(--chart-3)_14%,transparent),transparent_70%)] absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
              <div className="z-1 flex flex-col gap-4">
                <span className="flex justify-between items-center">
                  <Havelle aria-label="Havelle logo" />
                  <div className="font-light text-xs text-muted-foreground border pb-1 pt-1 pl-2 pr-2 rounded-full [text-box-trim:both] [text-box-edge:cap_alphabetic] text-center">
                    App
                  </div>
                </span>
                <span className="flex flex-col gap-2">
                  <h3 className="text-2xl">Havelle</h3>
                  <p className="text-sm text-muted-foreground">
                    A local-first, lightweigh kanban board.
                  </p>
                </span>
                <span className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">havelle.pages.dev</p>
                  <ExternalLink className="h-4 text-muted-foreground group-hover:text-chart-3 transition duration-300 ease-in-out group-hover:-translate-y-1" />
                </span>
              </div>
            </a>

            <a
              href="https://github.com/threetides/tideauth"
              target="_blank"
              className="group theme-tideauth flex flex-col gap-4 p-4 border rounded-lg bg-card hover:border-chart-3 transition duration-300 ease-in-out relative overflow-hidden"
            >
              <div className="bg-[radial-gradient(420px_circle_at_0%_0%,color-mix(in_oklch,var(--chart-3)_14%,transparent),transparent_70%)] absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
              <div className="z-1 flex flex-col gap-4">
                <span className="flex justify-between items-center">
                  <Tideauth aria-label="Tideauth logo" />
                  <div className="font-light text-xs text-muted-foreground border pb-1 pt-1 pl-2 pr-2 rounded-full [text-box-trim:both] [text-box-edge:cap_alphabetic] text-center">
                    Library
                  </div>
                </span>
                <span className="flex flex-col gap-2">
                  <h3 className="text-2xl">TideAuth</h3>
                  <p className="text-sm text-muted-foreground">
                    Session-based authentication you can add to any service.
                  </p>
                </span>
                <span className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">Github</p>
                  <ExternalLink className="h-4 text-muted-foreground group-hover:text-chart-3 transition duration-300 ease-in-out group-hover:-translate-y-1" />
                </span>
              </div>
            </a>

            <a
              href="https://github.com/threetides/gonet"
              target="_blank"
              className="group theme-gonet flex flex-col gap-4 p-4 border rounded-lg bg-card hover:border-chart-3 transition duration-300 ease-in-out relative overflow-hidden"
            >
              <div className="bg-[radial-gradient(420px_circle_at_0%_0%,color-mix(in_oklch,var(--chart-3)_14%,transparent),transparent_70%)] absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
              <div className="z-1 flex flex-col gap-4">
                <span className="flex justify-between items-center">
                  <Gonet aria-label="Gonet logo" />
                  <div className="font-light text-xs text-muted-foreground border pb-1 pt-1 pl-2 pr-2 rounded-full [text-box-trim:both] [text-box-edge:cap_alphabetic] text-center">
                    CLI
                  </div>
                </span>
                <span className="flex flex-col gap-2">
                  <h3 className="text-2xl">Gonet</h3>
                  <p className="text-sm text-muted-foreground">
                    Scaffold a ready-to-run HTTP service with one command.
                  </p>
                </span>
                <span className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">Github</p>
                  <ExternalLink className="h-4 text-muted-foreground group-hover:text-chart-3 transition duration-300 ease-in-out group-hover:-translate-y-1" />
                </span>
              </div>
            </a>
          </div>
        </section>
        <Separator />
        <section id="about-name" className="flex flex-col gap-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <h3 className="text-2xl" id="projects">
              About the name
            </h3>
            <div className="flex flex-col gap-2">
              <i className="text-muted-foreground">
                When the Moon rose in the Third Northern Hall I went to the Ninth Vestibule to
                witness the joining of three Tides.
              </i>
              <p className="text-muted-foreground text-sm font-light">
                Susanna Clarke, <i>Piranesi</i>
              </p>
            </div>
          </div>
        </section>
        <Separator />
      </main>
      <Footer />
    </div>
  )
}