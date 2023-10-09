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
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },

            {
                path: '/contactUs',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
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
            },
            {
                path: '*',
                element: <div><img src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1701907200&v=beta&t=Lg5fpA1ixZPHlGbh8EATdeIQjh6CN25qdOyIpRvuRIU" alt="" /></div>
            }
        ]
    },
]);


export default Route;