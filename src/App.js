import  Document  from "./Document";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState('');
     useEffect(() => {
       const abortCtrl = new AbortController();
       
      fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
      .then(res => res.text())
      .then(data => {
          setText(data);
      })
      return () => abortCtrl.abort();
    }, []);
      
  
  
  
  
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <Document txt={text} />
          
          {/* Edit the <code>./src</code> folder to add components. */}
         </div>
      </div>
    </div>
  );
  }

export default App;
