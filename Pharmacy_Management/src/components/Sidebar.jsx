<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
=======
import React from 'react';
>>>>>>> 7a4e4bc4137e202b62211490548e5bd95a94e320

const Sidebar = () => {
  return (
    <div>
<<<<<<< HEAD
      <div id="wrapper" />
      <nav className="navbar-default navbar-static-side" role="navigation">
        {/* sidebar-collapse */}
        <div className="sidebar-collapse">
          {/* side-menu */}
          <ul className="nav" id="side-menu">
            <li>
              {/* user image section*/}
              <div className="user-section">
                <div className="user-section-inner">
                  <img src="assets/img/user.jpg" alt />
                </div>
                <div className="user-info">
                  <div>
                    Jonny <strong>Deen</strong>
                  </div>
                  <div className="user-text-online">
                    <span className="user-circle-online btn btn-success btn-circle " />
                    &nbsp;Online
                  </div>
                </div>
              </div>
              {/*end user image section*/}
            </li>
            <li className="sidebar-search">
              {/* search section*/}
              <div className="input-group custom-search-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
              {/*end search section*/}
            </li>
            <li className>
              <a href="index.html">
                <i className="fa fa-dashboard fa-fw" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-bar-chart-o fa-fw" />
                Charts
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="flot.html">Flot Charts</a>
                </li>
                <li>
                  <a href="morris.html">Morris Charts</a>
                </li>
              </ul>
              {/* second-level-items */}
            </li>
            <li>
              <a href="timeline.html">
                <i className="fa fa-flask fa-fw" />
                Timeline
              </a>
            </li>
            <li>
              <a href="tables.html">
                <i className="fa fa-table fa-fw" />
                Tables
              </a>
            </li>
            <li>
              <a href="forms.html">
                <i className="fa fa-edit fa-fw" />
                Forms
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-wrench fa-fw" />
                UI Elements
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="panels-wells.html">Panels and Wells</a>
                </li>
                <li>
                  <a href="buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="notifications.html">Notifications</a>
                </li>
                <li>
                  <a href="typography.html">Typography</a>
                </li>
                <li>
                  <a href="grid.html">Grid</a>
                </li>
              </ul>
              {/* second-level-items */}
            </li>
            <li>
              <a href="#">
                <i className="fa fa-sitemap fa-fw" />
                Multi-Level Dropdown
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="#">Second Level Item</a>
                </li>
                <li>
                  <a href="#">Second Level Item</a>
                </li>
                <li>
                  <a href="#">
                    Third Level <span className="fa arrow" />
                  </a>
                  <ul className="nav nav-third-level">
                    <li>
                      <a href="#">Third Level Item</a>
                    </li>
                    <li>
                      <a href="#">Third Level Item</a>
                    </li>
                    <li>
                      <a href="#">Third Level Item</a>
                    </li>
                    <li>
                      <a href="#">Third Level Item</a>
                    </li>
                  </ul>
                  {/* third-level-items */}
                </li>
              </ul>
              {/* second-level-items */}
            </li>
            <li className="active">
              <a href="#">
                <i className="fa fa-files-o fa-fw" />
                Sample Pages
                <span className="fa arrow" />
              </a>
              <ul className="nav nav-second-level">
                <li className="selected">
                  <a href="blank.html">Blank Page</a>
                </li>
                <li>
                  <a href="login.html">Login Page</a>
                </li>
              </ul>
              {/* second-level-items */}
            </li>
          </ul>
          {/* end side-menu */}
        </div>
        {/* end sidebar-collapse */}
      </nav>
      <div id="page-wrapper" />
    </div>
  );
};
=======
      

    <div id="sidebar" className="active">
<div className="sidebar-wrapper active">
  <div className="sidebar-header">
    <img src="assets/images/logo.svg" alt srcSet />
  </div>
  <div className="sidebar-menu">
    <ul className="menu">
      <li className="sidebar-title">Main Menu</li>
      <li className="sidebar-item">
        <a href="index.html" className="sidebar-link">
          <i data-feather="home" width={20} />
          <span>Dashboard</span>
        </a>
      </li>
      <li className="sidebar-item has-sub">
        <a href="#" className="sidebar-link">
          <i data-feather="triangle" width={20} />
          <span>Components</span>
        </a>
        <ul className="submenu">
          <li>
            <a href="component-alert.html">Alert</a>
          </li>
          <li>
            <a href="component-badge.html">Badge</a>
          </li>
          <li>
            <a href="component-breadcrumb.html">Breadcrumb</a>
          </li>
          <li>
            <a href="component-buttons.html">Buttons</a>
          </li>
          <li>
            <a href="component-card.html">Card</a>
          </li>
          <li>
            <a href="component-carousel.html">Carousel</a>
          </li>
          <li>
            <a href="component-dropdowns.html">Dropdowns</a>
          </li>
          <li>
            <a href="component-list-group.html">List Group</a>
          </li>
          <li>
            <a href="component-modal.html">Modal</a>
          </li>
          <li>
            <a href="component-navs.html">Navs</a>
          </li>
          <li>
            <a href="component-pagination.html">Pagination</a>
          </li>
          <li>
            <a href="component-progress.html">Progress</a>
          </li>
          <li>
            <a href="component-spinners.html">Spinners</a>
          </li>
          <li>
            <a href="component-tooltips.html">Tooltips</a>
          </li>
        </ul>
      </li>
      <li className="sidebar-item has-sub">
        <a href="#" className="sidebar-link">
          <i data-feather="briefcase" width={20} />
          <span>Extra Components</span>
        </a>
        <ul className="submenu">
          <li>
            <a href="component-extra-avatar.html">Avatar</a>
          </li>
          <li>
            <a href="component-extra-divider.html">Divider</a>
          </li>
        </ul>
      </li>
      <li className="sidebar-title">Forms &amp; Tables</li>
      <li className="sidebar-item has-sub">
        <a href="#" className="sidebar-link">
          <i data-feather="file-text" width={20} />
          <span>Form Elements</span>
        </a>
        <ul className="submenu">
          <li>
            <a href="form-element-input.html">Input</a>
          </li>
          <li>
            <a href="form-element-input-group.html">Input Group</a>
          </li>
          <li>
            <a href="form-element-select.html">Select</a>
          </li>
          <li>
            <a href="form-element-radio.html">Radio</a>
          </li>
          <li>
            <a href="form-element-checkbox.html">Checkbox</a>
          </li>
          <li>
            <a href="form-element-textarea.html">Textarea</a>
          </li>
        </ul>
      </li>
      <li className="sidebar-item">
        <a href="form-layout.html" className="sidebar-link">
          <i data-feather="layout" width={20} />
          <span>Form Layout</span>
        </a>
      </li>
      <li className="sidebar-item">
        <a href="form-editor.html" className="sidebar-link">
          <i data-feather="layers" width={20} />
          <span>Form Editor</span>
        </a>
      </li>
      <li className="sidebar-item">
        <a href="table.html" className="sidebar-link">
          <i data-feather="grid" width={20} />
          <span>Table</span>
        </a>
      </li>
      <li className="sidebar-item active">
        <a href="table-datatable.html" className="sidebar-link">
          <i data-feather="file-plus" width={20} />
          <span>Datatable</span>
        </a>
      </li>
      <li className="sidebar-title">Extra UI</li>
      <li className="sidebar-item has-sub">
        <a href="#" className="sidebar-link">
          <i data-feather="user" width={20} />
          <span>Widgets</span>
        </a>
        <ul className="submenu">
          <li>
            <a href="ui-chatbox.html">Chatbox</a>
          </li>
          <li>
            <a href="ui-pricing.html">Pricing</a>
          </li>
          <li>
            <a href="ui-todolist.html">To-do List</a>
          </li>
        </ul>
      </li>
      <li className="sidebar-item has-sub">
        <a href="#" className="sidebar-link">
          <i data-feather="trending-up" width={20} />
          <span>Charts</span>
        </a>
        <ul className="submenu">
          <li>
            <a href="ui-chart-chartjs.html">ChartJS</a>
          </li>
          <li>
            <a href="ui-chart-apexchart.html">Apexchart</a>
          </li>
        </ul>
      </li>
      <li className="sidebar-title">Pages</li>
      <li className="sidebar-item has-sub">
        <a href="#" className="sidebar-link">
          <i data-feather="user" width={20} />
          <span>Authentication</span>
        </a>
        <ul className="submenu">
          <li>
            <a href="auth-login.html">Login</a>
          </li>
          <li>
            <a href="auth-register.html">Register</a>
          </li>
          <li>
            <a href="auth-forgot-password.html">Forgot Password</a>
          </li>
        </ul>
      </li>
      <li className="sidebar-item has-sub">
        <a href="#" className="sidebar-link">
          <i data-feather="alert-circle" width={20} />
          <span>Errors</span>
        </a>
        <ul className="submenu">
          <li>
            <a href="error-403.html">403</a>
          </li>
          <li>
            <a href="error-404.html">404</a>
          </li>
          <li>
            <a href="error-500.html">500</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <button className="sidebar-toggler btn x">
    <i data-feather="x" />
  </button>
</div>
</div>
  </div>
  );
};

export default Sidebar;
>>>>>>> 7a4e4bc4137e202b62211490548e5bd95a94e320
