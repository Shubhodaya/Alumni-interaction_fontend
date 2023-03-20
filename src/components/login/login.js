
import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {
       

        const navigate = useNavigate()    //change
        const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const login = () => {
                axios.post("http://localhost:9002/login", user)
                .then(res => {
                    alert(res.data.message)
                    setLoginUser(res.data.user)
                    navigate("/")
                })
            }

    
    return (
        <div className="login">
       
                   <h1 style={{color:"white" ,margin:"1rem 0rem"}}>Student Login</h1>
                    <input type="email" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
                    <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} ></input>
                    <div className="button" onClick={login}>Login</div>
                    <div style={{color:"white" ,fontSize:"1.5rem"}} >or</div>
                    <div className="button"  onClick={() => navigate("/register")} >Register</div>
                </div>
    )
}

export default Login