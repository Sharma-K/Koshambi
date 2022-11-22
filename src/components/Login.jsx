import React, {useState} from "react";
import axios from "axios";

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
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
       
        axios.post('http://localhost:5000/register',user )
         .then(res => console.log(res));
    }
    return (
        <form action="" onSubmit={submitHandler}>

            {console.log(user)}
            
            <input type="text" name="username"  placeholder="username" value={user.username} onChange={changeHandler} />
            <input type="email" name="email"  placeholder="email" value={user.email} onChange={changeHandler} />
            <input type="password" name="password" placeholder="password" value={user.password} onChange={changeHandler}  />
            <button >Submit</button>
        </form>
    )
}

export default Login;