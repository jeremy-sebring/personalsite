interface PostProps {
    params: {
        slug: string
    },
    searchParams: object
}


export default function Post(postProps: PostProps) {

    const slug = postProps.params.slug
    return (
        <p>{slug}</p>
    )
}