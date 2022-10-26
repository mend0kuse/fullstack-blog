import React, { useEffect } from 'react'
import './PostPage.scss'
import { useParams } from 'react-router-dom'
import { postsApi } from '../../services/postsApi'
import { authorApi } from '../../services/authorService'
import { useState } from 'react'
import { useRef } from 'react'
import modifyDate from '../../utils/modifyDate'
import { commentsApi } from '../../services/commentsService'
import MyButton from '../../components/UI/button/MyButton'
import MyInput from '../../components/UI/input/MyInput'
import Post from '../../components/post/Post'
import { authContext } from '../../context/authContext'
import { useContext } from 'react'
import Comment from '../../components/comment/Comment'
import { useNavigate } from 'react-router-dom'

const PostPage = () => {
    const params = useParams()
    const postID = params.id
    const { jwtToken, setJwtToken } = useContext(authContext)
    const pagesRouter = useNavigate()

    //запросы на пост
    const { data: post, ...getByIdPostReqInfo } = postsApi.useGetByIdQuery(postID)

    console.log(post);

    //запросы на комменты
    const { data: comments, ...getCommentsByPostInfo } = commentsApi.useGetAllQuery(postID)
    const [createCommReq, createCommReqInfo] = commentsApi.useCreateOneMutation()

    const createCommHandler = (e) => {
        e.preventDefault()
        const newComm = {
            postId: postID,
            title: titleRef.current.value,
            body: contentRef.current.value
        }
        createCommReq([newComm, jwtToken])
        titleRef.current.value = ''
        contentRef.current.value = ''
    }

    const titleRef = useRef(null)
    const contentRef = useRef(null)

    return (
        <div className='post__container'>
            {post && <Post className='post-single' post={post} />}
            <h2 className='suptitle'>Комментарии:</h2>
            <div className="post__comments">
                {(comments && comments.length > 0)
                    ? comments.map(comm => <Comment key={comm._id} comm={comm} />)
                    : <p>Комментариев еще нет</p>
                }
            </div>
            <div className="create-comment">
                <p>Создать комментарий</p>
                <form className='create-comment__form'>
                    <MyInput ref={titleRef} type='text' placeholder='Название' />
                    <textarea ref={contentRef} className='create-comment__area' cols="30" rows="5"></textarea>
                    <MyButton className='create-comment__btn' onClick={jwtToken ? e => createCommHandler(e) : e => pagesRouter('/login')}>Создать</MyButton>
                </form>
            </div>
        </div >
    )
}

export default PostPage
