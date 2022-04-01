import React from 'react';

function Custumbutton ({onCalculator}) {
    return (
        <div>
            <button onClick = {() => onCalculator('plus')}>+</button>
            <button onClick = {() => onCalculator('minus')}>+</button>
            <button onClick = {() => onCalculator('multi')}>+</button>
            <button onClick = {() => onCalculator('division')}>+</button>
        </div>
    );
}

export default Custumbutton;
