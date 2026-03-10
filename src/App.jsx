// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
   
      
    </>
  )
}

export default App
