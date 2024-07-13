import React from 'react';
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

const EmployeProfile = () => {
    return (
        <div className="wrapper">
            <Navbar/>
            <Sidebar/>
            <div className='content-wrapper'> 
            <div className="col-md-12">
            <h1>HIJKLMNOPQRSTUVWXYZ</h1>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default EmployeProfile;