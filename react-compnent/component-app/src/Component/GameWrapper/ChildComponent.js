import React, { memo, useEffect } from 'react';

function Childcomponent ({text , isShow}) {

   useEffect(() => {
       const message = isShow ? 'Child component is shown now!' : 'Child component was hidden!';
       alert(message);
   }, []);
    return (
        <>
            <h3>{text}</h3>
            
        </>
    );
}

export default memo(Childcomponent);
