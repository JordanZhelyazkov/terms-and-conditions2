
import {  useRef } from "react";
import { useState} from "react/cjs/react.development";

export default function Document({title, content}){
  const [scrolled, setScrolled] = useState(false);
   const div = useRef(null);
  
    const scrolledDown = () => {
      if((div.current.scrollTop + div.current.clientHeight) >= div.current.scrollHeight - 1) {
        setScrolled(true);
      } 
    }
  
   
    return (
      <>
      <h1 className="title" >Terms and Conditions</h1>
      <div className="content" onScrollCapture={scrolledDown} style={{overflowY: 'scroll'}} ref={div} >{content}</div>
      <button disabled={!scrolled} >I Agree</button>
      </>
    )
    
  }   
 