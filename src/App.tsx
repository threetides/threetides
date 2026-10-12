import { useEffect, type FC } from "react"
import { Navbar } from "./features/navigation/Navbar"
import { useAtomValue } from "jotai"
import { darkModeAtom } from "./store/state"
import { Separator } from "./components/ui/separator"
import { ExternalLink } from "lucide-react"
import { Footer } from "./features/navigation/Footer"
import multe from "@/assets/multe.svg"
import havelle from "@/assets/havelle.svg"
import tideauth from "@/assets/tideauth.svg"
import gonet from "@/assets/gonet.svg"

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
                  <img src={havelle} alt="Havelle logo" />
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
                  <img src={tideauth} alt="Tideauth logo" />
                  <div className="font-light text-xs text-muted-foreground border pb-1 pt-1 pl-2 pr-2 rounded-full [text-box-trim:both] [text-box-edge:cap_alphabetic] text-center">
                    Go Library
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
                  <img src={gonet} alt="Gonet logo" />
                  <div className="font-light text-xs text-muted-foreground border pb-1 pt-1 pl-2 pr-2 rounded-full [text-box-trim:both] [text-box-edge:cap_alphabetic] text-center">
                    Command line tool
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
            <div className="flex flex-col gap-8">
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