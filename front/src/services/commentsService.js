import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentsApi = createApi({
	reducerPath: 'commentsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/comments' }),
	tagTypes: ['Comment'],
	endpoints: (builder) => ({
		getAll: builder.query({
			query: (postId = '') => ({
				url: `/`,
				params: {
					post: postId
				}
			}),
			providesTags: result => ['Comment']
		}),
		createOne: builder.mutation({
			query: ([newComm, token]) => ({
				url: `/`,
				body: newComm,
				method: 'POST',
				headers: {
					authorization: token
				}
			}),
			invalidatesTags: ['Comment']
		}),
		getOne: builder.query({
			query: (id) => ({
				url: `/${id}`,
			}),
			providesTags: result => ['Comment']
		}),
		deleteOne: builder.mutation({
			query: (id) => ({
				url: `/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ['Comment']
		})
	})
})