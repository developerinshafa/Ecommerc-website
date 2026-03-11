import { useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";
import ContactPage from "./components/pages/ContactPage";
import FAQs from "./components/pages/FAQs";
import Cart from "./components/pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} /> }/>
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
