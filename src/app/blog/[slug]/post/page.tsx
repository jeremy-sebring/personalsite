import { PostProps } from '../../../../types';
import React from 'react';

export default function Post(postProps: PostProps) {
    const slug = postProps.params.slug;
    return (
        <p>{slug}</p>
    );
}