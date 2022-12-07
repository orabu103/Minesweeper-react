import React , {useState , useEffect} from 'react'
import Element from '../Element/Element'
import { createGame } from '../CraeteGame'
import Modal from '../Modal/Modal'

import './style.css'
const Container = () => {
    const[elements , setElements] = useState([])
    const[elementList , setElementList] = useState([])
    const[showModal , setShowModal] = useState(false)
    const[bombs , setBombs] = useState([])

    let numberOfBombs = 10;
    let rows = 10
    let colums = 10
    useEffect(() => {
      createNewGame();
    },[])

    // console.log(bombs)
    
    const createNewGame = () => {
      let game = createGame(numberOfBombs , rows , colums )
      setBombs(game.bombs)
      setElements(game.elements)
      setShowModal(false);
    }

    const handleupdateFlag = (e , index) => {
      if(!elements[index.x][index.y].open){
        elements[index.x][index.y].flag = !elements[index.x][index.y].flag
        setElements([...elements])
      }
    }

    
  
    const handleOpenByClick = (e ,index) => {
      if(!elements[index.x][index.y].flag){
        if(elements[index.x][index.y].title == -1) {
          elements[index.x][index.y].open = true
            setElements([...elements])
            bombs.forEach(index => {
              elements[Math.floor(index/rows)][index%rows].open = true
              setElements([...elements])
            })
            // setShowModal(true);

          }
        if(elements[index.x][index.y].title > 0){
          elements[index.x][index.y].open = true
            setElements([...elements])
        }
        else {
          helpOpenNeighbors(index.x,index.y)
            setElements([...elements])
        }
      }
    }

    const helpOpenNeighbors = (x,y) => {
      if((x >= 0 && y >= 0) && (x < rows && y <colums) && !elements[x][y].open && !elements[x][y].flag ){
        if(elements[x][y].title > 0 ){
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
                color={subEl.open ? subEl.color.open : subEl.color.close}
                open={subEl.open}
                onClick={handleOpenByClick}
                flag={subEl.flag}
                onClickFlag={handleupdateFlag}/>)))
      setElementList(elementList)
    } ,[elements])
    

  return (
    <div className='Container' style={{width:colums*50}}>
        {showModal ? <Modal onClick={createNewGame} /> : null}
        {elementList}
    </div>
  )
}

export default Container