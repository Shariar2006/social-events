import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Contact from "../Contact/Contact";
import Register from "../Register/Register";

import EventCard from "../EventCard/EventCard";



    const Route = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('events.json')
            },
            
            {
                path: '/contactUs',
                element: <Contact></Contact>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/eventCards/:id',
                element: <EventCard></EventCard>,
                loader: () => fetch('events.json')
            }
          ]
        },
      ]);


export default Route;