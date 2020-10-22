import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      {/* Body Inner */}
      <div className="body-inner">
        {/* Section */}
        <section
          className="fullscreen"
          data-bg-parallax="images/WebsiteImages/login.png"
        >
          <div className="container">
            <div>
              <div className="text-center m-b-30">
                {/* <a to="/" className="logo">
                  <img src="images/logo-dark.png" alt="Polo Logo" />  //Logo url
                </a> */}
              </div>
              <div className="row">
                <div className="col-lg-5 center p-50 background-white b-r-6">
                  <h3>Login to your Account</h3>
                  <form>
                    <div className="form-group">
                      <label className="sr-only">Username or Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username or Email"
                      />
                    </div>
                    <div className="form-group m-b-5">
                      <label className="sr-only">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group form-inline text-left">
                      <div className="form-check">
                        <label>
                          <input type="checkbox" />
                          <small className="m-l-10"> Remember me</small>
                        </label>
                      </div>
                    </div>
                    <div className="text-left form-group">
                      <button type="button" className="btn">
                        Login
                      </button>
                    </div>
                  </form>
                  <p className="small">
                    Don't have an account yet?{" "}
                    <a to="/register-page" href="/register-page">
                      Register New Account
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: Section */}
      </div>
      {/* end: Body Inner */}
      {/* Scroll top */}
      <a id="scrollTop">
        <i className="icon-chevron-up" />
        <i className="icon-chevron-up" />
      </a>
    </div>
  );
}
