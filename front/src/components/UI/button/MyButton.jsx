import React from 'react'
import './MyButton.scss'

const MyButton = ({ children, ...props }) => {
	const rootClass = ['myButton']
	if (props.className) {
		rootClass.push(props.className)
	}
	return (
		<button {...props} className={rootClass.join(' ')}>{children}</button>
	)
}

export default MyButton