import React , {useEffect , useState}from 'react'
import { getTextColor } from '../ColorElement'

import './style.css'


const Element = ({index , color , title , open , onClick , onClickFlag ,  flag , size}) => {
        const[textColor , setTextColor] = useState('')
      
    useEffect(() => {
      setTextColor(getTextColor(title));
    },[])

    const colorElemet = {
        width:`${size}px`,
        height:`${size}px`,
        backgroundColor : color ,
        color: flag ? '#cc0000' : textColor,
        
      
    }
    // backgroundColor : title === -1 && open ? textColor : color,



    const handlerShow = (e) => {
      if (e.type === 'click') onClick(e , index) 
      else if (e.type === 'contextmenu') onClickFlag(e , index);
    }

    let contant = () => {
      let flagAtt = (<span className="material-symbols-rounded">
                      flag
                      </span>)
      let value = title == -1 ? <span className="material-symbols-rounded">
            radio_button_unchecked
        </span> : title
      let show = open && value != 0 ? value : null
      return( 
        flag ? flagAtt : show
      )
    }

    

    useEffect(() => {
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    })
    
  return (
    <button className='Element' onClick={handlerShow} style={colorElemet} onContextMenu={handlerShow} >
        {/* {open ? title : null} */}
        {contant()}
    </button>
  )
}

export default Element