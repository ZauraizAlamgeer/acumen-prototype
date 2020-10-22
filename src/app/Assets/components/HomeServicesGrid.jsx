import React from "react";

export default function HomeServicesGrid(props) {
  return (
    <div className="col-lg-4" data-animate="fadeInUp" data-animate-delay={0}>
      <div className="icon-box effect medium border small">
        <h3>{props.objt.heading}</h3>
        <p>
          {props.objt.description}
        </p>
      </div>
    </div>
  );
}
