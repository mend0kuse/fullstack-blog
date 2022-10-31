import React from 'react'
import MyButton from '../../components/UI/button/MyButton'
import MyInput from '../../components/UI/input/MyInput'

const FormCreate = ({ title, body, setUploadFile, fn }) => {
	return (
		<form className='post__create'>
			<MyInput ref={title} type='text' placeholder='Название' />
			<MyInput ref={body} type='text' placeholder='Контент' />
			<input type="file" onChange={(e) => setUploadFile(e.target.files)} />
			<MyButton onClick={e => fn(e)}>Создать</MyButton>
		</form>
	)
}

export default FormCreate