import React from 'react'

type Props = {
    post: any
}

export default function ListItem({ post }: Props) {
    const { id, title, date, description } = post.fields
    return (
        <div>ListItem</div>
    )
}