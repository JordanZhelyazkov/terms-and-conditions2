
import useScrollBottom from "react-scroll-bottom-hook";




export default function Document(props){

   const [scrolled, setScroll] = useScrollBottom();
  
    return (
      <>
      <h1 className="title" value={"Terms and Conditions"}>Terms and Conditions</h1>
      <div className="content" style={{overflowY: 'scroll'}} ref={setScroll} >{props.txt}</div>
      <button disabled={!scrolled}>I Agree</button>
      </>
    )
    
  }   
  