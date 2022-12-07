import React from 'react'
import Timer from '../Timer/Timer'
import './style.css'

const Header = () => {
  return (
    <div className='Header'>
        <Timer />
      <div>
        Minesweeper Game
      </div>
      <button className='Header_Refesh'>
        <span className="material-symbols-outlined">
          refresh
        </span>
      </button>
    
    </div>
  )
}

export default Header