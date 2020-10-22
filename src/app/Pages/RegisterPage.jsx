import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div>
      {/* Body Inner */}
      <div className="body-inner">
        {/* Header */}
        {/* end: Header */}

        {/* Page title */}
        <section id="page-title">
          <div className="container">
            <div className="page-title">
              <h1>Sign up</h1>
              <span>Let's get started!</span>
            </div>
            <div className="breadcrumb">
              <ul>
                <li>
                  <Link to="/" href="#">
                    Home
                  </Link>{" "}
                </li>
                <li className="active">
                  <a href="#">Sign up</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* end: Page title */}
        {/* Page Content */}
        <section id="page-content">
          <div className="container">
            <div className="row">
              <div className="content col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <span className="h4">Account details</span>
                    <p className="text-muted">
                      You will receive an email notification to confirm this
                      action in order to completed changes.
                    </p>
                  </div>
                  <div className="card-body">
                    <form id="form1" className="form-validate">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="username">Username</label>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter username"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="password">Password</label>
                          <div className="input-group show-hide-password">
                            <input
                              className="form-control"
                              name="password"
                              placeholder="Enter password"
                              type="password"
                              required
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i
                                  className="icon-eye-off"
                                  aria-hidden="true"
                                  style={{ cursor: "pointer" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="password2">Confirm Password</label>
                          <div className="input-group show-hide-password">
                            <input
                              className="form-control"
                              name="password2"
                              placeholder="Enter password"
                              type="password"
                              required
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i
                                  className="icon-eye-off"
                                  aria-hidden="true"
                                  style={{ cursor: "pointer" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="name">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter your First name"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="surname">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="surname"
                            placeholder="Enter your Last name"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="gender">Gender</label>
                          <select
                            className="form-control"
                            name="gender"
                            required
                          >
                            <option value>Select your gender</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Rather not say</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="gender">Date of Birth</label>
                          <input
                            className="form-control"
                            type="date"
                            name="dateofbirth"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="telephone">Mobile</label>
                          <input
                            className="form-control"
                            type="tel"
                            name="telephone"
                            placeholder="Enter your Moble number"
                            required
                          />
                        </div>
                      </div>
                      <div className="h5 mb-4">Inventment Form</div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Enter your Street Address"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="address2">Address 2</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address2"
                            placeholder="Enter your Apartment, studio, or floor"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            placeholder="Enter your City"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Zip Code:</label>
                          <input
                            type="number"
                            className="form-control"
                            name="zip"
                            placeholder="Enter Zip Code"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="state">Investment Interest</label>
                          <select
                            name="state"
                            className="form-control"
                            required
                          >
                            <option value>Select one...</option>
                            <option>Equities-ASX</option>
                            <option>Equities-International</option>
                            <option>Managed Portfolios</option>
                            <option>Unlisted/PE Investments</option>
                            <option>Structured Products</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="country">
                            Expected Investment Range
                          </label>
                          <select
                            name="country"
                            className="form-control"
                            required
                          >
                            <option value>Select one...</option>
                            <option>Less than $500k</option>
                            <option>$500-$1m</option>
                            <option>$1m </option>
                            <option>$5m </option>
                            <option>$10m </option>
                            <option>Other </option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group mb-1 mt-5">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="reminders"
                            id="reminders"
                            className="custom-control-input"
                            defaultValue={1}
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="reminders"
                          >
                            Send me occasional reminders about these settings
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="terms_conditions"
                            id="terms_conditions"
                            className="custom-control-input"
                            defaultValue={1}
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="terms_conditions"
                          >
                            By checking this option, you agree to acceot with
                            the <a href="#">Terms and Conditions</a>.
                          </label>
                        </div>
                      </div>
                      <button type="submit" className="btn m-t-30 mt-3">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Sidebar*/}
              {/* end: sidebar*/}
            </div>
          </div>
        </section>
        {/* end: Page Content */}
        {/* Footer */}
        {/* end: Footer */}
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
