import React from "react";
import "./alumniHomePage.css";
import { useNavigate } from "react-router-dom"


function AlumniHomepage() {

    const navigate = useNavigate()    

    return(

        <div className="alumni">
         <h1 style={{color:"white"}}>Alumni Sucessfully Registered !</h1>
         <div className="button" onClick={() =>{navigate("/")}} >Back</div>
        </div>

    

    );
}

export default AlumniHomepage