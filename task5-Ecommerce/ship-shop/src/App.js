import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Policy from './components/pages/Policy';
import Pagenotfound from './components/pages/Pagenotfound';
import Register from './components/pages/Auth/Register';
import Login from './components/pages/Auth/Login';
import Dashboard from './components/pages/user/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './components/pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './components/pages/Admin/AdminDashboard';
import CreateCategory from './components/pages/Admin/CreateCategory';
import CreateProduct from './components/pages/Admin/CreateProduct';
import Users from './components/pages/Admin/Users';
import Profile from './components/pages/user/Profile';
import Orders from './components/pages/user/Orders';
import ProductMain from './components/pages/ProductMain';
import SingleProduct from './components/pages/user/SingleProduct';

import CheckoutPage from './components/pages/user/Checkout';
function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log(`Added ${product.quantity} ${product.product_name}(s) to the cart`);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
        
          
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/view-all-products" element={<ProductMain addToCart={handleAddToCart} />} />
        <Route path="/getById" element={<ProductMain />} />
        <Route path="/product/:slug" element={<SingleProduct addToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CheckoutPage cart={cart} />} />
        

      </Routes>
    </>
  );
}

export default App;