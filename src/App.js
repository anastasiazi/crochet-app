import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import RowCounter from "./RowCounter";
import PatternManager from "./PatternManager";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/rowcounter" element={<RowCounter />} />
                <Route path="/patternmanager" element={<PatternManager />} />
            </Routes>
        </Router>
    );
}

export default App;
