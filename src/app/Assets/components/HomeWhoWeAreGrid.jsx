import React from "react";

export default function HomeWhoWeAreGrid(props) {
  return (
    <div className="col-lg-4">
      <div data-animate="fadeInUp" data-animate-delay={0}>
        <h4>{props.objt.heading}</h4>
        <p>
          {props.objt.description}
        </p>
      </div>
    </div>
  );
}
