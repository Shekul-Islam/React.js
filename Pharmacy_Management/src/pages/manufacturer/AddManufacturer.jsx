// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const  AddManufacturer = () => {
    // const navigate = useNavigate();

    // const [inputs, setInputs] = useState([]);

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value}));
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     axios.post('http://localhost:8888/api/user/save', inputs).then(function(response){
    //         console.log(response.data);
    //         navigate('/');
    //     });
        
    // }
    return (
        <div className="wrapper">
            <Navbar/>
            <Sidebar/>
            <div className='content-wrapper'> 
            <div className="col-md-12">
            <div className="card card-primary">
    <div className="card-header">
      <h3 className="card-title">Add Customer</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <p className="text-sucess"> {  }</p>                 
    <form >
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"> Name:</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" name="name"  />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email:</label>
          <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" name="email"   />
        </div>
        <div className="form-group">
          <label htmlFor="ex">Phone:</label>
          <input type="text" className="form-control" id="ex" placeholder="Enter Phone" name="phone"   />
        </div>
      </div>
      {/* /.card-body */}
      <div className="card-footer">
      <button name="submit" className="btn btn-success">Submit</button>
      </div>
    </form>
  </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AddManufacturer
