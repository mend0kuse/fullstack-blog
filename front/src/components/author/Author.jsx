import React from 'react'
import { authorApi } from '../../services/authorService'
import './Author.scss'
import MyButton from '../../components/UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

const Author = ({ author }) => {
	const pagesRouter = useNavigate()

	const { data: posts } = authorApi.useGetPostsCountQuery(author._id)
	const { data: comments } = authorApi.useGetCommentsCountQuery(author._id)

	return (
		<div className='author'>
			<p className='author__name'>{author.username}</p>
			<p>Постов:{posts} </p>
			<p>Комментариев:{comments}</p>
			<MyButton onClick={e => pagesRouter(`${author._id}`)}>Открыть</MyButton>
		</div>
	)
}

export default Author