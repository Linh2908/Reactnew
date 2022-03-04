import React from 'react';

function AppInput ({type,name, value, onChangeCallback, ...rest}) {
    return (

        <>
        <hr></hr>
        <input
            type={type}
            value = {value}
            name ={name}
            onChange={(e)=>onChangeCallback(e)}
            {...rest}
        />   
        </>
    );
}

export default AppInput;

