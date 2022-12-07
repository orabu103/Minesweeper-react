import React , {useState , useEffect} from 'react'
import Element from '../Element/Element'
import { createGame } from '../CraeteGame'
import './style.css'
const Container = () => {
    const[elements , setElements] = useState([])
    const[elementList , setElementList] = useState([])
    const[gameOver , setGameOver] = useState(false)

    // console.log(elements)



    useEffect(() => {
      // if(!elements.length)
        setElements(createGame(10))
    },[])

  
    const handleOpenByClick = (e ,index) => {

        if(elements[index.x][index.y].title == -1) setGameOver(true)
        // console.log(elements[index.x][index.y].title == -1 , gameOver)
        if(elements[index.x][index.y].title != 0){
          elements[index.x][index.y].open = true
            setElements([...elements])
        }
        else {
          helpOpenNeighbors(index.x,index.y)
            setElements([...elements])
        }
    }
    const helpOpenNeighbors = (x,y) => {
      console.log(x,y)
      if((x >= 0 && y >= 0) && (x < 10 && y <10) && !elements[x][y].open){
        if(elements[x][y].title > 0){
          elements[x][y].open = true
          return;
        }
        else if(elements[x][y].title == 0) {
          elements[x][y].open = true
        
            helpOpenNeighbors(x-1 ,y-1)
            helpOpenNeighbors(x-1 ,y)
            helpOpenNeighbors(x-1 ,y+1)
            helpOpenNeighbors(x ,y-1)
            helpOpenNeighbors(x ,y+1)
            helpOpenNeighbors(x+1 ,y-1)
            helpOpenNeighbors(x+1 ,y)
            helpOpenNeighbors(x+1 ,y+1)
          
        }
      }
      else return
    }
    
    useEffect(() => {
      
      let elementList = []
      elements.forEach(el => el.forEach(subEl => 
          elementList.push(
            <Element 
                key={subEl.key} 
                index={subEl.index} 
                title={subEl.title}
                open={subEl.open}
                onClick={handleOpenByClick}/>)))
      setElementList(elementList)
    } ,[elements])
    

  return (
    <div className='Container'>
        {elementList}
    </div>
  )
}

export default Container