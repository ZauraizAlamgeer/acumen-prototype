import React from "react";
import { Link } from "react-router-dom";
import Home from "../../Pages/Home";

export default function Header() {
  return (
    <header id="header" data-fullwidth="true" className="header-alternative">
      <div className="header-inn er">
        <div className="container">
          {/*Logo*/}
          <a>
            <div id="logo">
              <a to="/" href="/">
                <img src="" className="logo-default" />
                <img src="" className="logo-dark" />
              </a>
            </div>
          </a>
          {/*End: Logo*/}

          {/*Navigation Resposnive Trigger*/}
          <div id="mainMenu-trigger">
            <a className="lines-button x">
              <span className="lines" />
            </a>
          </div>
          {/*end: Navigation Resposnive Trigger*/}
          {/*Navigation*/}
          <div id="mainMenu" className="menu-center menu-lowercase">
            <div className="container">
              <nav>
                <ul>
                  <li>
                    <a to="/" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a to="/" href="/">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a to="/" href="/">
                      Insights
                    </a>
                  </li>
                  <li>
                    <a to="/team" href="/team">Team</a>
                  </li>
                  <li>
                    <a to="/portfolio" href="/portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a to="/services" href="/services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a to="/contact-us" href="/contact-us">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a to="/login" href="/login">
                      Connect Portal
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/*end: Navigation*/}
        </div>
      </div>
    </header>
  );
}
