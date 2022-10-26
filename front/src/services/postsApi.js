import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/posts' }),
	tagTypes: ['Posts'],
	endpoints: (builder) => ({
		//получение проектов
		getAll: builder.query({
			query: () => ({
				url: `/`,
			}),
			providesTags: result => ['Posts']
		}),
		getById: builder.query({
			query: (id) => ({
				url: `/${id}`,
			}),
			providesTags: result => ['Posts']
		}),
		createOne: builder.mutation({
			query: ([newPost, token]) => ({
				url: `/`,
				method: "POST",
				body: newPost,
				headers: {
					authorization: token
				}
			}),
			invalidatesTags: ['Posts']
		}),
		deleteOne: builder.mutation({
			query: ([id, token]) => ({
				url: `/${id}`,
				method: "DELETE",
				headers: {
					authorization: token
				}
			}),
			invalidatesTags: ['Posts']
		}),

	})

	//удаление проекта
	// 	deleteProject: builder.mutation < KanbanProject, number> ({
	// 		query: (id) => ({
	// 			url: `/projects/${id}`,
	// 			method: 'DELETE',
	// 		}),
	// 		invalidatesTags: ['kanban']
	// 	}),
	//создание проекта
	// 	createProject: builder.mutation < KanbanProject, KanbanProject> ({
	// 		query: (newProj) => ({
	// 			url: `/projects`,
	// 			method: 'POST',
	// 			body: { ...newProj }
	// 		}),
	// 		invalidatesTags: ['kanban'],
	// 		transformResponse: (response: KanbanProject): KanbanProject => {
	// 			return response
	// 		}
	// 	}),
	// обновление проекта
	// updateProject: builder.mutation < KanbanProject, [number, KanbanBoard[]] > ({
	// 	query: ([id, boards]) => ({
	// 		url: `/projects/${id}`,
	// 		method: 'PUT',
	// 		body: {
	// 			boards: boards
	// 		}
	// 	}),
	// 	invalidatesTags: ['kanban']
	// }),
	// }),
})