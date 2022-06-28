import React, { useState } from 'react';
import Picture from './picture';
import './randomButton.css';

function RandomButton(){
    const [classNam, setClassName] = useState("container");
    const images = require.context('../../public/img', true);
let randoms = function(){ return Math.ceil(Math.random()*100)}; 
let init = randoms();
const [count, setCount] = useState(init);
let cssclass = () => classNam == "container" ? "container1" : "container";
let url = images(`./${count}.jpg`);
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
<Picture url={url} classNam={classNam}/>
    </div>
    
)
}

export default RandomButton;