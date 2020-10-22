import React from "react";

export default function SignUp() {
  return (
    <div>
      {/* Body Inner */}
      <div className="body-inner">
        {/* Section */}
        <section
          className="fullscreen"
          style={{ backgroundImage: "url(images/pages/1.jpg)" }}
        >
          <div className="container container-fullscreen">
            <div className="text-middle">
              <div className="text-center m-b-30">
                <a href="index.html" className="logo">
                  <img src="images/logo-dark.png" alt="Polo Logo" />
                </a>
              </div>
              <div className="row">
                <div className="col-lg-7 center p-30 background-white b-r-6">
                  <div className="col-lg-12 m-t-20">
                    <h3>Register New Account</h3>
                    <p>
                      Create an account by entering the information below. If
                      you are a returning customer please login at the top of
                      the page.
                    </p>
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">Username</label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">
                      Apartment, suite, unit etc.
                    </label>
                    <input
                      type="text"
                      placeholder="Apartment, suite, unit etc."
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">Town / City</label>
                    <input
                      type="text"
                      placeholder="Town / City"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">State / County</label>
                    <input
                      type="text"
                      placeholder="State / County"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">Postcode / Zip</label>
                    <input
                      type="text"
                      placeholder="Postcode / Zip"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="sr-only">Mobile</label>
                    <input
                      type="text"
                      placeholder="Mobile"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <button className="btn" type="button">
                      Register New Account{" "}
                    </button>
                    <button type="button" className="btn btn-danger m-l-10">
                      Cancel
                    </button>
                  </div>
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
