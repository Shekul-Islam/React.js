import { useContext, useEffect } from "react";
import "./App.css";
// import "./App.scss";


import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
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
import AddCustomer from "./components/AddCustomer";
import CustomerList from "./components/CustomerList";


function App() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   // adding dark-mode class if the dark mode is set on to the body tag
//   useEffect(() => {
//     if (theme === DARK_THEME) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [theme]);

  return (
    <BrowserRouter>
      
      <Sidebar/>
        <Routes>
          <Route element={<BaseLayout />}/>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/return" element={<Return />} />
          <Route path="/human-resouce" element={<HumanResource />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/report" element={<Report />} />
          <Route path="/support" element={<Support />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customerlist" element={<CustomerList />} />

          


          </Routes>

         
             <nav>
              <ul>
                <li>hello</li>
              </ul>
             </nav>
          

          
      

         
          
          

        

      
    </BrowserRouter>
  );
}

export default App;
