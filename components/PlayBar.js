import { useEffect,useRef,useState } from "react"

function PlayBar({win,setWin,sx}) {

    const text = useRef();
    const [counter,setCounter]=useState(0)
    const [count,setCount]=useState(0)
    const [word,setWord]=useState(sx.split(" ")[0]+' ')
    const [val,setVal]=useState('')
    const [error,setError]=useState(false)

    function Check(val,word){
        if(count<sx.split(' ').length) document.getElementById(String(count)).innerHTML=sx.split(' ')[count]+' '
           for(let x=0;x<val.length;x++){
              let xx=sx.split(' ')[count].split('')
              if(count!=sx.split(' ').length-1) xx.push(' ')
  
            if(val[x]!=word[x]){
              xx[0]='<span class="bg-red-400">'+xx[0]
              xx[x]=xx[x]+'</span>'
              xx=xx.join('')
              if(count<sx.split(' ').length-1) xx+=' '
              document.getElementById(String(count)).innerHTML=xx
              return false
            }else{
              xx[0]='<span class="text-green-300">'+xx[0]
              xx[x]=xx[x]+'</span>'
              xx=xx.join('')
              if(count<sx.split(' ').length-1) xx+=' '
              document.getElementById(String(count)).innerHTML=xx
            }
           }
          
           return true
          
          }

          useEffect(()=>{
      
           if(Check(val,word)) setError(false)
           else setError(true)
          
           if(val==word){
            
              document.getElementById(String(count)).classList.add('text-green-300')
              let vc=sx.split(" ")[count+1]
              if(count!=sx.split(' ').length-2) vc+=' '
              setWord(vc)
              setVal('')
              setCount(count + 1)
             
           }
           if(count==sx.split(" ").length){
              setWin(true)
           }
      
          },[val])

    return ( 
        <>
           <p className='text-lg font-[500] text-center w-full select-none' ref={text}>{sx.split(' ').map((e,i)=><span key={i} className="" id={String(i)}>{e} </span>)}</p>
           <input
           disabled={win?true:false}
           autoFocus={true}
           type='text' value={val}
            onChange={(e) => {
            setVal(e.target.value)
            
            }} 
            className={`w-full bg-${error?'red-400':'white'}`}/>
        </>
     );
}

export default PlayBar;