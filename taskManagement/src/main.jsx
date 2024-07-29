import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter,Route,RouterProvider,Routes } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
