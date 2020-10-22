import React from "react";
import Test from "../../Test";
import BookBlog from "../Assets/components/BookBlog";
import Footer from "../Assets/components/Footer";
import Header from "../Assets/components/Header";
// import HomeClientBlog from "../Assets/components/HomeClientBlog";
import HomeServicesGrid from "../Assets/components/HomeServicesGrid";
import HomeVideoBlog from "../Assets/components/HomeVideoBlog";
import HomeWhoWeAreGrid from "../Assets/components/HomeWhoWeAreGrid";
import LinksBlog from "../Assets/components/LinksBlog";
import MeetOurTeamBlog from "../Assets/components/MeetOurTeamBlog";
import Slider from "../Assets/Shared/Slider";

export default function Home(props) {
  return (
    <div>
      {/* Body Inner */}
      <div className="body-inner">
        {/* Header */}
        <Header />
        {/* end: Header */}
        {/* Inspiro Slider */}
        <div
          id="slider"
          className="inspiro-slider slider-fullscreen dots-creative"
          data-fade="true"
        >
          {/* <Slider /> */}
          <Test />
        </div>
        {/*end: Inspiro Slider */}
        {/* WELCOME */}
        {/* <section id="welcome" className="p-b-0">
          <div className="container">
            <div
              className="heading-text heading-section text-center m-b-40"
              data-animate="fadeInUp"
            >
              <h2>Welcome to the World of Acumen</h2>
              <span className="lead">
                Create amam ipsum dolor sit amet, Beautiful nature, and rare
                feathers!.
              </span>
            </div>
            <div className="row" data-animate="fadeInUp">
              <div className="col-lg-12">
                <img
                  className="img-fluid"
                  src="images/parallax/29.jpg"
                  alt="Welcome to POLO"
                />
              </div>
            </div>
          </div>
        </section> */}
        {/* end: WELCOME */}
        {/* Who We Are */}
        <section id="welcome" className="p-b-0">
          <div className="container">
            <div className="heading-text heading-section text-center">
              <b>
                <h2>Who We Are</h2>
              </b>
              <p>
                <b>
                  We are not in the business of just giving advice but in the
                  sharing of risks and rewards with our clients
                </b>
              </p>
              <br />
              <span className="lead"></span>
            </div>
            <div className="row">
              {props.data.whoWeAreGrid.map((objt) => (
                <HomeWhoWeAreGrid objt={objt} />
              ))}
            </div>
          </div>
        </section>
        {/* END Who We Are */}

        {/* OUR SYTLE */}
        <section id="welcome" className="p-b-0">
          <div className="container">
            <div className="heading-text heading-section text-center">
              <h2>Our Style</h2>
              <p>
                <b>
                  We adopt a long and short investment style to our managed
                  portfolios
                </b>
              </p>
              <br />
              <span className="lead"></span>
            </div>
            <div className="row">
              {props.data.whoWeAreGrid.map((objt) => (
                <HomeWhoWeAreGrid objt={objt} />
              ))}
            </div>
          </div>
        </section>
        {/* END OUR STYLE*/}

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
        {/* End What We Do */}

        {/* How We Invest */}
        <section id="welcome" className="p-b-0">
          <div className="container">
            <div
              className="heading-text heading-section text-center m-b-40"
              data-animate="fadeInUp"
            >
              <h2>How We Invest</h2>
              <span className="lead">Read the markets</span>
              <br />
              <span className="lead">Strategies</span>
              <br />
              <span className="lead">Find ideas</span>
              <br />
              <span className="lead">
                Filter ideas according to set criteria
              </span>
              <br />
              <span className="lead">
                Determine the appropriate investment instrument(s){" "}
              </span>
              <br />
              <span className="lead">
                Calculate their risk and reward ratios
              </span>
              <br />
              <span className="lead">Implement/Discard ideas</span>
              <br />
              <span className="lead">Monitor Portfolios</span>
              <br />
              <span className="lead">Cut losses/Take profits</span>
              <br />
              <span className="lead">Manage hedges</span>
              <br />
              <span className="lead">Do 1-10 all overall again</span>
            </div>
          </div>
        </section>
        {/* End How We Invest */}

        {/* Media and Educational Contributions */}
        {/* <HomeMediaAndEducationalContributionBlog /> */}
        <LinksBlog />
        <HomeVideoBlog objt={props.data} />
        <BookBlog />

        {/* End: Media and Educational Contributions */}

        {/* SERVICES */}
        <section>
          <div className="container">
            <div className="heading-text heading-section text-center">
              <h2>Products and Services</h2>
              <p>
                <b>Products and Services Detail</b>
              </p>
            </div>
            <div className="row">
              {props.data.productAndServicesBlog.map((objt) => (
                <HomeServicesGrid objt={objt} />
              ))}
            </div>
          </div>
        </section>
        {/* end: SERVICES */}

        {/* COUNTERS */}
        <section
          className="text-light p-t-150 p-b-150 "
          data-bg-parallax="images/WebsiteImages/counter1.png"
        >
          <div className="bg-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="text-center">
                  <div className="icon">
                    <i className="fa fa-3x fa-code" />
                  </div>
                  <div className="counter">
                    {" "}
                    <span
                      data-speed={3000}
                      data-refresh-interval={50}
                      data-to={12416}
                      data-from={600}
                      data-seperator="true"
                    />{" "}
                  </div>
                  <div className="seperator seperator-small" />
                  <p>LINES OF CODE</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="text-center">
                  <div className="icon">
                    <i className="fa fa-3x fa-coffee" />
                  </div>
                  <div className="counter">
                    {" "}
                    <span
                      data-speed={4500}
                      data-refresh-interval={23}
                      data-to={365}
                      data-from={100}
                      data-seperator="true"
                    />{" "}
                  </div>
                  <div className="seperator seperator-small" />
                  <p>CUPS OF COFFEE</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="text-center">
                  <div className="icon">
                    <i className="fa fa-3x fa-rocket" />
                  </div>
                  <div className="counter">
                    {" "}
                    <span
                      data-speed={3000}
                      data-refresh-interval={12}
                      data-to={114}
                      data-from={50}
                      data-seperator="true"
                    />{" "}
                  </div>
                  <div className="seperator seperator-small" />
                  <p>FINISHED PROJECTS</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="text-center">
                  <div className="icon">
                    <i className="fa fa-3x fa-smile-o" />
                  </div>
                  <div className="counter">
                    {" "}
                    <span
                      data-speed={4550}
                      data-refresh-interval={50}
                      data-to={14825}
                      data-from={48}
                      data-seperator="true"
                    />{" "}
                  </div>
                  <div className="seperator seperator-small" />
                  <p>SATISFIED CLIENTS</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: COUNTERS */}
        {/* TEAM */}
        <section className="background-grey">
          <div className="container">
            <div className="heading-text heading-section text-center">
              <h2>OUR TEAM</h2>
              <p></p>
            </div>
            <div className="row team-members">
              {props.data.ourTeamBlog.map((objt) => (
                <MeetOurTeamBlog objt={objt} />
              ))}
            </div>
          </div>
        </section>
        {/* end: TEAM */}
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
