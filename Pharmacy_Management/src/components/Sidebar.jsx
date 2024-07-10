import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div>
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
