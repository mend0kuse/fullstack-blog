import React from 'react'
import Post from '../../components/post/Post'
import { postsApi } from '../../services/postsApi'
import './Posts.scss'

const PostsPage = () => {

	const { data: posts, postsReqInfo } = postsApi.useGetAllQuery('')

	return (
		<div>
			{posts && posts.map(post => {
				return <Post post={post} />
			})}
		</div>
	)
}

export default PostsPage