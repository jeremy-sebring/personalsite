import {PrismaClient, Prisma} from '@prisma/client'


const prisma = new PrismaClient()

export type CreatePost = Prisma.postsCreateInput

export async function getPosts(limit?: number, offset?: number){
    const posts = await prisma.posts.findMany({
        orderBy:{
           updated_at: 'desc'
        },
        take: limit ? limit : 10,
        skip: offset ? offset : 0
    })
    return posts
}

export async function getPost(slug: string){
    const post = await prisma.posts.findUnique({
        where:{
            slug: slug
        }
    })
    return post
}


export async function createPost(data: CreatePost){
    const date = new Date()
    const newPost = await prisma.posts.create({
        data: {
            title: data.title,
            slug: data.slug,
            markdown: data.markdown.replace(/\\n/g, '\n'),
            description: data.description,
            updated_at: date,
            created_at: date
        }
    })
    return newPost
}

