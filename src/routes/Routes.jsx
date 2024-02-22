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
import About from '../pages/About/About';
import PrivateRoutes from './PrivateRoutes';
import Orders from '../pages/Orders/Orders';
import Blogs from '../pages/Blogs/Blogs';
import Gallery from '../pages/Gallery/Gallery';
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
          path: "/blogs",
          element: <Blogs></Blogs>
        },
        {
          path: '/event/:id',
          element: <PrivateRoutes><Details/></PrivateRoutes>,
          loader: () => fetch('/events.json')
        },
        {
          path: '/service/:id',
          element: <PrivateRoutes><Details/></PrivateRoutes>,
          loader: () => fetch('/services.json')
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/orders",
          element: <PrivateRoutes><Orders></Orders></PrivateRoutes>,
         },
         {
          path: "/gallery",
          element: <PrivateRoutes><Gallery></Gallery></PrivateRoutes>
         }
      ]
    },
  ]);
export default router;