import type { FC } from "react"
import { Threetides } from "@/assets/Threetides"

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

export const Footer: FC = () => {
  return (
    <div>
      <div className="flex gap-4 justify-between p-6 max-w-5xl m-auto">
        <div className="flex items-center gap-2">
          <Threetides aria-label="Threetides favicon" className="h-6 w-6" />
          <span>Threetides</span>
        </div>
        <span className="text-sm text-muted-foreground">© {currentYear} Threetides</span>
      </div>
    </div>
  )
}
