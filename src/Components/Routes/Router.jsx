import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Contact from "../Contact/Contact";
import Register from "../Register/Register";

import EventCard from "../EventCard/EventCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BookedEvent from "../Booked/BookedEvent";



    const Route = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },
            
            {
                path: '/contactUs',
                element: <Contact></Contact>
            },
            {
                path: '/bookedEvents',
                element: <PrivateRoute><BookedEvent></BookedEvent></PrivateRoute>
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
                element: <PrivateRoute><EventCard></EventCard></PrivateRoute>,
                loader: () => fetch('/events.json')
            }
          ]
        },
      ]);


export default Route;