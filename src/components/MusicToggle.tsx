
'use client'

import * as React from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"




interface MusicToggleProps {
  className?: string;
}

export default function MusicToggle(props: MusicToggleProps) {

const [isOpen, setIsOpen] = React.useState(false)
 
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={props.className ? props.className : ""}
    >
      <CollapsibleTrigger>
          <h3 className="hover:underline">
            ## Background music?
            </h3>
        </CollapsibleTrigger>
      <CollapsibleContent className="flex items-center justify-center">
        <audio controls autoPlay loop className="w-1/2">
          <source src="https://storage.googleapis.com/music-sebring-dev/Dolly%20Parton%209%20To%205.mp3" type="audio/mpeg"/>
          <p>?Your browser does not support the this element. sorry :(</p>
        </audio>
      </CollapsibleContent>
    </Collapsible>
  )
}
