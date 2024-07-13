import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const CustomerList = () => {
    return (
        <div className="wrapper">
    <Navbar />
    <Sidebar />
    <div className="content-wrapper">
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Customer List</h3>
              </div>
              <div className="card-header">
                <Link to="/add-user">Add Customer</Link>
              </div>
              {/* /.card-header */}
              <div className="card-body">
              {/* <p className="text-danger">{ message} </p>  */}

              <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Details</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        
                    </table>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </section>
    </div>
      {/* footer-section */}
      <Footer />
    </div>
    );
};

export default CustomerList;