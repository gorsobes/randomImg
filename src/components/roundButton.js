import React, { useState } from 'react';
import './roundButton.css';

const THEME_LIGHT_HEX = '#E2E8F0';
const THEME_DARK_HEX = '#1A202C';
 
const THEMES = {
 Light: THEME_LIGHT_HEX,
 Dark: THEME_DARK_HEX
};

function RoundButton(){

   const initial = THEMES.Light;
   
    const [count, setCount] = useState(initial);
    document.body.style.backgroundColor = count;
    function applyTheme(count) {
        document.body.style.color = count === THEMES.Light ? setCount(THEMES.Dark) : setCount(THEMES.Light);
       }
return(
    <div>
        <a onClick={() => applyTheme(count)}>
    <div className="circle">
        <div className="inner">
        </div>
    </div> 
        </a>
    </div>
)
}

export default RoundButton;