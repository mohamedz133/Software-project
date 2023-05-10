import './App.css';
import Login from "./pages/Login.js";
import Signup from "./pages/signup";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import {Navigate} from "react-router-dom";


function App() {
    return (
        <div className="App">
        <Navigation />
        </div>
    );
}


export default App;
