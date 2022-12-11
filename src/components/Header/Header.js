import React , {useEffect, useState} from 'react'
import Timer from '../Timer/Timer'
import Select from '../Select/Select'
import './style.css'

const Header = ({width , clickResetGame , startGame , clickChangeLevel }) => {

  const headerStyle = {
    maxWidth:`${width}px`,
}

  return (
    <div className='Header' style={headerStyle}>
       <Select clickChangeLevel={clickChangeLevel}/>
        <Timer startGame={startGame}/>
     
      <button className='Header_Refesh' onClick={clickResetGame}>
        <span className="material-symbols-outlined">
          refresh
        </span>
      </button>

    
    </div>
  )
}

export default Header