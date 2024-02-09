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
        }
      ]
    },
  ]);
export default router;