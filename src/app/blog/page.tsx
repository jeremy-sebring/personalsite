
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { getPosts } from "../data";

import Link from "next/link";
import { Suspense } from "react";
  
async function ReadyPosts() {
    const posts = await getPosts();
    return (
      <div className="w-2/3 mx-10 grid grid-cols-3 gap-3 ">
        {posts.map((post) => (
          <Card className="" key={post.id}>
            <CardHeader>
              <CardTitle><Link href={`/blog/${post.slug}`}>{post.title}</Link></CardTitle>
            </CardHeader>
            <CardContent>
                {post.description}
            </CardContent>
            <CardFooter>
              <p className="text-slate-400 text-sm"> Updated @ {post.updated_at.toString()}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
}  

export default function Blog() {

    return (
        <div className="container">
            <h1>Blog</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <ReadyPosts />
            </Suspense>
        </div>
    )
}
