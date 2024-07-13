
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
import AddManufacturer from './pages/manufacturer/AddManufacturer';
import AddManufactureReturn from './pages/return/AddManufacturerReturn';
import ManufacturerReturnList from './pages/return/ManufacturerReturnList';
import AddWastageReturn from './pages/return/AddWastageReturn';
import WastageReturnList from './pages/return/WastageReturnList';
import Income from './pages/finance/Income';
import Expence from './pages/finance/Expence';
import InvoiceList from './pages/finance/InvoiceList';
import InvoiceDetails from './pages/finance/InvoiceDetails';




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
      <Route path="/addmanufacturer" element={<AddManufacturer/>} />
      <Route path="/manufacturerlist" element={<ManufacturerList />} />
      <Route path="/manufacturerledger" element={<ManufacturerLedger />} />
      <Route path="/employe" element={<Employe />} />
      <Route path="/employeprofile" element={<EmployeProfile />} />
      <Route path="/attendence" element={<Attendence />} />
      <Route path="/salary" element={<Salary />} />
      <Route path="/addmanufactreturn" element={<AddManufactureReturn />} />
      <Route path="/manufactreturnlist" element={<ManufacturerReturnList />} />
      <Route path="/addwastagereturn" element={<AddWastageReturn />} />
      <Route path="/wastagereturnlist" element={<WastageReturnList />} />
      <Route path="/income" element={<Income />} />
      <Route path="/expence" element={<Expence />} />
      <Route path="/invoicelist" element={<InvoiceList />} />
      <Route path="/invoicedetails" element={<InvoiceDetails />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Registration/>} />
    </Routes>
  </BrowserRouter>
  );
};

export default App
