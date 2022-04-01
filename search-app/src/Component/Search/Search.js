import React from 'react';
import { useState } from 'react';

function Search  () {

    const [name, setName] = useState('');

    const arrayList = ['apple', 'banana', 'oringe', 'grapes'];

    const newArray = arrayList.filter(item => item.match(name))


    return (
        <div>
            <div>
                <input  value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                {
                    newArray && newArray.map(item => (
                        <p key={item}>{item}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default Search;
