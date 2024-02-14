'use client'
import * as React from "react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"


import ToggleTheme from "./Commands/ToggleTheme"



export default function Commander() {
  const [open, setOpen] = React.useState(false)

  const [isMounted, setMounted] = React.useState(false)

  var cmd = "ctrl/cmd"

  React.useEffect(() => {
    
    setMounted(true)
    const down = (e: KeyboardEvent) => {
      if (e.key === "p" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])


  if (isMounted) {
    cmd = navigator.userAgent.includes('Mac')? "⌘" : "ctrl"
  }

  return (
    <>
      <p className="text-sm text-muted-foreground" onClick={() => setOpen(true)}>
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">{cmd}</span>{" + "}shift{" + "}P
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {/* <CommandGroup heading="Suggestions">
          </CommandGroup> */}
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <ToggleTheme />
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
