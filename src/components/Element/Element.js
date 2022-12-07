import React , {useEffect}from 'react'

import './style.css'


const Element = ({index , color , title , open , onClick , onClickFlag ,  flag}) => {
    



    const colorElemet = {

        backgroundColor : color

    }


    const handlerShow = (e) => {
      if (e.type === 'click') onClick(e , index) 
      else if (e.type === 'contextmenu') onClickFlag(e , index);
    }

    let contant = () => {
      let flagAtt = (<span className="material-symbols-rounded">
                      flag
                      </span>)
      let value = title == -1 ? <span className="material-symbols-outlined">
                  location_searching
                  </span> : title
      let show = open ? value : null


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