import { useState, useEffect } from "react";

function Timer({isPaused,reset,setReset}) {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [pausedTime, setPausedTime] = useState(null);

    useEffect(() => {
        let interval;
      
        if(reset){
            setMinutes(0)
            setSeconds(0)
            setReset(false)
        }

        if (!isPaused) {
          interval = setInterval(() => {
            if (seconds < 59) {
              setSeconds((prevSeconds) => prevSeconds + 1);
            } else {
              setSeconds(0);
              setMinutes((prevMinutes) => prevMinutes + 1);
            }
          }, 1000);
        } else {
          clearInterval(interval);
        }
      
        return () => clearInterval(interval);
      }, [isPaused, seconds, minutes]);

    return ( 
        <div className="text-6xl font-bold">
    
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      
        </div>
     );
}

export default Timer;