import TimeLineCard from "./TimeLineCard"
import { WorkHistoryCard } from "@/types"



export default function Timeline(WorkHistoryData: WorkHistoryCard[]) {

  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
      <div className="w-full max-w-fit lg:mx-[max(20vw,12px)]">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent lg:before:via-slate-300 before:to-transparent">
           {WorkHistoryData.map((data: WorkHistoryCard) => (TimeLineCard(crypto.randomUUID(),data)))}
        </div>
      </div>
    </div>
  );
}