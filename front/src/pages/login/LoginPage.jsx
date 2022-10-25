import React, { useContext, useRef, useState } from 'react'
import { authContext } from '../../context/authContext'
import './Login.scss'
import MyInput from '../../components/UI/input/MyInput'
import MyButton from '../../components/UI/button/MyButton'
import { authApi } from '../../services/authService'

const LoginPage = () => {

	const { jwtToken, setJwtToken } = useContext(authContext)

	const [loginReq, loginReqInfo] = authApi.useLoginMutation()

	const [loginError, setLoginError] = useState('')

	const passRef = useRef(null)
	const userRef = useRef(null)

	const handlerLogin = (e) => {
		e.preventDefault()
		const userData = {
			password: passRef.current.value,
			username: userRef.current.value
		}
		loginReq(userData)
			.unwrap()
			.then(resolve => setJwtToken(resolve.token))
			.catch(reject => console.log(reject))
	}

	return (
		<div className='login'>
			<div className="login__container">
				<h1 className='login__title sect-title'>Вход</h1>
				{loginReqInfo.error && <h2 className='req-error'>{loginReqInfo.error.data.message}</h2>}
				<form className="login__form form-login">
					<MyInput ref={userRef} type="text" placeholder='Ник' />
					<MyInput ref={passRef} type="password" placeholder='Пароль' />
					<MyButton onClick={e => handlerLogin(e)}>Войти</MyButton>
				</form>
			</div>
		</div>
	)
}

export default LoginPage