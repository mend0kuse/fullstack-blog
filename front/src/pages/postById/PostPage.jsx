import React, { useEffect } from 'react'
import './PostPage.scss'
import { useParams } from 'react-router-dom'
import { postsApi } from '../../services/postsApi'
import { authorApi } from '../../services/authorService'
import { useState } from 'react'


const PostPage = () => {
    const params = useParams()
    const postID = params.id


    const { data: post, ...getByIdPostReq } = postsApi.useGetByIdQuery(postID);
    const { data: author } = authorApi.useGetOneQuery(post._id, { skip: !post._id });

    return (
        <div className='post__container'>
            {post &&
                <div className="post">
                    <h3 className='post__title'>{post.title}</h3>
                    <p className='post__content'>{post.body}</p>
                    {/* <p className='post__author'>Автор:{author ? `${author.username}` : `не загрузился`}</p> */}
                    <p className='post__date'>{post.createdAt}</p>
                </div>
            }
        </div>
    )
}

export default PostPage
