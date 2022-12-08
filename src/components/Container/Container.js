import React , {useState , useEffect} from 'react'
import Element from '../Element/Element'
import { createGame } from '../CraeteGame'
import Modal from '../Modal/Modal'
import win from '../../img/win.png'
import loss from '../../img/loss.png'
import './style.css'

let numberOfBombs =8;
let rows = 20
let colums = 8
let size = rows*colums < 105 ? 50 : 35

const Container = ({changeWidth , resetGame  }) => {
    const[elements , setElements] = useState([])
    const[elementList , setElementList] = useState([])
    const[showModal , setShowModal] = useState(false)
    const[count , setCount] = useState(0);
    const[winGame , setWinGame ] = useState(false);



    useEffect(() => {
      createNewGame();
      changeWidth(colums*size);
    },[])

    useEffect(() => {
      createNewGame();
    },[resetGame])

    useEffect(() => {
      if(count === rows*colums-numberOfBombs){ 
        setShowModal(true)
        setWinGame(true)
      }
    },[count])
  
    const createNewGame = () => {
      let game = createGame(numberOfBombs , rows , colums )
      setElements(game.elements)
      setShowModal(false);
      setCount(0);
      setWinGame(false);
    }

    const handleupdateFlag = (e , index) => {
      if(!elements[index.x][index.y].open){
        elements[index.x][index.y].flag = !elements[index.x][index.y].flag
        setElements([...elements])
      }
    }

    const handleOpenByClick = (e ,index) => {
      if(!elements[index.x][index.y].flag){
        if(elements[index.x][index.y].title === -1) {
          elements[index.x][index.y].open = true
            setElements([...elements])
            elements.forEach(row=> row.forEach(element => {
                if(element.title === -1) element.open = true
            }))
            setElements([...elements])
            setShowModal(true);

          }
        if(elements[index.x][index.y].title > 0){
          elements[index.x][index.y].open = true
            setElements([...elements])
            setCount(count+1)
        }
        else {
         
          let countOfOpenNeighbors = helpOpenNeighbors(index.x,index.y)
            setElements([...elements])
            setCount(count+countOfOpenNeighbors)
        }
      }
    }

    const helpOpenNeighbors = (x,y) => {
      let countOfOpenNeighborsLocal = 0;
      if((x >= 0 && y >= 0) && (x < rows && y <colums) && !elements[x][y].open && !elements[x][y].flag ){
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
                size={size}
                onClickFlag={handleupdateFlag}/>)))
      setElementList(elementList)
    } ,[elements])
    

  return (
    <div className='Container' style={{width:colums*size}}>
        {showModal ? <Modal onClick={createNewGame} result={winGame}/> : null}
        {elementList}
    </div>
  )
}

export default Container