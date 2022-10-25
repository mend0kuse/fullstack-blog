import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../routes/routes'

const AppRouter = () => {
	return (
		<Routes>
			{routes.map(route =>
				<Route key={route.path} element={route.element} path={route.path}></Route>
			)}
		</Routes>
	)

}

export default AppRouter