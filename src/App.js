
import './App.css';
import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Product />} />
          
    </Routes>
 
    </BrowserRouter>
 </React.StrictMode>
    
  );
}

export default App;
