
import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {


    const register = () => {
                const { name, email, password, reEnterPassword } = user
                if( name && email && password && (password === reEnterPassword)){
                    axios.post("http://localhost:9002/register", user)
                    .then( res => {
                        alert(res.data.message)
                        navigate("/login")
                    })
                } else {
                    alert("invlid input")
                }
                
            }


 const navigate = useNavigate()

const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
                setUser({
                    ...user,
                    [name]: value
                })
        
    }

    return (
        <div className="register">
            {console.log("User",user)}
            <h1 style={{color:"white" ,margin:"1rem 0rem"}} >Register</h1>
            <input type="text" name="name"  value={user.name}  placeholder="Your Name" onChange={ handleChange } ></input>
            <input type="email" name="email" value={user.email}   placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password}  placeholder="Your Password" onChange={ handleChange } ></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword}  placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register}>Register</div>
            <div style={{color:"white" ,fontSize:"1.5rem"}}>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    )
}

export default Register