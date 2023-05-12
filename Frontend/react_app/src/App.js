import "./pages/css/world.css";
import React ,{Component}from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Navigation from './components/Navigation'
import Signup from "./pages/Signup";

class  App extends Component {
    render() {
        return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>
            <Routes>

                <Route path="/" exact Component={Home}></Route>
                <Route path="/About" Component={About}></Route>
                <Route path="/Login" Component={Login}></Route>
                <Route path="/Contactus" Component={Contactus}></Route>
                <Route path="/Signup"   component={Signup} ></Route>

            </Routes>
            </div>

        </BrowserRouter>

        );
    }
}


export default App;
