import React, { useContext } from 'react'
import { authorApi } from '../../services/authorService'
import { postsApi } from '../../services/postsApi'
import MyButton from '../UI/button/MyButton'
import './Post.scss'
import { authContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
import modifyDate from '../../utils/modifyDate'

const Post = ({ className, post, ...props }) => {

	const rootClass = ['post']
	if (className) {
		rootClass.push(className)
	}

	const { jwtToken, setJwtToken } = useContext(authContext)
	const pagesRouter = useNavigate()

	const { data: author, getAuthorReqInfo } = authorApi.useGetOneQuery(post.userId)
	const [deletePostReq, deletePostReqInfo] = postsApi.useDeleteOneMutation()

	const updateHandler = (e) => {
		e.stopPropagation()
		props.setItem({ title: post.title, body: post.body })
		props.setId(post._id)
		props.updateModal(true)
	}

	const deleteHandler = (e) => {
		deletePostReq([post._id, jwtToken])
		e.stopPropagation()
	}
	return (
		<div className={rootClass.join(' ')} onClick={e => pagesRouter(`/posts/${post._id}`)}>
			{post.avatar
				&& <img src={'http://localhost:5000/images/' + post.avatar} className='post__avatar' alt="sdf" />
			}
			<h3 className='post__title'>{post.title}</h3>
			<p className='post__content'>{post.body}</p>
			<p className='post__author'>Автор:{author && `${author.username}`}</p>
			<p className='post__date'>{modifyDate(post.createdAt)}</p>

			<MyButton onClick={jwtToken ? e => deleteHandler(e) : e => {
				e.stopPropagation()
				pagesRouter('/login')
			}}>Удалить</MyButton>

			{props.updateModal &&
				<MyButton onClick={jwtToken ? e => updateHandler(e) : e => {
					e.stopPropagation()
					pagesRouter('/login')
				}}>Обновить</MyButton>
			}
		</div >
	)
}

export default Post