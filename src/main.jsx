import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './login';
import Register from './register';
import Home from './home';
import About from './about';
import Contact from './contact';
import Forget from './forget';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/about",
    element: <About/>
  },{
    path:"/contact",
    element: <Contact/>
  },
   {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/forget",
    element: <Forget/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
