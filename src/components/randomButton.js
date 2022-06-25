import React, { useState } from 'react';
import Picture from './picture';

import './randomButton.css';



function RandomButton(){
    const [className, setClassName] = useState("container");

let randoms = function(){ return Math.ceil(Math.random()*121)}; 
let init = randoms();
const [count, setCount] = useState(init);
let cssclass = () => className == "container" ? "container1" : "container";
  
return(
    <div>
            <div className="rightB">
        <a onClick={() => {
            setCount(randoms());
            setClassName(cssclass());
            }}>
    <div className="circler">
        <div className="innerr">
        </div>
    </div> 
        </a>
    </div>
<Picture count={count} className={className}/>
    </div>
    
)
}

export default RandomButton;