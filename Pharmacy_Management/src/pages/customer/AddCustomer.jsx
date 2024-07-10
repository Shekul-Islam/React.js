import React from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Sidebar'
import Footer from '../../components/Footer'

const AddCustomer = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
        <div id="main">
            
      
          <div className="main-content container-fluid">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Datatable</h3>
                  <p className="text-subtitle text-muted">
                   
                    check the full documentation
                    <a href="https://github.com/fiduswriter/Simple-DataTables/wiki">
                      here
                    </a>
                    .
                  </p>
                </div>
                <div className="col-12 col-md-6 order-md-2 order-first">
                  <nav aria-label="breadcrumb" className="breadcrumb-header">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Datatable
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="card">
                <div className="card-header">Simple Datatable</div>
                <div className="card-body">
                  <table className="table table-striped" id="table1">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                      <tr>
                        <td>Kuame</td>
                        <td>Quisque.purus@mauris.org</td>
                        <td>(0151) 561 8896</td>
                        <td>Tresigallo</td>
                        <td>
                          <span className="badge bg-success">Active</span>
                        </td>
                      </tr>
                    
                      <tr>
                        <td>Aladdin</td>
                        <td>sem.ut@pellentesqueafacilisis.ca</td>
                        <td>0800 1111</td>
                        <td>Bothey</td>
                        <td>
                          <span className="badge bg-success">Active</span>
                        </td>
                      </tr>
                    
                      <tr>
                        <td>Stone</td>
                        <td>velit.Aliquam.nisl@sitametrisus.com</td>
                        <td>0800 1111</td>
                        <td>Olivar</td>
                        <td>
                          <span className="badge bg-success">Active</span>
                        </td>
                      </tr>
                     
                      <tr>
                        <td>Hamilton</td>
                        <td>mauris@diam.org</td>
                        <td>0800 256 8788</td>
                        <td>Sanzeno</td>
                        <td>
                          <span className="badge bg-success">Active</span>
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        
        </div>
      <Footer />
      </div>
  )
}

export default AddCustomer
