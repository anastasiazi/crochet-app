import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./RowCounter.css"

function RowCounter() {
    const [count, setCount] = useState(0);

    return (
        <div className="rowCounter">
            <h1>Row Counter</h1>
            <p>{count}</p>
            <div className="row">
                <button onClick={() => setCount(count - 1)}>Remove row</button>
                <button onClick={() => setCount(count + 1)}>Add Row</button>
            </div>
            <div className="row">
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
            <div className="row">
                <Link to="/" className="button">Go back</Link>
                <Link to="/patternmanager" className="button">Add pattern</Link>
            </div>
        </div>
);
}

export default RowCounter;
