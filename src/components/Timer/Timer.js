import React , {useState , useEffect} from 'react'
import './style.css'

const Timer = ({startGame}) => {
    const[time , setTime] = useState(0);

  const incrementTime = ()  =>{
    if(startGame)
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000);
    else setTime(0);
  }
   
    useEffect(() => {
        incrementTime();
      }, [time , startGame]);

  return (
    <div className='Timer'>
        <span className="material-symbols-outlined">
            timer
        </span>
        {time}
    </div>
  )
}

export default Timer