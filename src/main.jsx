import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer autoClose={1000}></ToastContainer>
      </React.StrictMode>
    </AuthProvider>
    
  
)
