import { atomWithStorage } from "jotai/utils"

export const darkModeAtom = atomWithStorage<boolean>("darkMode", true, undefined, {
  getOnInit: true
})