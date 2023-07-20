import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RowCounter() {
    const [count, setCount] = useState(0);

    return (
        <div className="rowCounter">
            <h1>Row Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Add Row</button>
            <button onClick={() => setCount(count - 1)}>Decrease Row</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <Link to="/patterns"><button>Add Pattern</button></Link>
        </div>
    );
}

export default RowCounter;
