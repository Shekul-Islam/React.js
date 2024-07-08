import { useContext, useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Setting from "./pages/sidebarpages/Setting";
import BaseLayout from "./layout/BaseLayout";
import Customer from "./pages/sidebarpages/Customer";
import Medicine from "./pages/sidebarpages/Medicine";
import Manufacturer from "./pages/sidebarpages/Manufacturer";
import Return from "./pages/sidebarpages/Return";
import HumanResource from "./pages/sidebarpages/HumanResource";
import Report from "./pages/sidebarpages/Report";
import Support from "./pages/sidebarpages/Support";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/sidebarpages/Dashboard";
import Saved from "./pages/sidebarpages/Saved";
import AddCustomer from "./components/AddCustomer";
import CustomerList from "./components/CustomerList";
import CustLedger from "./components/CustLedger";



function App() {


  return (

    <div className="App">
      <h3>Customer Options</h3>

    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="customer/add">Add Customer</Link>
          </li>
          <li>
            <Link to="list/customer">Customer List</Link>
          </li>
          <li>
            <Link to="ledger/customer">Customer Ledger</Link>
          </li>
        </ul>
      </nav>

      <Sidebar/>
     

        <Routes>
          <Route path="customer/add" element={<AddCustomer/>}/>
          <Route path="list/customer" element={<CustomerList/>}/>
          <Route path="ledger/customer" element={<CustLedger/>}/>
          <Route element={<BaseLayout />}/>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/customer" element={<Customer />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/return" element={<Return />} />
          <Route path="/human-resouce" element={<HumanResource />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/report" element={<Report />} />
          <Route path="/support" element={<Support />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/saved" element={<Saved />} />
        
          </Routes>

         
             
            
          
      

         
          
          

        

      
    </BrowserRouter>
    </div>
  );
}

export default App;
