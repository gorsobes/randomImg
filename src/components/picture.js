import React from 'react';
import ConnectImg from './connectIMG';
import './picture.css';
function Picture({url,classNam}){

  
return(
    
      <div className="wrap">
 <ConnectImg url={url} classNam={classNam}/>
</div>
    
)
}

export default Picture;

