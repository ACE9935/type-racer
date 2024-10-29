import { useEffect, useState,useRef } from "react";
import { useQuery } from "react-query";
import Timer from "./Timer";
import PlayBar from "./PlayBar";


const fetchQuote = async () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
 };

function Box() {

   const { status, data:sx, error,refetch } = useQuery('quotes', fetchQuote, {
      staleTime: Infinity,
      cacheTime:Infinity
    })
    const [win,setWin]=useState(false)
    const [start,setStart]=useState(false)
    const [reset,setReset]=useState(false)

    const handleClick1 = async event => {
      await refetch();
      setStart(true)
    };

    const handleClick2 = async event => {
      await refetch();
      setWin(false)
      setReset(true)
    };

    return ( 
        <div className="bg-blue-500 w-[calc(100vw-20px)] max-w-[600px] aspect-[1.5/1] rounded-xl flex flex-col relative items-center">
        <h1 className='font-bold text-3xl text-white text-center p-3 pb-16 bg-blue-700 rounded-t-xl w-full h-fit'>Type Racer</h1>
        <div className='bg-white w-[80%] aspect-[1.5/1] mb-8 translate-y-[-10%] rounded-xl relative flex flex-col'>
         <div className="grid place-items-center grow">
      <Timer isPaused={win || !start} {...{reset,setReset}}/>
         </div>
           <div className='bg-blue-300 rounded-xl border-dashed border-2 border-black flex flex-col items-center gap-6 pt-8 pb-12 px-5'>
          {start && !win && <PlayBar {...{win,setWin,sx}}/>}
            {!start && <button onClick={handleClick1} className="text-xl bg-green-600 p-5 text-white font-bold hover:bg-green-700">Start Race!</button>}
            {win && <button onClick={handleClick2} className="text-xl bg-green-600 p-5 text-white font-bold hover:bg-green-700">Play Again!</button>}
           </div>
        </div>
       </div>
     );
}

export default Box;