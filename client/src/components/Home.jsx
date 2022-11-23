import { ToastContainer, toast } from "react-toastify";
import './Home.css'
import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "./Loader";
const Home = () => {
  

    const [loader, setLoader] = useState(true);
    const [usersLists, setUsers] = useState([]);

    useEffect(()=>{

       async function fetch()
        { const users = await (await axios.get('/database')).data;
        setLoader(false);
        setUsers(users);
       
            toast.success("welcome", {
            autoClose:1000,
            theme: "colored",
            position: "top-center"

        });
      
    
    }
    fetch();
    
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
         <ToastContainer />

        <div className="home-body">
       
        <div className="title"> Dashboard</div>
     <button onClick={logoutHandler} className="logb">Logout</button>
     
     <div className="Logout"></div>

        <div className="home-con">
            

<div className="head">
         <div>Name</div>
         <div>Email</div>
         </div>
         {loader && <Loader/> }
         {usersLists.map((user)=> {
            return (
                <div className="user" key={user._id}>
                 
                 <div className="name">{user.username}</div>
                 <div className="email">{user.email}</div>

                </div>
            )
         })}

        </div>
        </div>
        </>
    )
    
}
export default Home;