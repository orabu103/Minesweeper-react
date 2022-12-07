import React from 'react'
import './style.css'


const Modal = ({title , backgroundImg , onClick}) => {

  return (
    <div className='Modal'>
      <div className='Modal_Animation'>
        <div className='Modal_Container'>
          <h1>{title}</h1>
        </div>
        <button className='Modal_Button' onClick={onClick}>
            Play Again ?
        </button>
      </div>
    </div>
  )
}

export default Modal