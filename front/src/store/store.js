import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authApi } from '../services/authService'
import { postsApi } from '../services/postsApi'

const rootReducer = combineReducers({
	// events: todosSlice.reducer,
	[postsApi.reducerPath]: postsApi.reducer,
	[authApi.reducerPath]: authApi.reducer,

	// [calendarApi.reducerPath]: calendarApi.reducer,
	// [authService.reducerPath]: authService.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postsApi.middleware).concat(authApi.middleware)
})