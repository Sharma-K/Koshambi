import { ToastContainer, toast } from "react-toastify";
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
        <div>
            <ToastContainer />
            This is home page
        </div>
    )
    
}
export default Home;