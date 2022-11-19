import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import {AuthCheck} from "../test";



const Login = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const nav = useNavigate()

    useEffect( () => {
        if(!(AuthCheck())){
            nav('/');
        }
    },[]);

    function checkUsername(username){
        if (username == null){
            return "تعداد کاراکتر نام کاربری ورودی باید بیشتر از 10 باشد";
        }
        if (username.length < 10 || username.length === 0 || username === ""){
            return "تعداد کاراکتر نام کاربری ورودی باید بیشتر از 10 باشد";
        }
        else {
            return null;
        }
    }

    function checkPassword(password){
        if (password == null){
            return "تعداد کاراکتر نام کاربری ورودی باید بیشتر از 10 باشد";
        }
        if (password.length < 10 || password.length === 0 || password === ""){
            return "تعداد کاراکتر رمز ورودی باید بیشتر از 10 باشد";
        }
        else {
            return null;
        }
    }

    const handleSubmit = async (event) => {
        let err;
        await event.preventDefault();
        // eslint-disable-next-line no-use-before-define
        const inputUsername = await username;

        // eslint-disable-next-line no-use-before-define
        const inputPassword = await password;

        if (!(checkUsername(inputUsername)) && !(checkPassword(inputPassword))){
            const formData = {
                username: username,
                password: password
            }
            const response = await axios.post("https://reqres.in/api/login", formData).catch(function (error){
                if(error){
                    err = error.response;
                    alert(error.response.status);
                }
            });
            if (err){
                alert("NO");
            }
            else {
                localStorage.setItem("Auth-Token", response.data.token);
                alert("Wellcome");
                nav("/");
            }

        }

        else {
            console.log(localStorage.getItem("Auth-Token"));
            alert("Complete All Fields!");
        }



    }

    return (
        <>

            <div className="container" style={{
                backgroundColor: "#0700DE"
            }}>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content />
                <meta name="author" content />
                <title>SB Admin 2 - Login</title>
                {/* Custom fonts for this template*/}
                <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
                {/* Custom styles for this template*/}
                <link href="css/sb-admin-2.min.css" rel="stylesheet" />
                <div className="container">
                    {/* Outer Row */}
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* Nested Row within Card Body */}
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."
                                                               onChange={(event => {
                                                                   setUsername(event.target.value);

                                                               })}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"
                                                               onChange={(event => {
                                                                   setPassword(event.target.value);

                                                               })}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                            <label className="custom-control-label" htmlFor="customCheck">Remember
                                                                Me</label>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary btn-user btn-block" onClick={handleSubmit}>
                                                        Login
                                                    </button>
                                                    <hr />
                                                    <a href="index.html" className="btn btn-google btn-user btn-block">
                                                        <i className="fab fa-google fa-fw" /> Login with Google
                                                    </a>
                                                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                        <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                                                    </a>
                                                </form>
                                                <hr />

                                                <div className="text-center">
                                                    <a className="small" href="/register">Create an Account!</a>
                                                </div>
                                            </div>
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


    // eslint-disable-next-line no-unreachable

}



export default Login;

//http://127.0.0.1:8000/
