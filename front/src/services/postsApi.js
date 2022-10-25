import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
	tagTypes: ['Posts'],
	endpoints: (builder) => ({
		//получение проектов
		getAll: builder.query({
			query: () => ({
				url: `/posts`,
			}),
			providesTags: result => ['Posts']
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