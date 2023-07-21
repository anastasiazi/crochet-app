import { Link } from "react-router-dom";
import './MainPage.css';
import logo from './logo.png'; // Replace this with the path to your logo file

function MainPage() {
    return (
        <div className="main">
            <img src={logo} alt="Logo" className="logo" />
            <div className="buttons">
                <Link to="/rowcounter" className="button">Row Counter</Link>
                <Link to="/patternmanager" className="button">Pattern Manager</Link>
            </div>
        </div>
    );
}

export default MainPage;
