import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/auth' }),
	// tagTypes: ['Posts'],
	endpoints: (builder) => ({
		//регистрация
		register: builder.mutation({
			query: (newAuthor) => ({
				url: `/registration`,
				method: 'POST',
				body: newAuthor
			}),
			// providesTags: result => ['Posts']
		}),

		//вход
		login: builder.mutation({
			query: (data) => ({
				url: `/login`,
				method: 'POST',
				body: data
			}),
			// providesTags: result => ['Posts']
		}),
	})
})