import './App.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import {useState } from 'react'

function App() {
  const[maxWidth , setMaxWidth] = useState(0);
  const[resetGame , setResetGame] = useState(false);

  const handlerChangeWidth = (width) => {
    setMaxWidth(width)
  }

  const handlerResetGame = () => {
    setResetGame(!resetGame)
  }
  

  return (
    <div className="App">
      <Header width={maxWidth} clickResetGame={handlerResetGame}/>
      <Container changeWidth={handlerChangeWidth} clickResetGame={handlerResetGame} resetGame={resetGame} /> 
    </div>
  );
}

export default App;
