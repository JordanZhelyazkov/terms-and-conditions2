
import {  useRef } from "react";
import { useState} from "react/cjs/react.development";

export default function Document(props) {
  const [scrolled, setScrolled] = useState(false);
   const div = useRef(null);
  
    const scrolledDown = () => {
      if((div.current.scrollTop + div.current.clientHeight) >= div.current.scrollHeight - 1) {
        setScrolled(true);
      } 
    }
  
   
    return (
      <>
      <h1 className="title" >{props.title}</h1>
      <div className="content" onScrollCapture={scrolledDown} style={{overflowY: 'scroll'}} ref={div} >{props.content}</div>
      <button disabled={!scrolled} >I Agree</button>
      </>
    )
    
  }   
