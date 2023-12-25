import React from 'react'
import ReactDOM from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Edit from './components/Edit.jsx'
import Details from './components/Details.jsx'

import App from './App.jsx'
import "./App.css"
import Register from './components/Register.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='register' element={<Register />}/>
      <Route path='edit/:id' element={<Edit />}/>
      <Route path='view/:id' element={<Details />}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
