import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import Contact from './pages/Contact/Contact'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from './contexts/CartContext'
import Checkout from './pages/Checkout/Checkout'


function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/details/:productId" element={<ProductDetails />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </CartContextProvider>
    </BrowserRouter>

  )
}

export default App
