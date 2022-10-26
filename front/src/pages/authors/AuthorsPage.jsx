import React, { useEffect, useRef } from 'react'
import { authorApi } from '../../services/authorService'
import Author from '../../components/author/Author'
import { useState } from 'react'

import './AuthorsPage.scss'


const AuthorsPage = () => {
	const { data: authors } = authorApi.useGetAllQuery()

	return (
		<div className='authors'>
			<div className="authors__container">
				<h1 className='authors__title sect-title'>Авторы</h1>
				<div className="authors__inner">
					{authors && authors.length > 0
						? authors.map(author => {
							return <Author author={author} key={author._id}></Author>
						})
						: <h3>Авторов нет</h3>
					}
				</div>
			</div>
		</div>
	)
}

export default AuthorsPage