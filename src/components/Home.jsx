import { ToastContainer, toast } from "react-toastify";
import './Home.css'
import React, {useEffect} from "react";
const Home = () => {


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

    useEffect(() =>{
        toast.success("welcome", {
            autoClose:1000,
            theme: "colored",
            position: "top-center"

        });
    },[])

    return (
        <>
        <div className="home-body">
     
     <button onClick={logoutHandler}>Logout</button>

     <div className="Logout"></div>

        <div className="home-con">

            <ToastContainer />
            Dashboard
        </div>
        </div>
        </>
    )
    
}
export default Home;