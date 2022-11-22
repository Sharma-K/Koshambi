import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import Home from "./Home";


const Login = (props) => {
  
    
    useEffect(()=> {
        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/home'
        }
    })

    const [checked, setChecked] = useState(false);

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


  async function submitHandler(event){
        event.preventDefault();
       
    // await axios.post('http://localhost:5000/login',user)
    //      .then(res => {
        
    //         if(res.data==="successfully loggedin")
    //         {
    //             setChecked(true); 
              
    //         }
    //         else{
    //             toast.error('Username or password is incorrect',{
    //                 autoClose:1000,
    //                 theme: "colored",
    //                 position: "top-center"
    //             })
    //         }
           
    //     }
    //         );

    try
    {
        const result = await (await axios.post('http://localhost:5000/login',user)).data;

    localStorage.setItem('currentUser', JSON.stringify(result));
    window.location.href='/home'
    
    }
    catch(error)
    {
                     toast.error('Username or password is incorrect',{
                    autoClose:1000,
                    theme: "colored",
                    position: "top-center"
                })
        console.log(error);
    }


    }
    return (

    
    
    <>

 
        <form action="" onSubmit={submitHandler}>
<ToastContainer />

 <div className="log-con">
 
               
               <div className="log-img"></div>
               <div className="log-container">
                   <h1>Login</h1>
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
                   New to Account? <Link to="/register" className="link">Register Here</Link>
                </div>
               </div>
               </div>
               
        </form>
        </>
    )
}

export default Login;