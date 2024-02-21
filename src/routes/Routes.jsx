import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Routes,
  } from "react-router-dom";
import Root from '../layout/Root';
import Events from '../pages/Events/Events';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import Details from '../shared/Details';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/events",
            element: <Events></Events>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: '/event/:id',
          element: <Details/>,
          loader: () => fetch('/events.json')
        },
        {
          path: '/service/:id',
          element: <Details />,
          loader: () => fetch('/services.json')
        },
      ]
    },
  ]);
export default router;