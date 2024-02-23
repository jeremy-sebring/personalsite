
import  { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "@/types"





export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: NextRequest) {

     const data: APIResponse = {
            status: "success",
            data: {test: "Hello, World!"}
     }
     
      return NextResponse.json(data)
}

