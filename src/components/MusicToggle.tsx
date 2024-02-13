
'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import { FunctionComponent } from "react";

const MusicToggle: FunctionComponent = () => {


  return (
      <h3 className="flex flex-row">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>### Background Music?</AccordionTrigger>
                <AccordionContent>
                <audio controls autoPlay>
                    <source src="https://storage.googleapis.com/music-sebring-dev/Dolly%20Parton%209%20To%205.mp3" type="audio/mpeg"/>
                    <p>?Your browser does not support the this element. sorry :(</p>
                </audio>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
    </h3>
    );
  }


export default MusicToggle;
