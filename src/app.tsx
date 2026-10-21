import { type FC } from "react"
import { Navbar } from "@/features/navigation/navbar"
import { Separator } from "@/components/ui/separator"
import { Footer } from "@/features/navigation/footer"
import { Projects } from "@/features/projects/projects"
import { Linkedin } from "@/assets/linkedin"
import { Github } from "@/assets/github"
import { Mail } from "@/assets/mail"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export const App: FC = () => {
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
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href="https://github.com/threetides"
                      target="_blank"
                      aria-label="GitHub"
                      className="group"
                    >
                      <Github
                        aria-hidden="true"
                        className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition duration-150 ease-in-out"
                      />
                    </a>
                  }
                />
                <TooltipContent sideOffset={8}>Github</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href="https://www.linkedin.com/in/jonas-lillebø-haugen-6a442222a"
                      target="_blank"
                      aria-label="LinkedIn"
                      className="group"
                    >
                      <Linkedin
                        aria-hidden="true"
                        className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition duration-150 ease-in-out"
                      />
                    </a>
                  }
                />
                <TooltipContent sideOffset={8}>LinkedIn</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a href="mailto:hello@threetides.dev" aria-label="Email" className="group">
                      <Mail
                        aria-hidden="true"
                        className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition duration-150 ease-in-out"
                      />
                    </a>
                  }
                />
                <TooltipContent sideOffset={8}>Email hello@threetides.dev</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
        <Separator />
        <Projects />
        <Separator />
        <section className="flex flex-col gap-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <h2 className="text-2xl">About the name</h2>
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
