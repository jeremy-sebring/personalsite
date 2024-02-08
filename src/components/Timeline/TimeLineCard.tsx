import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import  Briefcase  from '../../../public/briefcase.svg'


import { WorkHistoryCard } from "@/app/types";


export default function TimeLineCard(key: string, data: WorkHistoryCard) {
  return (
    <div key={key} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      {/** Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 hover:bg-emerald-800 group-[.is-active]:text-emerald-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
       <Image src={Briefcase} alt="briefcase" width={20} height={20} />
      </div>
      {/** Card */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 shadow">
        <Card>
          <CardHeader>
            <CardTitle>{data.Title}</CardTitle>
            <CardDescription>@{data.Company}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              {data.Achievements.map((achievement, index) => (
                <li key={index}>{achievement.text+"\lb"}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      </div>
  );
}


