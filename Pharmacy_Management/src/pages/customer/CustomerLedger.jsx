import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const CustomerLedger = () => {
    return (
        <div className="wrapper">
      <Navbar/>
      <Sidebar/>
      <div className='content-wrapper'> 
      <div className="col-md-12">
  {/* general form elements */}
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
  {/* /.card */}
</div>
</div>
        <Footer/>
   
      </div>
    );
};

export default CustomerLedger;