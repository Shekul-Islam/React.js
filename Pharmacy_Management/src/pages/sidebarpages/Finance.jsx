import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Finance (){
  return(
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library */}
              <li className="nav-item">
              <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                  Customer
                  <i className="right fas fa-angle-left" />
                  </p>
              </a>
              <ul className="nav nav-treeview">
                  <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Customer</p>
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Customr List</p>
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  <a to="/" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Customr Ledger</p>
                  </a>
                  </li>
              </ul>
              </li>
              </ul>
            </nav>
  </aside>
  )
}