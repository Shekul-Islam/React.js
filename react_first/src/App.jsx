import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pagelink from './pages/Pagelink';
import Anotherpage from './pages/Anotherpage';
import Blog from './pages/Blog';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} >
              <Route path="/pagelink" element={<Pagelink/>} />
        </Route> 

        <Route path="/blog" element={<Blog/>}>
           <Route path="anotherpage" element={<Anotherpage/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
};

export default App;