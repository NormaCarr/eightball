
import React, { useState } from "react";
import answer from './answer';
import cirStyle from "./cirStyle";


    
function Eightball(){
    /* Generates a random index to get a msg and 
    color from the array of objects "answer" */
    let index=Math.floor(Math.random()*answer.length);
    /* handleClick sets the mesg and color when the user gives a click */
    const handleClick = () => {
        setMsg(answer[index].msg);
        setCircle(cirStyle(answer[index].color)); 
        if(answer[index].color==="goldenrod")
            setCountY(countY+1)
        else
           if(answer[index].color==="red")
               setCountR(countR+1)
           else
              if(answer[index].color==="green")
                 setCountG(countG+1)    
      }

      /* resetClick initialize all the variables when 
      the user click the button reset */
      
      const resetClick = () => {
        setMsg("Think of a Question");
        setCircle(cirStyle("black","white"));
        setCountR(0);
        setCountG(0);
        setCountY(0);
      }
      
    /* Initialization of the state*/    
    const [circle, setCircle] = useState(cirStyle("black","white"));
    const [msg, setMsg] = useState("Think of a Question");
    const [countG,setCountG] =useState(0);
    const [countY,setCountY] =useState(0);
    const [countR,setCountR] =useState(0);
           
    return(<div className='eightball'>
             <div onClick={handleClick} style={circle}><b>{msg} </b>
             </div>
             <p>count Green {countG}</p>
             <p>count Red {countR}</p>
             <p>count Goldenrod {countY}</p>
             <button className="btn" style={{backgroundColor:"green"}} onClick={resetClick} >
               <b>Reset</b>
              </button>
            </div>
          );  
}

export default Eightball;