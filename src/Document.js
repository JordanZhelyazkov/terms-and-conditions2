import { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development"



export default function Document(props){
   
  const divContent = useRef();

   const [scrolled, setScroll] = useState(false);
  
  
   useEffect(()=> {
   if(divContent.current.scrollToBottom){
     setScroll(true)
   } else {
     setScroll(false);
   }
      
   }, [scrolled])
    return (
      <>
      <h1 className="title" value={"Terms and Conditions"}>Terms and Conditions</h1>
      <div className="content" ref={divContent} >{props.txt}</div>
      <button disabled={`${scrolled === true ? true : false}`}>I Agree</button>
      </>
    )
    
  }   
  