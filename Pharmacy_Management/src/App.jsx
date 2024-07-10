import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import AddCustomer from './pages/customer/AddCustomer';
import Saved from './pages/Saved';
    


const App = () => {
  return (
    <div>
      <BrowserRouter>     
      <Routes>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register/>} /> */}
        <Route path="/addcustomer" element={<AddCustomer/>} />
        <Route path="/saved" element={<Saved/>} />
        {/* <Route path="/itemslist" element={<ListProduct />} />
        <Route path="/itemedit/:id" element={<EditProduct />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App



