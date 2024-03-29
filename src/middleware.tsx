import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: [
        /*
        * Match all paths except for:
        * 1. /api routes
        * 2. /_next (Next.js internals)
        * 3. /_static (inside /public)
        * 4. all root files inside /public (e.g. /favicon.ico)
        */
        "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
    ],
};


async function HostRouting(req: NextRequest) {

    const url = req.nextUrl;

    // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
    let hostname = req.headers
        .get("host")!
        .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

    // special case for Vercel preview deployment URLs
    if (
        hostname.includes("---") &&
        hostname.endsWith(`.${process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_SUFFIX}`)
    ) {
        hostname = `${hostname.split("---")[0]}.${
        process.env.NEXT_PUBLIC_ROOT_DOMAIN
        }`;
    }

    const searchParams = req.nextUrl.searchParams.toString();
    // Get the pathname of the request (e.g. /, /about, /blog/first-post)
    const path = `${url.pathname}${
        searchParams.length > 0 ? `?${searchParams}` : ""
    }`;

    if ( hostname === "forhire" ) {
        return  NextResponse.rewrite(new URL(`/work`, req.url));
    }


    if ( hostname === "blog" ) {
        return  NextResponse.rewrite(new URL(`/blog`, req.url));
    }
}


export default async function middleware(req: NextRequest) {
    return await HostRouting(req);
} 
