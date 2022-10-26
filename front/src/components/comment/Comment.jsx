import React from 'react'
import { authorApi } from '../../services/authorService'
import { commentsApi } from '../../services/commentsService'
import modifyDate from '../../utils/modifyDate'
import MyButton from '../UI/button/MyButton'
import './Comment.scss'
import { useNavigate } from 'react-router-dom'

const Comment = ({ comm, ...props }) => {
	const pagesRouter = useNavigate()

	const { data: author, getAuthorReqInfo } = authorApi.useGetOneQuery(comm.userId)

	const [deleteComment] = commentsApi.useDeleteOneMutation()


	return (
		<div className='comment'>
			<p className='comment__title'>{comm.title}</p>
			<p>{modifyDate(comm.createdAt)}</p>
			<p>{comm.body}</p>
			<p>Автор:{author && `${author.username}`}</p>
			<MyButton onClick={e => deleteComment(comm._id)}>Удалить</MyButton>
			{props.open && <MyButton onClick={e => pagesRouter(`/posts/${comm.postId}`)}>Перейти к посту</MyButton>}
		</div>
	)
}

export default Comment