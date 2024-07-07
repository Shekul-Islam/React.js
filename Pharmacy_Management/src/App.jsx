import { useContext, useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Saved from "./pages/sidebarpages/Saved";
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





function App() {


  return (

    // <div className="App">
    // <h2>Customer Routing</h2>
            

    <BrowserRouter>

    {/* <nav>
      <ul>
        <li>
          <link to="/">Add Customr</link>
        </li>
        <li>
          <link to="list/customer">Customer List</link>
        </li>
      </ul>
    </nav> */}

      <Sidebar/>
      {/* <Dashboard/> */}

        <Routes>
          <Route element={<BaseLayout />}/>
          <Route path="/customer" element={<Customer />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/return" element={<Return />} />
          <Route path="/human-resouce" element={<HumanResource />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/report" element={<Report />} />
          <Route path="/support" element={<Support />} />
          <Route path="/saved" element={<Saved />} />
          {/* <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customerlist" element={<CustomerList />} /> */}

          </Routes>

         
             
            
          
      

         
          
          

        

      
    </BrowserRouter>
    // </div>
  );
}

export default App;
