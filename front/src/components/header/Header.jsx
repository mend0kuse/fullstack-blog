import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
	return (
		<div className='header'>
			<div className='header__container'>
				<div className="header__nav nav-header">
					<ul className="nav-header__list">
						<li>
							<Link to='/posts' className='nav-header__link'>Посты</Link>
						</li>
						<li>
							<Link to='/authors' className='nav-header__link'>Авторы</Link>
						</li>
						<li>
							<Link to='/comments' className='nav-header__link'>Комментарии</Link>
						</li>
					</ul>
				</div>

				<div className='header__buttons buttons-header'>
					<Link to='/registration' className='buttons-header__item'>Регистрация</Link>
					<Link to='/login' className='buttons-header__item'>Вход</Link>
				</div>
			</div>
		</div>
	)
}

export default Header