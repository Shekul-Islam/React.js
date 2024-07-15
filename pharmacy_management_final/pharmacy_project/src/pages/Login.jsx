import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div >
      <div className="login-box box-solid bg-aqua">
        <div className="login-logo">
          <a href="#">
            <b>Pharmacy</b>Management
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card bg-light-blue-gradient">
          <div className="login-box box-solid ">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="/home" method="post">
              <div className="input-group mb-3">
                <input
                  type="user"
                  className="form-control"
                  placeholder="User ID"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                  <i className="nav-icon fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button className="btn btn-primary btn-block">
                  <Link to="/home">Sign In</Link>
                    
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <p className="mb-0">
              <Link to="/home" className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
