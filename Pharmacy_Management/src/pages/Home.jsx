import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="wrapper">
            <Navbar/>
            <Sidebar/>
            <div className='content-wrapper'> 
            <div className="col-md-12">
            <h1>Home</h1>
            </div>
            </div>
            <Footer/>
    </div>
    );
};

export default Home;