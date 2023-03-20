import React, { useState } from "react"
import "./alumniRegister.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AlumniRegister = () => {


    const alumniRegister = () => {
                const { name, email, company,experience} = user
                if( name && email && company && experience){
                    axios.post("http://localhost:9002/alumniRegister", user)
                    .then( res => {
                        alert(res.data.message)
                        navigate("/alumniHomePage")
                    })
                } else {
                    alert("invlid input")
                }
                
            }


 const navigate = useNavigate()

const [ user, setUser] = useState({
        name: "",
        email:"",
        company: "",
        experience:""
    })

    const handleChange = e => {
        const { name, value } = e.target
                setUser({
                    ...user,
                    [name]: value
                })
        
    }

    return (
        <div className="alumniRegister">
            {console.log("User",user)}
            <h1 style={{color:"white" ,margin:"1rem 0rem"}} >Alumni Register</h1>
            <input type="text" name="name"  value={user.name}  placeholder="Your Name" onChange={ handleChange } ></input>
            <input type="email" name="email" value={user.email}   placeholder="Your Email" onChange={ handleChange }></input>
            <input type="text" list="company-choice" name="company" value={user.company}  placeholder="Enter Company name" onChange={ handleChange } />
            <datalist id="company-choice">
  <option value="Microsoft"></option>
  <option value="Amazon"></option>
  <option value="Google"></option>
  <option value="Facebook"></option>
  <option value="JPMC"></option>
</datalist>   
           
            <input type="number" name="experience" value={user.experience}   placeholder="Experience in Years" onChange={ handleChange }></input>
            <div className="button" onClick={alumniRegister}>Register</div>
            
        </div>
    )
}

export default AlumniRegister














