import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Route from './Components/Routes/Router';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Route} />
  </React.StrictMode>,
)
