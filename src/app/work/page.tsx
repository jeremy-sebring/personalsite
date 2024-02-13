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
        <div className="flex  flex-wrap justify-evenly content-center">
            <h2># Work Experience</h2>
            <MusicToggle/>
        </div>
       
        {Timeline(WorkHistoryJSON)}

    </div>
  )
}
