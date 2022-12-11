import React , {useState , useEffect} from 'react'
import Element from '../Element/Element'
import { createGame , getLevelGame } from '../CraeteGame'
import Modal from '../Modal/Modal'

import './style.css'

let initLevel = {
  rows:5,
  colums:5,
  numberOfBombs: 5,
}


const Container = ({changeWidth , resetGame , clickStartGame ,levelGame }) => {
    const[level , setLevel] = useState(initLevel)
    const[elements , setElements] = useState([])
    const[elementList , setElementList] = useState([])
    const[showModal , setShowModal] = useState(false)
    const[countOpenElement , setCountOpenElement] = useState(0);
    const[statusGame , setStatusGame ] = useState(false);
    const[openBombs , setOpenBombs ] = useState(false)
    const[bombs , setBombs] = useState([])
    const[second , setSecond] = useState(0)
    const[size , setSize] = useState(50)
    
    
    /**
     * Create new Game
     */
        const createNewGame = () => {
          clickStartGame(false)
          setStatusGame(false);
          setOpenBombs(false)
          setShowModal(false);
          setElements([])
          setElementList([])
          let game = createGame(level.numberOfBombs , level.rows , level.colums)
          setBombs (game.indexBombs)
          setElements(game.elements)
          setCountOpenElement(0);
        }
    
    /**
     * Effect to create and resert game
     */
    useEffect(() => {
      setLevel(getLevelGame(levelGame))
    },[resetGame , levelGame])

    useEffect(() => {
      setSize(level.rows*level.colums < 105 ? 50 : 35)
      createNewGame();
    },[level])

    useEffect(() => {
      changeWidth(level.colums*size);
    },[size , level])

    /**
     * Effect to check if the game is over
     */
    useEffect(() => {
      if(countOpenElement === level.rows*level.colums-level.numberOfBombs){ 
        setOpenBombs(true)
        setStatusGame(true)
      }
    },[countOpenElement])

    useEffect(() => {
      if(second-1 < bombs.length && openBombs){
        let index = bombs[second-1]
        elements[index.x][index.y].flag = false
        elements[index.x][index.y].open = true
        setElements([...elements])
      }
      else {
        if(second > 0) setShowModal(true);
        setOpenBombs(false)
      }
    },[second])

    useEffect(() => {
      let interval;
      if (openBombs) {
        clickStartGame(false)
        interval = setInterval(() => {
          setSecond(second+1)
        }, 300);
      } else {
        setSecond(0)
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [openBombs , second]);
    
  
    useEffect(() => {
      let elementList = []
      elements.forEach(el => el.forEach(subEl => 
          elementList.push(
            <Element 
                key={subEl.key}
                index={subEl.index} 
                title={subEl.title}
                open={subEl.open}
                onClick={handleOpenByClick}
                flag={subEl.flag}
                size={size}
                onClickFlag={handleupdateFlag}/>)))
      setElementList(elementList)
    } ,[elements])


    /**
     * Handles flag placement requests
     */
    const handleupdateFlag = (e , index) => {
      if(!elements[index.x][index.y].open){
        elements[index.x][index.y].flag = !elements[index.x][index.y].flag
        setElements([...elements])
      }
    }
    /**
     * Handles click on element
     */
    const handleOpenByClick = (e ,index) => {
      clickStartGame(true);
      if(!elements[index.x][index.y].flag && !openBombs){
        if(elements[index.x][index.y].title === -1) {
          elements[index.x][index.y].open = true
            setElements([...elements])
            setOpenBombs(true)
          }
        if(elements[index.x][index.y].title > 0){
          elements[index.x][index.y].open = true
            setElements([...elements])
            setCountOpenElement(countOpenElement+1)
        }
        else {
            let countOfOpenNeighbors = helpOpenNeighbors(index.x,index.y) // counter to check times open neighbors
            setElements([...elements])
            setCountOpenElement(countOpenElement+countOfOpenNeighbors)
        }
      }
    }

    /**
     * Help function run over neighbors title equal zero and update to open 
     */
    const helpOpenNeighbors = (x,y) => {
      let countOfOpenNeighborsLocal = 0;
      if((x >= 0 && y >= 0) && (x < level.rows && y <level.colums) && !elements[x][y].open && !elements[x][y].flag ){
        if(elements[x][y].title > 0 ){
          elements[x][y].open = true
          return 1;
        }
        else if(elements[x][y].title === 0) {
          countOfOpenNeighborsLocal = countOfOpenNeighborsLocal + 1;
          elements[x][y].open = true
          countOfOpenNeighborsLocal += helpOpenNeighbors(x-1 ,y-1)
          countOfOpenNeighborsLocal+=helpOpenNeighbors(x-1 ,y)
          countOfOpenNeighborsLocal+=helpOpenNeighbors(x-1 ,y+1)
          countOfOpenNeighborsLocal +=helpOpenNeighbors(x ,y-1)
          countOfOpenNeighborsLocal +=helpOpenNeighbors(x ,y+1)
          countOfOpenNeighborsLocal +=helpOpenNeighbors(x+1 ,y-1)
          countOfOpenNeighborsLocal +=helpOpenNeighbors(x+1 ,y)
          countOfOpenNeighborsLocal +=helpOpenNeighbors(x+1 ,y+1)
          return countOfOpenNeighborsLocal
        }
       
      }
      else return countOfOpenNeighborsLocal
    }
    
 
    

  return (
    <div className='Container' style={{width:level.colums*size}}>
        {showModal ? <Modal onClick={createNewGame} result={statusGame}/> : null}
        {elementList}
    </div>
  )
}

export default Container