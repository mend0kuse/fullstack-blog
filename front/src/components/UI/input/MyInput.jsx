import React from 'react'
import { forwardRef } from 'react'
import './MyInput.scss'

const MyInput = forwardRef((props, ref) => {
	const rootClass = ['myInput']
	if (props.className) {
		rootClass.push(props.className)
	}
	return (
		<input type="text" {...props} ref={ref} className={rootClass.join(' ')} />
	)
})

export default MyInput