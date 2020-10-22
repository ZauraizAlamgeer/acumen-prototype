import React from "react";

export default function MeetOurTeamBlog(props) {
  return (
    <div className="col-lg-3 center" >
      <div className="team-member">
        <div className="team-image">
          <img src={props.objt.imageUrl} />
        </div>
        <div className="team-desc">
          <h3>{props.objt.name}</h3>
          <span>{props.objt.designation}</span>
          <p>
            {props.objt.quotation}{" "}
          </p>
          <div className="align-center">
            <a className="btn btn-xs btn-slide btn-light" href="#">
              <i className="fab fa-facebook-f" />
              <span>Facebook</span>
            </a>
            <a
              className="btn btn-xs btn-slide btn-light"
              href="#"
              data-width={100}
            >
              <i className="fab fa-twitter" />
              <span>Twitter</span>
            </a>
            <a
              className="btn btn-xs btn-slide btn-light"
              href="#"
              data-width={118}
            >
              <i className="fab fa-instagram" />
              <span>Instagram</span>
            </a>
            <a
              className="btn btn-xs btn-slide btn-light"
              href="mailto:#"
              data-width={80}
            >
              <i className="icon-mail" />
              <span>Mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
