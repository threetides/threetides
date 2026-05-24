import { Select } from "@threetides/bekk"
import type { FC } from "react"

export const FontSelect: FC = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Pick a font" className="test" />
      <Select.Content>
        <Select.Item value="sans">Sans-serif</Select.Item>
        <Select.Item value="serif">Serif</Select.Item>
        <Select.Item value="mono">Monospace</Select.Item>
        <Select.Item value="cursive">Cursive</Select.Item>
      </Select.Content>
    </Select.Root>
  )
}
