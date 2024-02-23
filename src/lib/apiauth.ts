import { NextRequest } from "next/server";
import  { APIResponse } from "@/types";
import { getLogger } from "@/lib/logger";

const logger = getLogger("api-auth");


export function AuthRequired(req: NextRequest) {

    const headers =  new Headers(req.headers)

    logger.info("Headers: ", headers)

    if (headers.get("API-Key") !== process.env.API_KEY) {
        const data: APIResponse = {
            status: "KEEP OUT!",
            data: null
        }
        logger.info("Key Invalid")
        return data
    }
    else{
        return null
    }
}
