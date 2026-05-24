import { Button, Dialog } from "@threetides/bekk"
import type { FC } from "react"

export const DeleteProjectDialog: FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Open dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Delete project?</Dialog.Title>
        <Dialog.Description>
          This permanently deletes the project and all its data. You can't undo this.
        </Dialog.Description>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
          <Dialog.Close>
            <Button variant="ghost">Cancel</Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Delete project</Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
