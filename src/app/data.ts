'use server'


import prisma from '@/lib/prisma';
import { log } from 'console';



export async function getPost(slug: string) {

    const post = await prisma.posts.findUnique({
        where: {
            slug: slug
        }
    });

    return post;
}

export async function getPosts(tags?: string[], limit?: number, offset?: number) {

    if (tags) {
        const foundTags = await prisma.tags.findMany({
            where: {
                name: {
                    in: tags
                }
            },
        })
        if (!foundTags) {
            log("No tags found")
            return null;
        }

        const postIds = await prisma.tagmembership.findMany({
            select:  {
                post_id: true
            },
            where: {
                tag_id: {
                    in: foundTags.map(tag => tag.id)
                }
            }
        })

        const posts = await prisma.posts.findMany({
            where: {
                id: {
                    in: postIds.map(postId => postId.post_id)
                }
            },
            orderBy: {
                updated_at: "desc"
            },
            take: limit,
            skip: offset
        })

        return posts;
    } else {
        const posts = await prisma.posts.findMany({
            orderBy: {
                updated_at: "desc"
            },
            take: limit,
            skip: offset
        });
        return posts;
    }
}
