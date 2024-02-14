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
        <div className="flex flex-wrap">
            <h2 className="text-center basis-1/2">## Work Experience</h2>
            <MusicToggle className="z-50 content-center items-center text-center basis-1/2 prose-lg"/>
        </div>
       
        {Timeline(WorkHistoryJSON)}

    </div>
  )
}
