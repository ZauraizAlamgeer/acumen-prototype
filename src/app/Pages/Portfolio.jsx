import React from "react";
import Footer from "../Assets/components/Footer";
import Header from "../Assets/components/Header";

export default function Portfolio() {
  return (
    <div>
      {/* Body Inner */}
      <div className="body-inner">
        {/* Header */}
        <Header />
        {/* end: Header */}
        {/* Page title */}
        <section
          id="page-title"
          className="text-light"
          style={{ backgroundImage: 'url("images/WebsiteImages/services1.png' }}
        >
          <div className="container">
            <div className="page-title">
              <h1>Portfolio</h1>
            </div>
            <div className="breadcrumb">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="active">
                  <a href="#">Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* end: Page title */}
        {/* What We Do */}
        <section id="welcome" className="p-b-0">
          <div className="container">
            <div
              className="heading-text heading-section text-center m-b-40"
              data-animate="fadeInUp"
            >
              <h3 className="heading-text heading-section text-center">
                Managed Portfolio
              </h3>
              <h4> Dependable, Agile and Resilient</h4>
              <span className="lead">
                That is as much the goal for our personal life as it is for our
                investments.
              </span>
              <br />
              <span className="lead">
                To achieve that requires work; persistence, discipline and
                methodical skills.
              </span>
              <br />
              <span className="lead">
                We aim to deliver Portfolios that deliver alpha, that is,
                positive returns in all markets.
              </span>
              <br />
              <span className="lead">
                This vision calls for an open mindset (to trends of markets),
                innovative use of investment instruments (to hedge or short and
                not just going long) and consistency (in applying and
                continually improving strategies and techniques).
              </span>
              <br />
            </div>
          </div>
        </section>
        {/* End: What We Do */}
        {/* INSTRUMENTS */}
        <section id="welcome" className="p-b-0">
          <div className="container">
            <div
              className="heading-text heading-section text-center m-b-40"
              data-animate="fadeInUp"
            >
              <h3>INSTRUMENTS</h3>
              <h4>DEMYSTIFYING THE INSTRUMENTS</h4>
              <strong>
                <h5>ETFs</h5>
              </strong>
              <span className="lead">
                An exchange-traded fund (ETF) is a collection of securities—such
                as equities—that tracks an underlying asset, eg Index, Sector,
                Region. It’s a cost effective way of getting diversification
                into a Portfolio and allows Portfolio to be nimble and adapt as
                market view changes or as a holding expressing a particular
                market view. This is a small part of both the Tactical and
                Equities Plus Portfolios.
              </span>
              <br />
              <br />
              <strong>
                <h5>ETOs</h5>
              </strong>
              <span className="lead">
                Exchange Traded Options (ETOs) are derivatives over securities
                with their value derived from underlying assets, eg. a share or
                index. They are traded on and administered by the ASX.
              </span>
              <br />
              <br />
              <strong>
                <h5>Minis/Warrants</h5>
              </strong>
              <span className="lead">
                A Mini/Warrant is a derivative which derives its value from an
                underlying instrument eg. international equities, commodities,
                currencies. Minis/Warrants are traded on the ASX. There is a
                non-recourse loan built-in. The key difference of a Mini is its
                Stop Loss feature. They are issued by financial institutions eg.
                Citi Group who is the Issuer of Minis.
              </span>
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>
        {/* END INSTRUMENTS */}
        <section id="welcome" className="p-b-0">
          <div className="container">
            <div
              className="heading-text heading-section text-center m-b-40"
              data-animate="fadeInUp"
            >
              <h3>INSTRUMENTS</h3>
              <h4>CHOICE OF INSTRUMENTS MAKES A DIFFERENCE</h4>
              <br />
              <img
                src="/images/WebsiteImages/INSTRUMENTS1.png"
                style={{ height: 400, width: 600 }}
              />
            </div>
          </div>
        </section>

        <section id="welcome" className="p-b-0">
          <div className="container">
            <div
              className="heading-text heading-section text-center m-b-40"
              data-animate="fadeInUp"
            >
              <h3>OUR PHILOSOPHY</h3>
              <h4>WHY JUST GO LONG, WHEN YOU CAN DO A LOT MORE?</h4>
              <img
                src="/images/WebsiteImages/OUR PHILOSOPHY.png"
                style={{ height: 400, width: 600 }}
              />
              <br />
            </div>
          </div>
        </section>
        <section id="welcome" className="p-b-0">
          <div className="container">
            <div
              className="heading-text heading-section text-center m-b-40"
              data-animate="fadeInUp"
            >
              <h3>MANAGED PORTFOLIOS</h3>
              <h4>CHOICE OF EITHER OR BOTH</h4>
              <img
                src="/images/WebsiteImages/MANAGEDPORTFOLIOS.png"
                style={{ height: 400, width: 600 }}
              />
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>
        <section id="welcome" className="p-b-0">
          <div className="container">
            <div
              className="heading-text heading-section text-center m-b-40"
              data-animate="fadeInUp"
            >
              <h3>OUR PHILOSOPHY</h3>

              <h4>WHY JUST GO LONG, WHEN YOU CAN DO A LOT MORE?</h4>

              <br />
              <br />
              <br />
            </div>
          </div>
        </section>
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
