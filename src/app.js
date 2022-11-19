import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/user/login";
import Register from "./components/user/register";
import Main from "./components/dashboard/main";
import Navbar from "./components/dashboard/navbar"
import Buttons from "./components/dashboard/buttons";
import UserInfo from "./components/user/userinfo";
import Colors from "./components/dashboard/colors";
import Ant from "./components/ant";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/ant" element={<Ant/>}/>
                    <Route exact path="/colors" element={<Colors/>}/>
                    <Route exact path="/info" element={<UserInfo/>}/>
                    <Route exact path="/buttons" element={<Buttons/>}/>
                    <Route exact path="/nav" element={<Navbar/>}/>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route  exact path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App