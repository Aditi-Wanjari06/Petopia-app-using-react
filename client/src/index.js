import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import Home from "./views/Home/Home.js"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path : '/',
    element: <Home/>
  },
  {
    path: '*',
    element: "404 Not Found"
  }

])


root.render(<RouterProvider router={router}/>)


