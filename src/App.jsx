// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/header/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import Products from './components/pages/Products'
import Footer from './components/Footer'
import ContactPage from './components/pages/ContactPage'
import FAQs from './components/pages/FAQs'


function App() {
 
  return (
    <>
    <BrowserRouter>
     <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
