import React from 'react'
import { useParams } from 'react-router-dom'
import { authorApi } from '../../services/authorService'
import Author from '../../components/author/Author'
import Post from '../../components/post/Post'
import Comment from '../../components/comment/Comment'

const AuthorById = () => {
	const params = useParams()
	const id = params.id

	const { data: author } = authorApi.useGetOneQuery(id)
	
	const { data: posts } = authorApi.useGetPostsQuery(id)
	const { data: comments } = authorApi.useGetCommentsQuery(id)

	return (
		<div className='authorid__container'>
			{author && <Author author={author} />}
			<h2 className='suptitle'>Посты автора:</h2>
			{posts && posts.length > 0
				? <div className='authorid__posts'>
					{posts.map(post => {
						return <Post post={post} key={post._id} />
					})}
				</div>
				: <h3>У данного автора нет постов</h3>
			}
			<h2 className='suptitle'>Комментарии автора:</h2>
			{comments && comments.length > 0
				? <div className='authorid__comments'>
					{comments.map(comment => {
						return <Comment comm={comment} key={comment._id} open={true}  />
					})}
				</div>
				: <h3>У данного автора нет постов</h3>
			}
		</div>
	)
}

export default AuthorById