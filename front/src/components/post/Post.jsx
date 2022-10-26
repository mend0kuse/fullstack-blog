import React, { useContext } from 'react'
import { authorApi } from '../../services/authorService'
import { postsApi } from '../../services/postsApi'
import MyButton from '../UI/button/MyButton'
import './Post.scss'
import { authContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

const Post = ({ post }) => {
	const { jwtToken, setJwtToken } = useContext(authContext)
	const pagesRouter = useNavigate()

	const { data: author, getAuthorReqInfo } = authorApi.useGetOneQuery(post.userId)
	const [deletePostReq, deletePostReqInfo] = postsApi.useDeleteOneMutation()

	return (
		<div className='post' onClick={e => pagesRouter(`/posts/${post._id}`)}>
			<h3 className='post__title'>{post.title}</h3>
			<p className='post__content'>{post.body}</p>
			<p className='post__author'>Автор:{author && `${author.username}`}</p>
			<p className='post__date'>{post.createdAt}</p>
			<MyButton onClick={e => {
				deletePostReq([post._id, jwtToken])
				e.stopPropagation()
			}}>Удалить</MyButton>
		</div>
	)
}

export default Post