import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RowCounter from './RowCounter';
import './RowCounter.css';
import './PatternManager.css';
import PatternManager from './PatternManager';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/patterns" element={<PatternManager />} />
                    <Route path="/" element={<RowCounter />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
