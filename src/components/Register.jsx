import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './Register.css'
import axios from "axios";
import Home from "./Home";

const Register = () => {

    const [checked, setChecked] = useState(false);

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


    async function submitHandler(event){
        event.preventDefault();
 

     if(user.name!="" && user.email!="" && user.password!="")
        {
            const result = await (await axios.post('http://localhost:5000/register',user)).data;

    localStorage.setItem('currentUser', JSON.stringify(result));
    window.location.href='/home'
    
    }
   else
    {
                     toast.error('Invalid Input',{
                    autoClose:1000,
                    theme: "colored",
                    position: "top-center"
                })
        
    }


    }
    return (
       
        <>
       

        {!checked &&
            
            <form action="" onSubmit={submitHandler}>
  <ToastContainer />
                <div className="reg-con">
               
                <div className="reg-img"></div>
                <div className="reg-container">
                    <h1>Register</h1>
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
                    Already have an account? <Link to="/" className="link">Login</Link>
                 </div>
                </div>
                </div>
            </form>}
            </>
      
    )
}

export default Register;