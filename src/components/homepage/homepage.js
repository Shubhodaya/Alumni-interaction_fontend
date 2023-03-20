
import React, {useEffect,useState} from "react";
import "./homepage.css";
import UserTable from "../userTable/userTable"


const Homepage = ({setLoginUser}) => {




    return (
      <div style={{minHeight:"100vh"}}>
        <div  id="homepage" className="homepage">
        <img src={require('./favicon.png')} alt="abcd" />
          <h1>Alumnis</h1>
         <UserTable/>
           <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
        <footer id="footer">

<a href="https://www.linkedin.com/company/css-nitdgp/"><i class="iconlast fa-brands fa-xl fa-linkedin-in"></i></a>
<a href="https://www.facebook.com/profile.php?id=100089945320887"><i class="iconlast fa-brands fa-xl fa-facebook-f"></i></a>
<a href="https://www.instagram.com/css_nitdgp/"><i class="iconlast fa-brands fa-xl fa-instagram"></i></a>

</footer>
</div>
     
        
    )
}




export default Homepage



