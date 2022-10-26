import React from 'react'
import MyButton from '../../components/UI/button/MyButton'
import MyInput from '../../components/UI/input/MyInput'

const FormCreate = ({ title, body, fn }) => {
	return (
		<form className='post__create'>
			<MyInput ref={title} type='text' placeholder='Название' />
			<MyInput ref={body} type='text' placeholder='Контент' />
			<MyButton onClick={e => fn(e)}>Создать</MyButton>
		</form>
	)
}

export default FormCreate