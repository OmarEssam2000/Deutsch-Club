import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './compoenents/contact';
import {
  createBrowserRouter ,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"contact",
    element: <Contact/>
  },
  
])




ReactDOM.render(
  <RouterProvider router={router}/>,
  document.getElementById("root")
);


