import { useEffect, type FC } from "react"
import { Navbar } from "./features/navigation/Navbar"
import { useAtomValue } from "jotai"
import { darkModeAtom } from "./store/state"

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
    </div>
  )
}