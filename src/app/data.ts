import prisma from '@/lib/prisma'


export async function getPosts(){
    const posts = await prisma.posts.findMany({
        orderBy:{
           updated_at: 'desc'
        },
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
