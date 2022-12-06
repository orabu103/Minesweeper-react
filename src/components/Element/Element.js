import React , {useState} from 'react'
import './style.css'


const Element = ({index , color , title , open , onClick , clickOpen}) => {
    const[show , setShow]= useState(open)
    const handlerShow = (e ) => {
      if (e.type === 'click') {
        clickOpen(index)
      if(title === 0) 
          onClick(index)
      } else if (e.type === 'contextmenu') {
        console.log('Right click');
      }
       
    }
  return (
    <button className='Element' onClick={handlerShow} onContextMenu={handlerShow} >
        {show ? title : null}
    </button>
  )
}

export default Element