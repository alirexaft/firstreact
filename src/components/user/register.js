import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import {useState} from "react";
import Alert from 'react-bootstrap/Alert';



const Register = () => {
    const [username, setUsername] = useState(null);
    const [password1, setPassword1] = useState(null);
    const [password2, setPassword2] = useState(null);

    let alertt;

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



    const handleClick = async (event) => {
        await event.preventDefault();
        let err;

       if ((!(checkUsername(username)) && !(checkPassword(password1) && !(checkPassword(password2)))) && password2 === password1){
            const formData = {
                username: username,
                password: password1
            }
            const response = await axios.post("https://reqres.in/api/register", formData).catch(function (error){
                if(error){
                    err = error.response;
                    alertt = "WRONG!"
                }
            });

            if (err){
                alertt = "WRONG!"
            }

            else {
                localStorage.setItem("Auth-Token", response.data.token);
                alertt = "WRONG!"
            }
        }

        else {

            alertt = "WRONG!"
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

                                    <h6 className="mb-4" style={{fontSize: "25px",
                                        marginLeft: 160,
                                        marginRight: 100}}>Sign Up</h6>

                                    <form method="post" onSubmit={handleClick}>


                                        <div className="form-outline mb-4">
                                            <input onChange={(event => {
                                                setUsername(event.target.value);

                                            })}
                                                   type="text" id="form2Example1" className="form-control"
                                                   name="username"/>
                                            <label className="form-label" htmlFor="form2Example1">Username</label>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input onChange={(event => {
                                                setPassword1(event.target.value);

                                            })}
                                                           type="password" id="form2Example2" className="form-control"
                                                   name="password1"/>
                                            <label className="form-label" htmlFor="form2Example2">Password</label>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input
                                            onChange={(event => {
                                                setPassword2(event.target.value);

                                            })}
                                                type="password" id="form2Example2" className="form-control"
                                                   name="password2"/>
                                            <label className="form-label"
                                                   htmlFor="form2Example2">Password(Retype)</label>
                                        </div>




                                        <button type="submit" className="btn btn-primary btn-block mb-4" style={{
                                            marginLeft: 160,
                                            marginRight: 100
                                        }}>Sign Up
                                        </button>


                                        <div className="text-center">
                                            <p>Do you have an account? <a href="/user/login">Login</a></p>

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


}



export default Register;

//http://127.0.0.1:8000/
