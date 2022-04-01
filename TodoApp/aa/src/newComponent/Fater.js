import React, { useState } from 'react';
import Custumbutton from './CustumButton';

function Fater  ()  {

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    let result =0;
    const handleCalculator = (cal) => {
       
        console.log(cal === 'plus');
        switch (cal) {
            case 'plus':
                 result = (first) + (second);
                 break;
            
            case 'minus' : 
                 result = Number(first) - Number(second);
                 break;
            case 'multi' : 
                 result = Number(first) * Number(second);
                 break;
            case 'divition' : 
                  result = Number(first) /Number(second);
                  break;
            default :
              break;
        }
    };

    return (
        <div>
        <input type={'number'} value={first} onChange = {(e) => setFirst(Number(e.target.value))}/>
        <input type={'number'} value={second} onChange = {(e) => setSecond(Number(e.target.value))}/>
        
        <Custumbutton onCalculator={handleCalculator}/>

            <p>result : {result!==0 && result}</p>
        </div>
    );
}

export default Fater;
