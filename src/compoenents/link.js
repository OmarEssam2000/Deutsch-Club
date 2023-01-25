import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import './Dropdown.css';


function LinkDrop(props){
            return (
                <Link className="DropClass">{props.option}</Link>
            ); 
}
export default LinkDrop;
