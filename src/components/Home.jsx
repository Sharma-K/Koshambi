import { ToastContainer, toast } from "react-toastify";
import './Home.css'
import React, {useEffect, useState} from "react";
import axios from "axios";
const Home = () => {

    const [usersLists, setUsers] = useState([]);

    useEffect(async()=>{

       
        const users = await (await axios.get('http://localhost:5000/database')).data;
        setUsers(users);
        toast.success("welcome", {
            autoClose:1000,
            theme: "colored",
            position: "top-center"

        });
    
    },[])


    const  logoutHandler = () => {
        try
         {
            localStorage.removeItem('currentUser')
            window.location.href='/'

         }
         catch(e){
            console.log(e);
         }
    }

    

    return (
        <>
        <div className="home-body">
        <ToastContainer />
     
     <button onClick={logoutHandler}>Logout</button>

     <div className="Logout"></div>

        <div className="home-con">

           <div className="title">
            Dashboard
            </div>
            <div className="users-lists">
                {usersLists.map(user => {

                    return ( 
                        <div>
                            {user.username}
                        </div>
                    )
                })}
            </div>

        </div>
        </div>
        </>
    )
    
}
export default Home;