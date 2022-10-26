import RegistrationPage from "../pages/registration/RegistrationPage"
import LoginPage from '../pages/login/LoginPage'
import PostsPage from "../pages/posts/PostsPage"
import AuthorsPage from "../pages/authors/AuthorsPage"
import PostPage from "../pages/postById/PostPage"
import CommentsPage from "../pages/comments/CommentsPage"
import AuthorById from "../pages/authorById/AuthorById"

export const routes = [
	{ path: '/', element: <RegistrationPage /> },
	{ path: '/login', element: <LoginPage /> },
	{ path: '/authors', element: <AuthorsPage /> },
	{ path: '/authors/:id', element: <AuthorById /> },
	{ path: '/registration', element: <RegistrationPage /> },
	{ path: '/posts', element: <PostsPage /> },
	{ path: '/posts/:id', element: <PostPage /> },
	{ path: '/comments', element: <CommentsPage /> },
]
