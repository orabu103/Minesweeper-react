import React , {useState , useEffect} from 'react'
import Element from '../Element/Element'
import { createGame } from '../CraeteGame'
import './style.css'
const Container = () => {
    const[elements , setElements] = useState([])
    const[elementList , setElementList] = useState([])
    console.log(elements)



    useEffect(() => {
        setElements(createGame(10))
       
    },[])

    const handleOpen = (index) => {
      console.log(elements[Math.floor(index/10)][index%10-1])
      elements[Math.floor(index/10)][index%10].open = true
      setElements(elements)
      console.log(elements)
      
   
    
  }
    const handleOpenByZero = (index) => {
        console.log(elements[0][0])
    }
    
    useEffect(() => {
      let elementList = []
      elements.forEach(el => el.forEach(subEl => 
          elementList.push(
            <Element 
                key={subEl.key} 
                index={subEl.key} 
                title={subEl.title}
                open={subEl.open}
                clickOpen = {handleOpen}
                onClick={handleOpenByZero}/>)))
      setElementList(elementList)
    } ,[elements])
    


  

  return (
    <div className='Container'>
        {elementList}
    </div>
  )
}

export default Container