import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './Login.css'


const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const changeHandler =(event) => {

        const { value, name} = event.target;
        


        setUser({
            ...user,
            [name]: value
        })

    }


    function submitHandler(event){
        event.preventDefault();
       
        axios.post('http://localhost:5000/login',user )
         .then(res => console.log(res));
    }
    return (
        <form action="" onSubmit={submitHandler}>
 <div className="log-con">
               
               <div className="log-img"></div>
               <div className="log-container">
                   <h2>Login</h2>
                   <div>
                       <label htmlFor="username">Enter username</label>
                       <input type="text" id="username" name="username" placeholder="username" value={user.username} onChange={changeHandler} />
                   </div>
            
                   <div>
                       <label htmlFor="password">Enter password</label>
                       <input type="password" id="password" name="password" placeholder="password" value={user.password} onChange={changeHandler} />
                   </div>
                   <button className="regb" >Log In</button>
                      
               <div>
                   New to Account? <Link to="/register">Register Here</Link>
                </div>
               </div>
               </div>
        </form>
    )
}

export default Login;