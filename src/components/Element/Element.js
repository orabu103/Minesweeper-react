import React from 'react'
import './style.css'


const Element = ({index , color , title , open , onClick }) => {
    
    const handlerShow = (e) => {
      // if (e.type === 'click') {
      //   setShow(true)
      //   onClick(e , index)
      // if(title === 0) 
      //     onClick(index)
      // } else if (e.type === 'contextmenu') {
      //   console.log('Right click');
      // }
      onClick(e , index)
    }
  return (
    <button className='Element' onClick={handlerShow} onContextMenu={handlerShow} >
        {open ? title : null}
    </button>
  )
}

export default Element