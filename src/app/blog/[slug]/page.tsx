import { getPost } from '@/app/data';
import { PostProps } from '@/types';
import { compileMDX } from 'next-mdx-remote/rsc'
import { Suspense } from 'react';


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
          })
        return ( <div>
            <h1>{post.title}</h1>
            {content}
        </div>
        );
    }
}