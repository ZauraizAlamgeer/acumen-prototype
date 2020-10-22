import React from "react";
import Footer from "../Assets/components/Footer";
import Header from "../Assets/components/Header";
import MeetOurTeamBlog from "../Assets/components/MeetOurTeamBlog";

export default function Team(props) {
  return (
    <div>
      <div className="body-inner">
        {/* Header */}
        <Header />
        {/* end: Header */}
        <div
          id="slider"
          className="inspiro-slider dots-creative"
          data-height-xs={360}
        >
          <div
            className="slide kenburns"
            style={{ backgroundImage: 'url("images/WebsiteImages/team.png' }}
          ></div>
          {/* end: Slide 2 */}
        </div>
        {/*end: Inspiro Slider */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="heading-text heading-section">
                  <h2>THE COMPANY</h2>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-6">
                    The most happiest time of the day!. Morbi sagittis, sem quis
                    lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
                    sapien ut justo. Nulla varius consequat magna, id molestie
                    ipsum volutpat quis. A true story, that never been told!.
                    Fusce id mi diam, non ornare orci. Pellentesque ipsum erat,{" "}
                    <br /> <br /> facilisis ut venenatis eu, sodales vel dolor.
                    The most happiest time of the day!. Morbi sagittis, sem quis
                    lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
                    sapien ut justo. Nulla varius consequat magna, id molestie
                    ipsum volutpat quis. A true story, that never been told!.
                    Fusce id mi diam, non ornare orci. Pellentesque ipsum erat,
                    facilisis ut venenatis eu, sodales vel dolor.{" "}
                  </div>
                  <div className="col-lg-6">
                    Pellentesque ipsum erat, facilisis ut venenatis eu, sodales
                    vel dolor. The most happiest time of the day!. Morbi
                    sagittis, sem quis lacinia faucibus, orci ipsum gravida
                    tortor, vel interdum mi sapien ut justo. Nulla varius
                    consequat magna, id molestie ipsum volutpat quis. A true
                    story, that never been told!. Fusce id mi diam, non ornare
                    orci. Pellentesque ipsum erat, facilisis ut venenatis eu,
                    sodales vel dolor. Pellentesque ipsum erat, facilisis ut
                    venenatis eu, sodales vel dolor. <br /> <br />
                    The most happiest time of the day!. Morbi sagittis, sem quis
                    lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
                    sapien ut justo. Nulla varius consequat magna, id molestie
                    ipsum volut.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="box-fancy section-fullwidth text-light p-b-0">
          <div className="row">
            <div style={{ backgroundColor: "#917d5d" }} className="col-lg-4">
              <h1 className="text-lg text-uppercase">01.</h1>
              <h3>CONCEPT</h3>
              <span>
                The most happiest time of the day!. Morbi sagittis, sem quis
                lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
                sapien ut justo. Nulla varius consequat magna, id molestie ipsum
                volutpat quis. A true story, that never been told!.{" "}
              </span>
            </div>
            <div style={{ backgroundColor: "#a08c6c" }} className="col-lg-4">
              <h1 className="text-lg text-uppercase">02.</h1>
              <h3>DEVELOPMENT</h3>
              <span>
                The most happiest time of the day!. Morbi sagittis, sem quis
                lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
                sapien ut justo. Nulla varius consequat magna, id molestie ipsum
                volutpat quis. A true story, that never been told!.{" "}
              </span>
            </div>
            <div style={{ backgroundColor: "#ad9979" }} className="col-lg-4">
              <h1 className="text-lg text-uppercase">03.</h1>
              <h3>TESTING</h3>
              <span>
                The most happiest time of the day!. Morbi sagittis, sem quis
                lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
                sapien ut justo. Nulla varius consequat magna, id molestie ipsum
                volutpat quis. A true story, that never been told!.{" "}
              </span>
            </div>
          </div>
        </section>
        <section className="background-grey">
          <div className="container">
            <div className="heading-text heading-section text-center">
              <h2>OUR TEAM</h2>
              <span className="lead">
                Create amaThe most happiest time of the day!.
              </span>
            </div>
            <div className="row team-members">
              {props.data.ourTeamBlog.map((objt) => (
                <MeetOurTeamBlog objt={objt} />
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="heading-text text-center">
              <h2>What people are saying!</h2>
              <p className="lead text-center">
                The most happiest time of the day!. Morbi sagittis, sem quis
                lacinia faucibus, orci ipsum gravida tortor, vel interdum mi
                sapien ut justo.
              </p>
            </div>
            {/* Testimonials */}
            <div
              className="carousel arrows-visibile testimonial testimonial-single testimonial-left"
              data-items={1}
            >
              {/* Testimonials item */}
              <div className="testimonial-item">
                <img src="images/team/9.jpg" alt="" />
                <p>
                  Polo is by far the most amazing template out there! I
                  literally could not be happier that I chose to buy this
                  template!
                </p>
                <span>Alan Monre</span>
                <span>CEO, Square Software</span>
              </div>
              {/* end: Testimonials item*/}
              {/* Testimonials item */}
              <div className="testimonial-item">
                <img src="images/team/9.jpg" alt="" />
                <p>
                  Polo is by far the most amazing template out there! I
                  literally could not be happier that I chose to buy this
                  template!
                </p>
                <span>Alan Monre</span>
                <span>CEO, Square Software</span>
              </div>
              {/* end: Testimonials item*/}
              {/* Testimonials item */}
              <div className="testimonial-item">
                <img src="images/team/9.jpg" alt="" />
                <p>
                  The world is a dangerous place to live; not because of the
                  people who are evil, but because of the people who don't do
                  anything about it.
                </p>
                <span>Alan Monre</span>
                <span>CEO, Square Software</span>
              </div>
              {/* end: Testimonials item*/}
            </div>
            {/* end: Testimonials */}
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
