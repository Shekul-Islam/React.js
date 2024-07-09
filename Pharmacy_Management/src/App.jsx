import { useState } from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import { AddCustomer } from './pages/customer/AddCustomer';

function App() {
  return (
       <BrowserRouter>     
      <Routes>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register/>} /> */}
        <Route path="/" element={<AddCustomer />} />
        {/* <Route path="/itemslist" element={<ListProduct />} />
        <Route path="/itemedit/:id" element={<EditProduct />} /> */}
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
