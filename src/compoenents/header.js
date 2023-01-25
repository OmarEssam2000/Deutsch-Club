import {React , useState} from "react";
import {ReactDOM} from 'react-dom';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import Contact from "./contact";
import logo from './images/logo.jpg';
import flag from './images/flag.gif'
import Dropdown from './Dropdown'
import './header.css';

  
function Header_row() {
    const [selected, setSelected] = useState('');
    return  <div className="header">
                    <div className="container">
                        <div className="header-row">
                            <div className="logo-div">
                                <div className="half">
                                    
                                    <a href="#">
                                        <img src={logo} alt="logo"/>
                                        <h2>Deutsch Club</h2>
                                    </a>
                                </div>
                                
                            </div>
                            <div className="signup-div">
                                <button>
                                    Sign Up
                                </button>
                                <button>
                                    Login
                                </button>
                            </div>   
                        </div>
                        <nav>
                            <ul >
                                <li><Link to={'/'} component={Contact}>Home</Link></li>
                                <Dropdown selected={(selected)} setSelected={setSelected}/>
                                <li>Dictionary</li>
                                <li><Link to={'/contact'} component={Contact}>Contact</Link></li>
                            </ul>
                        </nav>
                       
                    </div>
                </div>
                
           
  }


 
  
  export default Header_row;
