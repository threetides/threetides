import type { FC } from "react"
import threetides from "@/assets/threetides.svg"

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

export const Footer: FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-4  p-6 max-w-5xl m-auto min-[425px]:flex-row min-[425px]:items-center min-[425px]:justify-between">
        <div className="flex items-center gap-2">
          <img src={threetides} alt="Threetides favicon" className="h-6" />
          <span>Threetides</span>
        </div>
        <span className="text-sm text-muted-foreground">© {currentYear} Threetides</span>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/threetides"
            target="_blank"
            className="flex items-center text-sm text-muted-foreground"
          >
            Github
          </a>
          <a
            href="mailto:hello@threetides.dev"
            className="flex items-center text-sm text-muted-foreground"
          >
            Mail
          </a>
        </div>
      </div>
    </div>
  )
}