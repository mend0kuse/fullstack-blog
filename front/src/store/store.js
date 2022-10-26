import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authorApi } from '../services/authorService'
import { authApi } from '../services/authService'
import { commentsApi } from '../services/commentsService'
import { postsApi } from '../services/postsApi'

const rootReducer = combineReducers({
	[postsApi.reducerPath]: postsApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[authorApi.reducerPath]: authorApi.reducer,
	[commentsApi.reducerPath]: commentsApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(postsApi.middleware)
			.concat(authApi.middleware)
			.concat(authorApi.middleware)
			.concat(commentsApi.middleware)
})