import RegistrationPage from "../pages/registration/RegistrationPage"
import LoginPage from '../pages/login/LoginPage'
import PostsPage from "../pages/posts/PostsPage"
import AuthorsPage from "../pages/authors/AuthorsPage"

export const routes = [
	{ path: '/', element: <RegistrationPage /> },
	{ path: '/login', element: <LoginPage /> },
	{ path: '/authors', element: <AuthorsPage /> },
	{ path: '/registration', element: <RegistrationPage /> },
	{ path: '/posts', element: <PostsPage /> },
	// {path: '/comments', element: <Comments /> },
	// {path: '/posts/:id', element: <PostsPage /> },
	// {path: '/users/:id/posts', element: <UserPage /> },
]
