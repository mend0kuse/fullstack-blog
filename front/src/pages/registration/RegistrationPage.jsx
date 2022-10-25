import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import MyButton from '../../components/UI/button/MyButton'
import MyInput from '../../components/UI/input/MyInput'
import { authContext } from '../../context/authContext'
import './Registration.scss'
import { authApi } from '../../services/authService'
import { useNavigate } from 'react-router-dom'
const RegistrationPage = () => {
	const pagesRouter = useNavigate()

	const [register, registerReqInfo] = authApi.useRegisterMutation()

	const [regError, setRegError] = useState(null)

	const handlerRegister = (e) => {
		e.preventDefault()
		const newAuthor = {
			name: nameRef.current.value,
			password: passRef.current.value,
			email: mailRef.current.value,
			about: bioRef.current.value,
			username: userRef.current.value,
		}
		register(newAuthor)
			.unwrap()
			.then(resolve => pagesRouter('/login'))
			.catch(reject => setRegError(reject.data.message))
	}


	const nameRef = useRef(null)
	const userRef = useRef(null)
	const passRef = useRef(null)
	const mailRef = useRef(null)
	const bioRef = useRef(null)


	return (
		<div className='registration'>
			<div className="registration__container">
				<h1 className='registration__title sect-title'>Регистрация</h1>
				{regError && <h2 className='registration__error req-error'>{regError}</h2>}
				<form className="registration__form form-reg">
					<MyInput ref={nameRef} type="text" placeholder='Имя' />
					<MyInput ref={userRef} type="text" placeholder='Ник' />
					<MyInput ref={mailRef} type="text" placeholder='Почта' />
					<MyInput ref={passRef} type="password" placeholder='Пароль' />
					<MyInput ref={bioRef} type="text" placeholder='Биография' />
					<MyButton onClick={e => handlerRegister(e)}>Регистрация</MyButton>
				</form>
			</div>
		</div>
	)
}

export default RegistrationPage