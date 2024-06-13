import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';






const App = () => {
  return (

  
     <div>
      <Header/>
      <Navbar/>
      <Home/>
      <Blog/>
      <Footer/>
     </div>
      
   
  );
};

export default App;