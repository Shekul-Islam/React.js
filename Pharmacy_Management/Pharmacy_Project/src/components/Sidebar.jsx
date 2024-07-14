import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <NavLink to="/" className="brand-link">
        <img
          src="assets/dist/img/pharmacylog.png"
          alt="pharmacylog"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-dark">Pharmacy Management</span>
      </NavLink>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="assets/dist/img/profileme.png"
              className="img-circle elevation-2"
              alt="profileme"
            />
          </div>
          <div className="info">
            <NavLink to="/home" className="d-block">
              <span>Dashboard</span>
            </NavLink>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user" />
                <p>
                  Customer
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/addcustomer" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Customer</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/customerlist" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Customer List</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user" />
                <p>
                  Manufacturer
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/addmanufacturer" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Manufacturer</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/manufacturerlist" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Manufacturer List</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user" />
                <p>
                  Medicine
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
              <li className="nav-item">
                  <NavLink to="/addmedicine" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Medicine </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/medicinelist" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Medicine List</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/medicinedetails" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Medicine Details</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user" />
                <p>
                  Human Resource
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/employe" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Employe</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/employeprofile" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Employe Profile</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/attendence" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Attendence</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/salary" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Salary</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user" />
                <p>
                  Manufacturer
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/addmanufacturer" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Manufacturer</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/manufacturerlist" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Manufacturer List</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/manufacturerledger" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Manufacturer Ledger</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link">
                <i className="nav-icon fas fa-user" />
                <p>
                  Return
                  <i className="fas fa-angle-left right" />
                </p>
              </NavLink>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/addwastagereturn" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Wastage Return</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/wastagereturnlist" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Wastage Return List</p>
                  </NavLink>
                </li>
              </ul>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/addmanufactreturn" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Manufacturer Return</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/manufactreturnlist" className="nav-link">
                    <i className="far fa-circle nav-icon"/>
                    <p>Manufacturer Return List</p>
                  </NavLink>
                </li>
              </ul>
            </li>
           
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
