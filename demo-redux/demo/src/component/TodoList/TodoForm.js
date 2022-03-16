import React, { useState } from "react";
import {connect} from 'react-redux';
import { addWord } from "../../action/todoAction";

function TodoFrom({addWord}) {
    const [form, setForm] = useState('');

    const hanleSubmit = () => {
        addWord(form);
        setForm('');
    }
    return ( 
        <div>
            <input value={form} onChange={(e) => setForm(e.target.value)}/>
            <button onClick={() => hanleSubmit()}> Add</button>
        </div>
     );
}

const mapStateToProp = state => ({});
export default connect(mapStateToProp,{addWord}) (TodoFrom);