import React from 'react';
import './App.css';
import { Route, Navigate, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import SellerOrders from './pages/SellerOrders';
import { CartProvider } from './contexts/useCart';
import CheckoutPage from './pages/Checkout';
import CheckoutDetails from './pages/CheckoutDetails';
import AdminManage from './pages/AdminManage';
import Orders from './pages/Orders';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route exact path="/customer/orders/:id" element={ <CheckoutDetails /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <CustomerProducts /> } />
        <Route exact path="/seller/orders" element={ <SellerOrders /> } />
        <Route exact path="/customer/checkout" element={ <CheckoutPage /> } />
        <Route exact path="/customer/orders/" element={ <Orders /> } />
        <Route exact path="/admin/manage" element={ <AdminManage /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
      </Routes>
    </CartProvider>
  );
}

export default App;
