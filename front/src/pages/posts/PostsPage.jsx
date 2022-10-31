import React, { useRef, useContext, useState } from 'react'
import Post from '../../components/post/Post'
import { postsApi } from '../../services/postsApi'
import './Posts.scss'
import MyModal from '../../components/UI/modal/MyModal'
import MyInput from '../../components/UI/input/MyInput'
import MyButton from '../../components/UI/button/MyButton'
import { authContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

import './Posts.scss'
import FormCreate from './FormCreate'
import FormUpdate from './FormUpdate'
const PostsPage = () => {

	const { jwtToken, setJwtToken } = useContext(authContext)
	const pagesRouter = useNavigate()

	//запросы на посты
	const { data: posts, postsReqInfo } = postsApi.useGetAllQuery('')
	const [createPostReq, createPostReqInfo] = postsApi.useCreateOneMutation()
	const [updatePostReq, updatePostReqInfo] = postsApi.useUpdateOneMutation()

	const [modalCreateVisible, setModalCreateVisible] = useState(false)

	const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
	const [updatedPostId, setUpdatedPostId] = useState(null)

	//для содания нового поста
	const postTitleRef = useRef(null)
	const postBodyRef = useRef(null)
	const [uploadFile, setUploadFile] = useState(null);

	const [updatedPost, setUpdatedPost] = useState({ title: '', body: '' })

	const createPost = async (e) => {
		e.preventDefault()
		let formData = new FormData()
		if (uploadFile) {
			formData.append('file', uploadFile[0], `${Date.now()}_avatar.png`)
		}
		formData.append('title', postTitleRef.current.value)
		formData.append('body', postBodyRef.current.value)

		await createPostReq([formData, jwtToken])
		setModalCreateVisible(false)
		setUploadFile(null)
	}

	const updatePost = async (e) => {
		e.preventDefault()
		let formData = new FormData()
		formData.append('title', updatedPost.title)
		formData.append('_id', updatedPostId)
		formData.append('body', updatedPost.body)

		if (uploadFile) {
			formData.append('file', uploadFile[0], `${Date.now()}_avatar.png`)
		}

		updatePostReq([formData, jwtToken])
		setUpdatedPost({ title: '', body: '' })
		setUpdatedPostId(null)
		setModalUpdateVisible(false)
	}

	return (
		<div className='posts'>
			<div className="posts__container">
				<MyButton className='posts-create__button' onClick={jwtToken ? e => setModalCreateVisible(true) : e => pagesRouter('/login')}>Создать пост</MyButton>
				<div className="posts__inner">
					{posts && posts.map((post, index) => {
						return <Post key={index} post={post} setItem={setUpdatedPost} setId={setUpdatedPostId} updateModal={setModalUpdateVisible} />
					})}
				</div>
			</div>

			<MyModal visible={modalCreateVisible} setVisible={setModalCreateVisible}>
				<FormCreate body={postBodyRef} title={postTitleRef} setUploadFile={setUploadFile} fn={createPost} />
			</MyModal>

			<MyModal visible={modalUpdateVisible} setVisible={setModalUpdateVisible}>
				<FormUpdate updatedPost={updatedPost} setUploadFile={setUploadFile} setUpdatedPost={setUpdatedPost} fn={updatePost} />
			</MyModal>
		</div>
	)
}

export default PostsPage