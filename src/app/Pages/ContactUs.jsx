import React from "react";
import Footer from "../Assets/components/Footer";
import Header from "../Assets/components/Header";

export default function ContactUs() {
  return (
    <div>
      {/* Body Inner */}
      <div className="body-inner">
        {/* Header */}
        <Header />
        {/* end: Header */}
        {/* Page title */}
        <div
          id="slider"
          className="inspiro-slider dots-creative"
          data-height-xs={360}
        >
          <img
            className="slide kenburns"
            src="images/WebsiteImages/contactUsBackgroundImage.png"
            style={{ objectFit: "cover " }}
          ></img>
        </div>
        {/* end: Page title */}
        {/* CONTENT */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="text-uppercase">Get In Touch</h3>
                <p>
                  The most happiest time of the day!. Suspendisse condimentum
                  porttitor cursus. Duis nec nulla turpis. Nulla lacinia laoreet
                  odio, non lacinia nisl malesuada vel. Aenean malesuada
                  fermentum bibendum.
                </p>
                <div className="m-t-30">
                  <form
                    className="widget-contact-form"
                    noValidate
                    action="include/contact-form.php"
                    role="form"
                    method="post"
                  >
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          aria-required="true"
                          name="widget-contact-form-name"
                          required
                          className="form-control required name"
                          placeholder="Enter your Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          aria-required="true"
                          name="widget-contact-form-email"
                          required
                          className="form-control required email"
                          placeholder="Enter your Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-12">
                        <label htmlFor="subject">Your Subject</label>
                        <input
                          type="text"
                          name="widget-contact-form-subject"
                          required
                          className="form-control required"
                          placeholder="Subject..."
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        type="text"
                        name="widget-contact-form-message"
                        required
                        rows={5}
                        className="form-control required"
                        placeholder="Enter your Message"
                        defaultValue={""}
                      />
                    </div>
                    {/*  <div class="form-group">
                              
                              <div class="g-recaptcha" data-sitekey="6LddCxAUAAAAAKOg0-U6IprqOZ7vTfiMNSyQT2-M"></div>
                          </div>  */}
                    <button className="btn" type="submit" id="form-submit">
                      <i className="fa fa-paper-plane" />
                      &nbsp;Send message
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="text-uppercase">Address &amp; Map</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <address>
                      <strong>Polo, Inc.</strong>
                      <br />
                      795 Folsom Ave, Suite 600
                      <br />
                      San Francisco, CA 94107
                      <br />
                      <abbr title="Phone">P: (123) 456-7890</abbr>
                    </address>
                  </div>
                  <div className="col-lg-6">
                    <address>
                      <strong>Polo Office</strong>
                      <br />
                      795 Folsom Ave, Suite 600
                      <br />
                      San Francisco, CA 94107
                      <br />
                      <abbr title="Phone">P: (123) 456-7890</abbr>
                    </address>
                  </div>
                </div>
                {/* Google Map */}
                <div
                  className="map"
                  data-latitude="-37.817240"
                  data-longitude="144.955826"
                  data-style="light"
                  data-info="Hello from <br> Inspiro Themes"
                />
                {/* end: Google Map */}
              </div>
            </div>
          </div>
        </section>{" "}
        {/* end: Content */}
        {/* Footer */}
        <Footer />
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
