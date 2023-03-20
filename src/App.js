import './App.css';
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import AlumniRegister from "./components/alumniRegister/alumniRegister"
import AlumniHomePage from "./components/alumniHomePage/alumniHomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import React from "react";


function App() {


  const [ user, setLoginUser] = useState({})

  return (
    <Router>
    <Routes>
    <Route path="/alumniHomePage" element={<div className="App"><AlumniHomePage /></div>} />
    <Route exact path="/"  element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> :

    <div className="App" > 
    <div style={{margin:"5rem" }}><Login setLoginUser={setLoginUser}/></div> 
    <div style={{margin:"5rem" }} ><AlumniRegister /></div>
    </div> } 

    />
    <Route path="/login" element={ <div className="App"> <Login setLoginUser={setLoginUser}/> </div>} />
    <Route path="/register" element={<div className="App"> <Register /> </div>} />
    <Route path="/alumniRegister" element={<div className="App"> <AlumniRegister /> </div>} />
    </Routes>
  </Router>

  );
}

export default App;
