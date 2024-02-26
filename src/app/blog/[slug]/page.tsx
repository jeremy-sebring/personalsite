import { getPost, getPosts } from "@/app/data";
import { PostProps } from "@/types";
import { compileMDX } from "next-mdx-remote/rsc";

import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }))
}



async function ShowPost(slug: string) {
  const post = await getPost(slug);
  
  if (!post) {
    return (
      <div>
        <p>Post not found</p>
      </div>
    );
  } else {
    const { content } = await compileMDX({
      source: post.markdown,
    });
    return (
      <div className="container mx-auto my-10">
        <h2>{post.title}</h2>
        {content}
      </div>
    );
  }

}

export default async function Post(postProps: PostProps) {

return (
  <Suspense fallback={<div>Loading...</div>}>
    {await ShowPost(postProps.params.slug)}
  </Suspense>
)
}
