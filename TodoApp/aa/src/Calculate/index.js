import React,{ useEffect, useState } from "react";

function Caculator() {
    const [state, setstate] = useState(0);
    const [num, setNum] = useState(0);
    const [_num, set_num] = useState(0);

    const handlePlus = () => {


        if(state >= 10) {
            alert('limited');
        }

        
        if(!num) {
            setstate(state  +  Number(num))
        }
    };


    const handleMinus = () => {
        setstate(state - Number(num));
    };

   
    
    

    return ( 
        <div>
            <input value={num } onChange = {(e) => setNum(e.target.value)} type={'number'}/>
            <button onClick={handlePlus}>+ </button> {state} <button onClick={handleMinus}>-</button>
        </div>
     );
}

export default Caculator;