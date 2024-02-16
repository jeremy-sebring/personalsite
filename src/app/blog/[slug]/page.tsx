/* eslint-disable react/no-unescaped-entities */
import { PostProps}  from '../../types';

import { getPost } from '@/app/data';

import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Post(postProps: PostProps) {

    const slug = postProps.params.slug

    const post = await getPost(slug)


if (!post) {
    return (
        <div className="text-center">
            <h2>No post found</h2>
            <p>I'll work on writing it soon! </p>
        </div>
)
}else {
    return (
        <>
            <h1>{post.title}</h1>
            <br/>
            <MDXRemote source={post.markdown}/>
        </>
    )
}
}