import { PostProps}  from '../../../types';

export default function Post(postProps: PostProps) {

    const slug = postProps.params.slug
    return (
        <p>{slug}</p>
    )
}