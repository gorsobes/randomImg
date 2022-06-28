import React from 'react';
import './connectIMG.css'
function ConnectImg({url,classNam}) {
  return (
    <div>
  <img src={url} className={classNam} alt="лисички"/>
    </div>
  );
} 
  export default ConnectImg;

  