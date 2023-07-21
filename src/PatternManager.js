import React from 'react';
import { Link } from 'react-router-dom';
import "./PatternManager.css"

function PatternManager() {
    return (
        <div className="patternManager">
            <h1>Pattern Manager</h1>
            <form>
                <input type="file" accept=".pdf"/>
                <button type="submit">Upload Pattern</button>
            </form>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
}

export default PatternManager;
