import { NextRequest, NextResponse } from "next/server";

import { APIResponse } from "@/types";
import { getPost } from "@/app/data";

import { AuthRequired } from "@/lib/apiauth";


export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const auth = AuthRequired(request);

  if (auth) {
    return NextResponse.json(auth, { status: 401 });
  }

  const slug = params.slug;
  if (!slug) {
    return Response.json("Not found", { status: 404 });
  }

  const post = await getPost(slug);
  if (post) {
    const data: APIResponse = {
      status: "success",
      data: post,
    };
    return NextResponse.json(data);
  } else {
    return NextResponse.json("Not found", { status: 404 });
  }
}
