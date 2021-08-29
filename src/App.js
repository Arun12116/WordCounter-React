import React, { useState } from 'react'
import TextForm from "./TextForm"
import Navbar from './Navbar';
import About from "./About"
import{BrowserRouter as Router,Switch,Route,}from "react-router-dom";

const App = () => {
  const [mode,setmode]=useState("light");
  
  //wether dark mode is on or off
  const togglemode=(()=>{
    if (mode==="light"){
      setmode("dark")
    document.body.style.backgroundColor="grey";

    }else{
      setmode("light")
    document.body.style.backgroundColor="white";

    }
  })

  return (
    <>
    
    <Router>
      <Navbar title="Home" about="About-us"  mode={mode} togglemode={togglemode}/>
      
      <div className="container my-3">
      {/* <TextForm heading="Enter the text To anlyze"/> */}

      </div>
    
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/textForm">
            <TextForm />
          </Route>
          
        </Switch>

      </Router>
    
    </>
  )
}

export default App
