import './App.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import {useState, useEffect } from 'react'

function App() {
  const[startGame , setStartGame] = useState(false)
  const[maxWidth , setMaxWidth] = useState(0);
  const[resetGame , setResetGame] = useState(false);
  const[level , setLevel] = useState(0)

 
  const handlerChangeWidth = (width) => {
    setMaxWidth(width)
  }

  const handlerResetGame = () => {
    setResetGame(!resetGame)
    setStartGame(false)
  }

  const handlerStartGame = (value) => {
    setStartGame(value)
  }
  const handlerChangeLevel = (value) => {
    setLevel(value)
  }
 

  return (
    <div className="App">
      <Header 
          width={maxWidth} 
          startGame={startGame}
          clickChangeLevel={handlerChangeLevel}
          clickResetGame={handlerResetGame}/>
      <Container 
          changeWidth={handlerChangeWidth} 
          clickResetGame={handlerResetGame}
          clickStartGame={handlerStartGame}
          levelGame = {level}
          resetGame={resetGame} /> 
    </div>
  );
}

export default App;
