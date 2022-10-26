import React from 'react'
import Comment from '../../components/comment/Comment'
import { commentsApi } from '../../services/commentsService'

const CommentsPage = () => {
	const { data: comments, ...getCommentsByPostInfo } = commentsApi.useGetAllQuery()

	return (
		<div className='comments'>
			<div className="comments__container">
				<h1 className='comments__title sect-title'>Комментарии</h1>
				<div className="comments__inner">
					{comments && comments.length > 0
						? comments.map(comm => {
							return <Comment comm={comm} open={true} />
						})
						: <h3>Комментариев нет</h3>
					}
				</div>
			</div>
		</div>
	)
}

export default CommentsPage