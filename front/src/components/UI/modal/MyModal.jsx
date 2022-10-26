import React from 'react'
import './MyModal.scss'

const MyModal = ({ children, visible, setVisible }) => {
    let rootClass = ['modal']
    if (visible) {
        rootClass.push('active')
    }

    return (
        <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div >
    )
}

export default MyModal
