import type { FC, SVGProps } from "react"
import { ExternalLink } from "lucide-react"
import { Gonet } from "@/assets/gonet"
import { Havelle } from "@/assets/havelle"
import { Multe } from "@/assets/multe"
import { Tideauth } from "@/assets/tideauth"

type Project = {
  name: string
  description: string
  kind: "App" | "Library" | "CLI"
  href: string
  hrefLabel: string
  themeClass: string
  Logo: FC<SVGProps<SVGSVGElement>>
}

const projects: Project[] = [
  {
    name: "Multe",
    description: "Keep track of your collections, from wishlist to owned.",
    kind: "App",
    href: "https://multe.app",
    hrefLabel: "multe.app",
    themeClass: "theme-multe",
    Logo: Multe
  },
  {
    name: "Havelle",
    description: "A local-first, lightweight kanban board.",
    kind: "App",
    href: "https://havelle.pages.dev",
    hrefLabel: "havelle.pages.dev",
    themeClass: "theme-havelle",
    Logo: Havelle
  },
  {
    name: "TideAuth",
    description: "Session-based authentication you can add to any service.",
    kind: "Library",
    href: "https://github.com/threetides/tideauth",
    hrefLabel: "Github",
    themeClass: "theme-tideauth",
    Logo: Tideauth
  },
  {
    name: "Gonet",
    description: "Scaffold a ready-to-run HTTP service with one command.",
    kind: "CLI",
    href: "https://github.com/threetides/gonet",
    hrefLabel: "Github",
    themeClass: "theme-gonet",
    Logo: Gonet
  }
]

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const { name, description, kind, href, hrefLabel, themeClass, Logo } = project

  return (
    <a
      href={href}
      target="_blank"
      aria-label={`${name}: ${description}`}
      className={`group ${themeClass} flex flex-col gap-4 p-4 border rounded-lg bg-card hover:border-chart-3 transition duration-300 ease-in-out relative overflow-hidden`}
    >
      <div className="bg-[radial-gradient(420px_circle_at_0%_0%,color-mix(in_oklch,var(--chart-3)_14%,transparent),transparent_70%)] absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
      <div className="z-1 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Logo aria-hidden="true" />
          <div className="font-light text-xs text-muted-foreground border pb-1 pt-1 pl-2 pr-2 rounded-full [text-box-trim:both] [text-box-edge:cap_alphabetic] text-center">
            {kind}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-muted-foreground">{hrefLabel}</p>
          <ExternalLink
            aria-hidden="true"
            className="h-4 text-muted-foreground group-hover:text-chart-3 transition duration-300 ease-in-out group-hover:-translate-y-1"
          />
        </div>
      </div>
    </a>
  )
}

export const Projects: FC = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl">Projects</h2>
        <p className="text-muted-foreground text-sm">Some apps, some developer tools.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
