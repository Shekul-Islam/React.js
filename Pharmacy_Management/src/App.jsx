
// import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AddCustomer from './pages/customer/AddCustomer';
import CustomerList from './pages/customer/CustomerList';
import CustomerLedger from './pages/customer/CustomerLedger';
import AddMedicine from './pages/medicin/AddMedicine';
import MedicineList from './pages/medicin/MedicineList';
import MedicineDetails from './pages/medicin/MedicineDetails';
import ManufacturerList from './pages/manufacturer/ManufacturerList';
import ManufacturerLedger from './pages/manufacturer/ManufacturerLedger';
import Employe from './pages/humanresource/Employee';
import EmployeProfile from './pages/humanresource/EmployeProfile';
import Attendence from './pages/humanresource/Attendence';
import Salary from './pages/humanresource/Salary';
import Login from './pages/Login';
import Registration from './pages/Registration';

// import './App.css'

const App = () => {
  

  return (
    <BrowserRouter>     
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/addcustomer" element={<AddCustomer/>}/>
      <Route path="/customerlist" element={<CustomerList/>}/>
      <Route path="/customerledger" element={<CustomerLedger/>}/>
      <Route path="/addmedicine" element={<AddMedicine/>}/>
      <Route path="/medicinelist" element={<MedicineList/>}/>
      <Route path="/medicinedetails" element={<MedicineDetails/>} />
      <Route path="/manufacturerlist" element={<ManufacturerList />} />
      <Route path="/manufacturerledger" element={<ManufacturerLedger />} />
      <Route path="/employe" element={<Employe />} />
      <Route path="/employeprofile" element={<EmployeProfile />} />
      <Route path="/attendence" element={<Attendence />} />
      <Route path="/salary" element={<Salary />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Registration/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
