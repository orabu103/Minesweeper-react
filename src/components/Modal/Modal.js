import React from 'react'
import './style.css'
import win from '../../img/win.png'
import loss from '../../img/loss.png'

const Modal = ({ result , onClick}) => {

  let styleContainer = {
    width:'100%',
    // backgroundSize: 'auto',
    
  }
  return (
    <div className='Modal'>
      <div className='Modal_Animation'>
        <div className='Modal_Container'>
          <img src={result ? win : loss} style={styleContainer}></img>
        </div>
        <button className='Modal_Button' onClick={onClick}>
            Play Again ?
        </button>
      </div>
    </div>
  )
}

export default Modal