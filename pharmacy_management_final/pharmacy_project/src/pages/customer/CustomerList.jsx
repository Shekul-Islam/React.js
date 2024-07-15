import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const CustomerList = () => {
  const [items, setItems] = useState([]);

    const itemDelete = (id) => {
        axios.delete("http://localhost/pharmacy_management/api-php/customer/deletecustomer.php?id=" + id)
            .then((res) => (console.log(res)))

        axios.get("http://localhost/pharmacy_management/api-php/customer/customerlists.php")
            .then((res) => setItems(res.data))
    }

    useEffect(() => {
        axios.get("http://localhost/pharmacy_management/api-php/customer/customerlists.php")
            .then((res) => setItems(res.data))
    }, [])
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
                <Link to="/addcustomer">Add Customer</Link>
              </div>
              {/* /.card-header */}
              <div className="card-body">
              {/* <p className="text-danger">{ message} </p>  */}

              <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Details</th>
                                <th scope="col">photo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((data, i) => {
                                return (
                              
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.details}</td>
                                    <td>
                                        <img className='w-50' src={`http://localhost/pharmacy_management/api-php/customer/images/${data.photo}`} />
                                    </td>
                                    <td>
                                        <NavLink to={`/editcustomer/${data.id}`}>
                                            <button className='btn btn-info mb-2 mt-2'>Update</button>
                                        </NavLink>
                                        <button className='btn btn-danger' onClick={() => { itemDelete(data.id) }}>Delete</button>
                                    </td>
                                </tr>
                               
                                )
                            })}
                        </tbody>
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