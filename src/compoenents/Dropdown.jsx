import {useState } from 'react';
import {React,  useEffect } from "react";
import LinkDrop from './link'
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import {useRef} from "react"




import './Dropdown.css'
function Dropdown({selected , setSelected}){
    const [open , setOpen] = useState(false);
    const [isActive , setIsActive] = useState(false);
    useEffect(()=>{
        let handler = (e)=>{
            if(e.target){
                setOpen(false);
            }
        };

    });
    return (
            <div className="dropdown">
                <div className="dropdown-btn" onClick={e => 
                    setIsActive(!isActive) } onMouseEnter={()=>{setOpen(!open)}}>
                    Levels
                    <span> </span>
                    <span class="fas fa-caret-down"></span>
                </div>
                
                {
                    isActive && (
                        <div className="dropdown-content" >
                            
                                <div onClick={(e) => {setSelected();
                                                        setIsActive(false);}} 
                                className="dropdown-item" >
                                   <LinkDrop pagename={'A1'} option={'Level A1'}/>
                                   <LinkDrop pagename={'A2'} option={'Level A2'}/>
                                   <LinkDrop pagename={'B1'} option={'Level B1'}/>
                                   <LinkDrop pagename={'B2'} option={'Level B2'}/>
                                   <LinkDrop pagename={'C1'} option={'Level C1'}/>
                                </div>
                            
                            
                        </div>
                    )
                }
            </div>
        );
}
export default Dropdown;
