import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/user/login";
import Register from "./components/user/register";
import Main from "./components/dashboard/main";
import Navbar from "./components/dashboard/navbar"
import Buttons from "./components/buttons";
import UserInfo from "./components/user/userinfo";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/info" element={<UserInfo/>}/>
                    <Route exact path="/buttons" element={<Buttons/>}/>
                    <Route exact path="/nav" element={<Navbar/>}/>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/user/login" element={<Login/>}/>
                    <Route  exact path="/user/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App