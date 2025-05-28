import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import CommonLayout from './components/commonLayouts/CommonLayout';

function App() {

  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
      </Route>
    </Routes>
  )
}

export default App
