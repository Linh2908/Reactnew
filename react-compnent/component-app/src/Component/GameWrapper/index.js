import React, { useState } from 'react';
import Childcomponent from './ChildComponent';

function GameWrapper () {

    const [isChildComponentHidden, setIsChildComponentHidden] = useState(false);

    const handleToggleShow = () => {
        setIsChildComponentHidden(!isChildComponentHidden);
    }

    return (
        <div>
            <button onClick={handleToggleShow}>{ isChildComponentHidden ? 'Show' : 'Hidden'}</button>
            {isChildComponentHidden && <Childcomponent text='Day la noi dung truyen tu GameWapper' isShow={isChildComponentHidden}/>}
        </div>
    );
}

export default GameWrapper;
