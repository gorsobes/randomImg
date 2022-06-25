import React from 'react';
import ConnectImg from './connectIMG';
import './picture.css';
function Picture({count,className}){

  
return(
    
      <div class="wrap">
 <ConnectImg count={count} className={className}/>
</div>
    
)
}

export default Picture;

