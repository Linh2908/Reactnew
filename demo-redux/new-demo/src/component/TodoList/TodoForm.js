import { useState } from "react";

function TodoForm() {
    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        console.log('dang submit');
    }

    return ( 
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
        </div>
     );
}

export default TodoForm;