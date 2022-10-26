import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authorApi = createApi({
    reducerPath: 'authorApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/authors' }),
    tagTypes: ['Author'],
    endpoints: (builder) => ({
        //получение проектов
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
        // createOne: builder.mutation({
        // 	query: ([newPost, token]) => ({
        // 		url: `/`,
        // 		method: "POST",
        // 		body: newPost,
        // 		headers: {
        // 			authorization: token
        // 		}
        // 	}),
        // 	invalidatesTags: ['Posts']
        // }),
    })
})