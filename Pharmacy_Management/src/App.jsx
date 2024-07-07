// import { useContext, useEffect } from "react";
import "./App.css";



import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";
import BaseLayout from "./layout/BaseLayout";
import Customer from "./pages/Customer";
import Medicine from "./pages/Medicine";
import Manufacturer from "./pages/Manufacturer";
import Return from "./pages/Return";
import HumanResource from "./pages/HumanResource";
import Report from "./pages/Report";
import Support from "./pages/Support";
// import AddCustomer from "./components/AddCustomer";
// import CustomerList from "./components/CustomerList";
// import Dashboard from "./components/Dashboard/Dashboard";


function App() {


  return (

    <div className="App">
              <h2>Customer Routing</h2>
            

    <BrowserRouter>

    <nav>
      <ul>
        <li>
          <link to="/">Add Customr</link>
        </li>
        <li>
          <link to="list/customer">Customer List</link>
        </li>
      </ul>
    </nav>

      <Sidebar/>
      {/* <Dashboard/> */}
      
        <Routes>
          <Route element={<BaseLayout />}/>
          {/* <Route path="/" element={<Dashboard />} /> */}
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
    </div>
  );
}

export default App;
