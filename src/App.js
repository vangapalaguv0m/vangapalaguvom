import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; // Correct import path for Login
import Register from './pages/Register'; 
import Interface from "./pages/Interface"

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Interface" element={<Interface />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
