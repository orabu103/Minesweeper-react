import React , {useEffect, useState} from 'react'
import Timer from '../Timer/Timer'
import './style.css'

const Header = ({width , clickResetGame }) => {

  const headerStyle = {
    maxWidth:`${width}px`,
}



  return (
    <div className='Header' style={headerStyle}>
        <Timer />
      <div>
        Minesweeper Game
      </div>
      <button className='Header_Refesh' onClick={clickResetGame}>
        <span className="material-symbols-outlined">
          refresh
        </span>
      </button>
    
    </div>
  )
}

export default Header