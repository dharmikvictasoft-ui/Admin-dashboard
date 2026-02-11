import {  } from 'react'
import AppLayout from './layout/AppLayout'
import { Routes, Route } from 'react-router-dom'
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Home from "./pages/Dashboard/Home";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route element={<AppLayout />} >
          <Route index path="/" element={<Home />} />
        </ Route>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
