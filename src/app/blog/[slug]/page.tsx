import { getPost } from "@/app/data";
import { PostProps } from "@/types";
import { compileMDX } from "next-mdx-remote/rsc";

export const dynamic = "force-dynamic";
export default async function Post(postProps: PostProps) {
  const post = await getPost(postProps.params.slug);

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
