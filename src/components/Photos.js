import React from 'react'
import { Home } from '.'
import pan from '../../src/home.png';
import pan1 from '../../src/home2.png';
import pan2 from '../../src/home3.png';
import pan3 from '../../src/home4.png';

const Photos = () => {
    return (        
    <div>
        <br/>
        <img src={pan}  width={600}  height={315}  alt="NO IMG"/> 
        <img src={pan1} width={600}  height={315} alt="NO IMG"/>   
        <img src={pan2} width={600}  height={315} alt="NO IMG"/> 
        <img src={pan3} width={600}  height={315} alt="NO IMG"/> 
     </div>         
    )
}

export default Photos
