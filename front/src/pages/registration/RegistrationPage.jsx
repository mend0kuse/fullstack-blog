import React, { useRef, useState, useEffect } from 'react'
import { useContext } from 'react'
import MyButton from '../../components/UI/button/MyButton'
import MyInput from '../../components/UI/input/MyInput'
import { authContext } from '../../context/authContext'
import './Registration.scss'
import { authApi } from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../hooks/useInput'

const RegistrationPage = () => {
	const pagesRouter = useNavigate()

	const [register, registerReqInfo] = authApi.useRegisterMutation()
	const [regError, setRegError] = useState(null)

	const nameRef = useRef(null)
	const username = useInput('', { isEmpty: true })
	const password = useInput('', { isPass: /^(?=.*[0-9])(?=.*[!@#+$%^&*])[a-zA-Z0-9!@#+$%^&*]{6,16}$/ })
	const mail = useInput('', { isEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })
	const bioRef = useRef(null)

	const handlerRegister = (e) => {
		e.preventDefault()
		const newAuthor = {
			name: nameRef.current.value,
			password: password.value,
			email: mail.value,
			about: bioRef.current.value,
			username: username.value,
		}
		register(newAuthor)
			.unwrap()
			.then(resolve => pagesRouter('/login'))
			.catch(reject => setRegError(reject.data.message))
	}

	const [formValid, setFormValid] = useState(false)

	useEffect(() => {
		console.log('as');
		if (username.err || password.err || mail.err) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [username.err, password.err, mail.err])



	return (
		<div className='registration'>
			<div className="registration__container">
				<h1 className='registration__title sect-title'>Регистрация</h1>
				{regError && <h2 className='registration__error req-error'>{regError}</h2>}
				<form className="registration__form form-reg">
					<MyInput ref={nameRef} type="text" placeholder='Имя' />

					{(username.isDirty && username.err) && <p style={{ color: "red" }}>{username.err}</p>}
					<MyInput value={username.value} onChange={e => username.onChange(e)} onBlur={e => username.onBlur(e)} type="text" placeholder='Ник' />

					{(mail.isDirty && mail.err) && <p style={{ color: "red" }}>{mail.err}</p>}
					<MyInput value={mail.value} onChange={e => mail.onChange(e)} onBlur={e => mail.onBlur(e)} type="text" placeholder='Почта' />

					{(password.isDirty && password.err) && <p style={{ color: "red" }}>{password.err}</p>}
					<MyInput value={password.value} onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} type="password" placeholder='Пароль' />

					<MyInput ref={bioRef} type="text" placeholder='Биография' />
					<MyButton disabled={!formValid} onClick={e => handlerRegister(e)}>Регистрация</MyButton>
				</form>
			</div>
		</div>
	)
}

export default RegistrationPage