import { getPosts } from "../data";

import { HoverEffect } from "@/components/motion/card-hover-effect";

import { Suspense } from "react";
async function ReadyPosts() {
    const posts = await getPosts();

    return (
      <div className="max-w-6xl mx-auto">
        <HoverEffect items={posts} />
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
