import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css'
import axios from "axios";

const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const changeHandler = (event) => {

        const { value, name } = event.target;



        setUser({
            ...user,
            [name]: value
        })

    }


    function submitHandler(event) {
        event.preventDefault();

        axios.post('http://localhost:5000/register', user)
            .then(res => console.log(res));
    }
    return (
       

            
            <form action="" onSubmit={submitHandler}>

                <div className="reg-con">
               
                <div className="reg-img"></div>
                <div className="reg-container">
                    <h2>Register</h2>
                    <div>
                        <label htmlFor="username">Enter username</label>
                        <input type="text" id="username" name="username" placeholder="username" value={user.username} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="email">Enter email</label>
                        <input type="email" id="email" name="email" placeholder="email" value={user.email} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="password">Enter password</label>
                        <input type="password" id="password" name="password" placeholder="password" value={user.password} onChange={changeHandler} />
                    </div>
                    <button className="regb" >Submit</button>
                       
                <div>
                    Already have an account? <Link to="/">Login</Link>
                 </div>
                </div>
                </div>
            </form>
      
    )
}

export default Register;