import Timeline from "@/components/Timeline";
import MusicToggle from "@/components/MusicToggle";


import { WorkHistoryCard }from "@/app/types";

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from "url";

const file = pathToFileURL(path.resolve('./public/work_history.json'))

const WorkHistoryJSON = JSON.parse(
    fs.readFileSync(file, "utf8")) as WorkHistoryCard[]




export default function work() {
  return (
    <div>
        <div className="flex  justify-evenly">
            <div className="pl-16 scroll-m-20 text-2xl tracking-tight lg:text-2xl">
                <h1># Work Experience</h1>
            </div>
            <MusicToggle/>
        </div>
       
        {Timeline(WorkHistoryJSON)}

    </div>
  )
}
