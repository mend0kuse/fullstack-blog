import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authorApi = createApi({
    reducerPath: 'authorApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/authors' }),
    tagTypes: ['Author'],
    endpoints: (builder) => ({
        getAll: builder.query({
            query: () => ({
                url: `/`,
            }),
            providesTags: result => ['Author']
        }),
        getOne: builder.query({
            query: (id) => ({
                url: `/${id}`,
            }),
            providesTags: result => ['Author']
        }),
        getPostsCount: builder.query({
            query: (id) => ({
                url: `/${id}/posts-number`,
            }),
            providesTags: result => ['Author']
        }),
        getCommentsCount: builder.query({
            query: (id) => ({
                url: `/${id}/comments-number`,
            }),
            providesTags: result => ['Author']
        }),
        getComments: builder.query({
            query: (id) => ({
                url: `/${id}/comments`,
            }),
            providesTags: result => ['Author']
        }),
        getPosts: builder.query({
            query: (id) => ({
                url: `/${id}/posts`,
            }),
            providesTags: result => ['Author']
        }),
    })
})