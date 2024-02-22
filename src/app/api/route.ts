import { APIResponse } from "@/types"

import { getLogger } from "@/lib/logger"


const logger = getLogger("dev");

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {

     const data: APIResponse = {
            status: "success",
            data: {test: "Hello, World!"}
     }
     
      return Response.json(data)
}

