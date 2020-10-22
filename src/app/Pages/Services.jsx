import React from "react";
import Footer from "../Assets/components/Footer";
import Header from "../Assets/components/Header";

export default function Services() {
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
          <div
            className="slide kenburns"
            style={{
              backgroundImage: 'url("images/WebsiteImages/services1.png',
            }}
          ></div>
        </div>
        {/* end: Page title */}
        {/* What We Do */}
        <section id="welcome" className="p-b-0">
          <div className="container">
            <div
              className="heading-text heading-section text-center m-b-40"
              data-animate="fadeInUp"
            >
              <h2>What We Do</h2>
              <span className="lead">
                We manage investment portfolios for families in Australia and
                Overseas. Our clients are predominantly Sophisticated/Wholesale
                Investors* in addition to Professional Investors** and
                Corporates
              </span>
              <span className="lead">
                We manage investment portfolios for families in Australia and
                Overseas. Our clients are predominantly Sophisticated/Wholesale
                Investors* in addition to Professional Investors** and
                Corporates.
              </span>
              <br />
              <br />
              <span className="lead">
                Our Partners/clients include financial planners, accountants,
                mortgage brokers or solicitors where we advise on specialist
                derivatives strategies or structure derivatives products for
                specific needs. We may also jointly service the investment needs
                of mutual clients, especially medical professionals.
              </span>
              <br />
              <br />
              <p>
                <strong>
                  Our Partners/clients include financial planners, accountants,
                  mortgage brokers or solicitors where we advise on specialist
                  derivatives strategies or structure derivatives products for
                  specific needs. We may also jointly service the investment
                  needs of mutual clients, especially medical professionals.
                </strong>
              </p>
            </div>
          </div>
        </section>
        {/* End: What We Do */}
        {/* Pricing Table */}
        <section id="section3" className="p-t-120 p-b-120">
          <div className="container">
            <div className="col-lg-8 m-b-100  center">
              <div
                className="heading-text heading-section text-center"
                data-animate="fadeInUp"
              >
                <h4>See by yourself</h4>
                <h2>Products and Services</h2>
              </div>
            </div>
            <div className="row pricing-table">
              <div className="col-lg-4 col-md-12 col-12">
                <div className="plan">
                  <div className="plan-header center">
                    <h4>Managed Portfolios</h4>
                    <p className="text-muted">
                      Choice of Equity Plus and Tactical(predominantly S&P/ASX
                      300 exposure).
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="plan">
                  <div className="plan-header">
                    <h4>Customised Portfolios or Add-Ons</h4>
                    <p className="text-muted">
                      International Equities, sophisticated derivatives
                      strategies, IPOs, placements, private equity investments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="plan">
                  <div className="plan-header">
                    <h4>Stockbroking needs</h4>
                    <p className="text-muted">
                      Corporates - Share sale facilities, block trades,
                      crossing, Creeping, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: Pricing Table */}

        {/* Footer */}
        <Footer />
        {/* end: Footer */}
      </div>{" "}
      {/* end: Body Inner */}
      {/* Scroll top */}
      <a id="scrollTop">
        <i className="icon-chevron-up" />
        <i className="icon-chevron-up" />
      </a>
    </div>
  );
}
