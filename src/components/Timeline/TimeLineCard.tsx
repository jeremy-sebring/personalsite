import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";

import Image from "next/image";
import Briefcase from "../../../public/briefcase.svg";

import { WorkHistoryCard } from "@/app/types";

function getFeaturedAchievement(data: WorkHistoryCard) {
  let featuredAchievement: string | undefined = undefined;
  for (let j = 0; j < data.Achievements.length; j++) {
    if (data.Achievements[j].isFeatured) {
      featuredAchievement = data.Achievements[j].text;
      break;
    }
  }
  return featuredAchievement;
}

function getAchievements(data: WorkHistoryCard) {
  return (
    <CardFooter>
      <Sheet>
        <SheetTrigger className="hover:underline">Learn more?</SheetTrigger>
        <SheetContent className="w-1/4">
          <ScrollArea className="h-full w-full">
            <SheetHeader>
              <SheetTitle>## {data.Title}</SheetTitle>
              <SheetDescription className="text-left">
                <div className="pb-4">
                  <p className="">@{data.Company}</p>
                  <p>
                    {data.StartDate} - {data.EndDate}
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="">### What is {data.Company}?</h3>
                  <p>{data.CompanyDescription}</p>
                </div>
                <div className="pb-4">
                  <h3 className="">### Summary</h3>
                  <p>{data.Summary}</p>
                </div>

                <div>
                  <h3 className="">### Achievements</h3>
                  <ul>
                    {data.Achievements.map((achievement, index) => (
                      <li key={index} className="pb-2">
                        {achievement.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetDescription>
            </SheetHeader>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </CardFooter>
  );
}

export default function TimeLineCard(key: string, data: WorkHistoryCard) {
  const achievementsExist = data.Achievements.length > 0;

  return (
    <div
      key={key}
      className="flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active"
    >
      {/** Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 hover:bg-emerald-800 group-[.is-active]:text-emerald-500 shrink-0 md:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2 max-lg:hidden">
        <Image src={Briefcase} alt="briefcase" width={20} height={20} />
      </div>
      {/** Card */}
      <div className="lg:w-[calc(50%-2.5rem)] p-4">
        <Card className="drop-shadow-lg shadow shadow-emerald-400 border-emerald-400">
          <CardHeader>
            <CardTitle>{data.Title}</CardTitle>
            <CardDescription>@{data.Company}</CardDescription>
            <CardDescription>
              {data.StartDate} - {data.EndDate}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{achievementsExist ? getFeaturedAchievement(data) : ""}</p>
          </CardContent>
          {achievementsExist ? getAchievements(data) : ""}
        </Card>
      </div>
    </div>
  );
}
