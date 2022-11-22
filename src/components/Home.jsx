import { ToastContainer, toast } from "react-toastify";
import './Home.css'
import React, {useEffect} from "react";
const Home = () => {

    useEffect(() =>{
        toast.success("welcome", {
            autoClose:1000,
            theme: "colored",
            position: "top-center"

        });
    },[])

    return (
<div className="home-body">

     Logout

        <div className="home-con">
            <ToastContainer />
            This is home page
        </div>
        </div>
    )
    
}
export default Home;