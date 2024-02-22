import { getPost } from "@/app/data";
import { PostProps } from "@/types";
import { compileMDX } from "next-mdx-remote/rsc";
import { Suspense } from "react";

export default async function Post(postProps: PostProps) {
  const post = await getPost(postProps.params.slug);

  if (!post) {
    return (
      <div>
        <p>Post not found</p>
      </div>
    );
  } else {
    const { content, frontmatter } = await compileMDX<{ title: string }>({
      source: post.markdown,
      options: {
        parseFrontmatter: true,
      },
    });
    return (
      <div className="container mx-auto my-10">
        <h1>{post.title}</h1>
        {content}
        {frontmatter.title},
      </div>
    );
  }
}
