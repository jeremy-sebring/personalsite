import { NextRequest, NextResponse } from "next/server";

import { APIResponse } from "@/types";
import { createPost, getPosts } from "@/app/data";

import { AuthRequired } from "@/lib/apiauth";



export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: NextRequest) {
  const auth = AuthRequired(request);

  if (auth) {
    return NextResponse.json(auth, { status: 401 });
  }

  const searchParams = request.nextUrl.searchParams;

  if (searchParams.get("limit") && searchParams.get("offset")) {
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");

    

    if (limit && offset && !isNaN(+limit) && !isNaN(+offset)) {
      const posts = await getPosts(+limit, +offset);

      const data: APIResponse = {
        status: "success",
        data: posts,
      };

      return NextResponse.json(data);
    } else {
      return NextResponse.json("Invalid parameters", { status: 400 });
    }
  } else if  (searchParams.get("limit") || searchParams.get("offset")) {
    return NextResponse.json("Invalid parameters", { status: 400 });
  } else {
    const posts = await getPosts();

    const data: APIResponse = {
      status: "success",
      data: posts,
    };

    return NextResponse.json(data);
  }
}


export async function POST(request: NextRequest) {
  const auth = AuthRequired(request);

  if (auth) {
    return NextResponse.json(auth, { status: 401 });
  }

  if (request.body) {
    const data = await request.json();

    if (data.title && data.slug && data.markdown && data.description) {
      const newPost = await createPost(data);

      const response: APIResponse = {
        status: "success",
        data: newPost,
      };

      return NextResponse.json(response);
    } else {
      return NextResponse.json("Invalid parameters", { status: 400 });
    }
  }
}