import React, { useEffect} from 'react';
import './connectIMG.css'
function ConnectImg({count,className}) {
   
  let url = `https://randomfox.ca/images/${count}.jpg`

      return (
        <div>
      <img src={url} className={className}/>
        </div>
      );
    
  }
  export default ConnectImg;

  