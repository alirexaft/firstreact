import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import {AuthCheck} from "../test";

const Register = () => {
    const [username, setUsername] = useState(null);
    const [password1, setPassword1] = useState(null);
    const [password2, setPassword2] = useState(null);
    const nav = useNavigate();

    useEffect( () => {
        if(!(AuthCheck())){
            nav('/');
        }
    },[]);

    let err;

    function checkUsername(username){
        if (username === null){
            return "نام کاربری نمیتواند خالی باشد";
        }
        if (username.length < 10 || username.length === 0 || username === ""){
            return "تعداد کاراکتر نام کاربری ورودی باید بیشتر از 10 باشد";
        }
        else {
            return null;
        }
    }

    function checkPassword(password){
        console.log(password.length);
        if (password === null){
            return "رمز نمیتواند خالی باشد";
        }
        if (password.length < 10 || password.length === 0 || password === ""){
            return "تعداد کاراکتر رمز ورودی باید بیشتر از 10 باشد";
        }
        else {
            return null;
        }
    }



    const handleClick = async (event) => {
        let err;
        await event.preventDefault();

        if (!(checkUsername(username)) && !(checkPassword(password1)) && password2===password1){
            const formData = {
                username: username,
                password: password1
            }
            const response = await axios.post("https://reqres.in/api/register", formData).catch(async function (error) {
                if (error) {
                    err = await error.response;
                    await alert(error.response.status);
                }
            });
            if (err){
                alert(err);
            }
            else {
                await localStorage.setItem("Auth-Token", response.data.token);
                await alert("Welcome");
                await nav("/");
            }

        }
        else {
            if (checkUsername(username)){
                alert(checkUsername(username));
            }

            if (checkPassword(password1)){
                alert(checkPassword(password1))
            }

            if (checkPassword(password2)){
                alert(checkPassword(password2))
            }
            if (password1 !== password2){
                alert("Not match");
            }
        }



    }

    return (
        <>
            <div>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content />
                <meta name="author" content />
                <title>SB Admin 2 - Register</title>
                {/* Custom fonts for this template*/}
                <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
                {/* Custom styles for this template*/}
                <link href="css/sb-admin-2.min.css" rel="stylesheet" />
                <div className="container">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                                <div className="col-lg-7">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group row">

                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user" id="exampleInputEmail" placeholder="Username"
                                                       onChange={(event => {
                                                           setUsername(event.target.value);
                                                       })}
                                                />
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"
                                                           onChange={(event => {
                                                               setPassword1(event.target.value);

                                                           })}/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password"
                                                           onChange={(event => {
                                                               setPassword2(event.target.value);

                                                           })}/>
                                                </div>
                                            </div>
                                            <button  className="btn btn-primary btn-user btn-block" onClick={handleClick}>
                                                Register Account
                                            </button>
                                            <hr />
                                            {/*<a href="index.html" className="btn btn-google btn-user btn-block">*/}
                                            {/*    <i className="fab fa-google fa-fw" /> Register with Google*/}
                                            {/*</a>*/}
                                            {/*<a href="index.html" className="btn btn-facebook btn-user btn-block">*/}
                                            {/*    <i className="fab fa-facebook-f fa-fw" /> Register with Facebook*/}
                                            {/*</a>*/}
                                        </form>
                                        <hr />
                                        {/*<div className="text-center">*/}
                                        {/*    <a className="small" href="forgot-password.html">Forgot Password?</a>*/}
                                        {/*</div>*/}
                                        <div className="text-center">
                                            <a className="small" href="/login">Already have an account? Login!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bootstrap core JavaScript*/}
                {/* Core plugin JavaScript*/}
                {/* Custom scripts for all pages*/}
            </div>

        </>
    )


}



export default Register;

//http://127.0.0.1:8000/
