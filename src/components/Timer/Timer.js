import React , {useState , useEffect} from 'react'
import './style.css'

const Timer = () => {
    const[time , setTime] = useState(0);


    useEffect(() => {
        function incrementTime() {
          setTimeout(() => {
            let newTime = time + 1;
            setTime(newTime);
          }, 1000);
        }
        incrementTime();
      }, [time]);

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