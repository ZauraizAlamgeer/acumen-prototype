import React from "react";
import ReactPlayer from "react-player";

export default function HomeVideoBlog(props) {
  return (
    <section className="p-b-0">
      <div className="container">
        <div className="heading-text heading-section text-center">
          <h2>Media and Educational Contributions</h2>
          <br />
          <p>
            <b>ASX Options and psychology of trading</b>
          </p>
        </div>
      </div>
      <section>
        <div className="container">
          {/*Embeds */}
          <div className="row">
            {props.objt.homeVideoBlog.map((objt, index) =>
              index < 3 ? (
                <div className="col-lg-4">
                  <ReactPlayer
                    width="100%"
                    height="%100"
                    url={objt.urlAddress}
                  />
                </div>
              ) : (
                <div className="col-lg-4">
                  <hr className="space" />
                  <ReactPlayer
                    width="100%"
                    height="%100"
                    url={objt.urlAddress}
                  />
                </div>
              )
            )}
          </div>
          {/*END: Embeds */}
          <hr className="space" />
        </div>
      </section>
    </section>
  );
}
