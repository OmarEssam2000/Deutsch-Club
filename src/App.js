import React from "react";
import Headerrow from "./compoenents/header.js";
import Background from "./compoenents/bodybackground.js"
import Contact from "./compoenents/contact.js";
import logo from "./compoenents/images/flag.gif";

import './App.css';

function App(){
  return (
    <div className="App" >
      <Headerrow/>
      <Background/>
    </div>
    
  );
}





export default App;
