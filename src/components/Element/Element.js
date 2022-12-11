import React , {useEffect , useState}from 'react'
import { getTextColor , getBgColor , getBgColorBomb} from '../ColorElement'

import './style.css'

let flagAtt = <span className="material-symbols-rounded">
                flag
              </span>

let bombAtt = <span className="material-symbols-rounded">
                radio_button_unchecked
              </span>

const Element = ({index ,title , open , onClick , onClickFlag ,  flag , size}) => {
        const[textColor , setTextColor] = useState('')
        
      
    useEffect(() => {
      setTextColor(getTextColor(title));
    },[])

    const colorElemet = {
        width:`${size}px`,
        height:`${size}px`,
        backgroundColor : getBgColor(index , open) ,
        color: flag ? '#cc0000' : textColor,
    }



    const handlerShow = (e) => {
      if (e.type === 'click') onClick(e , index) 
      else if (e.type === 'contextmenu') onClickFlag(e , index);
    }

    let contant = () => {
      let value = title === -1 ? bombAtt : title
      let show = open && value !== 0 ? value : null
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
        {contant()}
    </button>
  )
}

export default Element