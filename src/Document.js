
import {  useRef } from "react";
import { useState} from "react";

export default function Document({title, content}) {
  const [scrolled, setScrolled] = useState(false);
   const div = useRef(null);
  
    const scrolledDown = () => {
      if(div.current && !scrolled) {
        if(div.current.scrollTop + div.current.clientHeight === div.current.scrollHeight){
          setScrolled(true);
        }
      }
    }
  
   
    return (
      <>
      <h1 class="title" >{title}</h1>
      <div className="content" onScrollCapture={scrolledDown} style={{overflowY: 'scroll'}} ref={div} >{content}</div>
      <button disabled={!scrolled} >I Agree</button>
      </>
    )
    
  }   
  // div?.current.scrollTop + div.current.clientHeight) >= div.current.scrollHeight - 1