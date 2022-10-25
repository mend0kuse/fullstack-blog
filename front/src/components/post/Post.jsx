import React from 'react'

const Post = ({ post }) => {
	return (
		<div>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			<p>{post.userId}</p>
			<p>{post.createdAt}</p>
		</div>
	)
}

export default Post