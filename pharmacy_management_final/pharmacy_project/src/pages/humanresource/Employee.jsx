import React from 'react';
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

const Employee = () => {
    return (
        <div className="wrapper">
            <Navbar/>
            <Sidebar/>
            <div className='content-wrapper'> 
            <div className="col-md-12">
            <h1>GHIJKLMNOPQRSTUVWXYZ</h1>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Employee;