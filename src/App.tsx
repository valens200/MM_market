import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './index.css'
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages./Home';
import Login from './pages./Login';
import Register from './pages./Register';
import Products from './pages./Products';
import About from './pages./About';
import Dashboard from './pages./Dashboard';
import Cart from './pages./Cart';
function App() {

  const [cout, setCount] = useState<String>("")

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/About' element={<About />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
