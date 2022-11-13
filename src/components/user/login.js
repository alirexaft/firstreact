import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const nav = useNavigate()



    function checkUsername(username){
        if (username.length < 10 || username.length === 0 || username === ""){
            return "تعداد کاراکتر نام کاربری ورودی باید بیشتر از 10 باشد";
        }
        else {
            return null;
        }
    }

    function checkPassword(password){
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
                alert("Token: " + response.data.token);
            }

        }

        else {
            console.log(localStorage.getItem("Auth-Token"));
            alert("Complete All Fields!");
        }



    }

    return (
        <>

            <section className="vh-100" style={{backgroundColor: "#e2d5de"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-6">

                            <div className="card" style={{borderRadius: "15px"}}>
                                <div className="card-body p-5">

                                    <h6 className="mb-3" style={{fontSize: "25px",
                                        marginLeft: 170,
                                        marginRight: 100}}>Sign In</h6>

                                    <form method="post" onSubmit={handleSubmit}>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form2Example1" className="form-control"
                                                   name="username"
                                                   onChange={(event)=>{
                                                       setUsername(event.target.value);
                                                   }}/>
                                            <label className="form-label" htmlFor="form2Example1">Username</label>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="password" id="form2Example2" className="form-control"
                                                   name="password"
                                                   onChange={(event)=>{
                                                       setPassword(event.target.value);
                                                   }}/>
                                            <label className="form-label" htmlFor="form2Example2">Password</label>
                                        </div>


                                        <div className="row mb-4">
                                            <div className="col d-flex justify-content-center">

                                            </div>
                                        </div>


                                        <button type="submit" className="btn btn-primary btn-block mb-4"
                                        style={{
                                            marginLeft: 170,
                                            marginRight: 100
                                        }}>Sign in
                                        </button>


                                        <div className="text-center">
                                            <p>Not a member? <a href="http://localhost:3000/user/register">Register</a></p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"/>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"/>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"/>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"/>
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )


    // eslint-disable-next-line no-unreachable

}



export default Login;

//http://127.0.0.1:8000/
