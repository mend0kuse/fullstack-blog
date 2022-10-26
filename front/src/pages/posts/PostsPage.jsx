import React, { useRef, useContext, useState } from 'react'
import Post from '../../components/post/Post'
import { postsApi } from '../../services/postsApi'
import './Posts.scss'
import MyModal from '../../components/UI/modal/MyModal'
import MyInput from '../../components/UI/input/MyInput'
import MyButton from '../../components/UI/button/MyButton'
import { authContext } from '../../context/authContext'

import './Posts.scss'
const PostsPage = () => {
	const { jwtToken, setJwtToken } = useContext(authContext)

	const { data: posts, postsReqInfo } = postsApi.useGetAllQuery('')
	const [createPostReq, createPostReqInfo] = postsApi.useCreateOneMutation()

	const [modalCreateVisible, setModalCreateVisible] = useState(false)

	const postTitleRef = useRef(false)
	const postBodyRef = useRef(false)

	const createPost = async (e) => {
		e.preventDefault()
		const newPost = {
			title: postTitleRef.current.value,
			body: postBodyRef.current.value
		}
		await createPostReq([newPost, jwtToken])
		setModalCreateVisible(false)
	}

	return (
		<div className='posts'>
			<div className="posts__container">
				<MyButton disabled={!jwtToken} className='posts-create__button' onClick={e => setModalCreateVisible(true)}>{jwtToken ? 'Создать пост' : 'Создать пост(Сначала авторизуйтесь)'}</MyButton>
				<div className="posts__inner">
					{posts && posts.map((post, index) => {
						return <Post key={index} post={post} />
					})}
				</div>
			</div>
			<MyModal visible={modalCreateVisible} setVisible={setModalCreateVisible}>
				<form className='post__create'>
					<MyInput ref={postTitleRef} type='text' placeholder='Название' />
					<MyInput ref={postBodyRef} type='text' placeholder='Контент' />
					<MyButton onClick={e => createPost(e)}>Создать</MyButton>
				</form>
			</MyModal>
		</div>
	)
}

export default PostsPage