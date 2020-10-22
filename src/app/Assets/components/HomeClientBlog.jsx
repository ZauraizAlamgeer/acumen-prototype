import React from "react";

export default function HomeClientBlog(props) {
  return (
    <div>
      <a href="#">
        <img alt="" src={`${props.objt.imageUrl}`} />{" "}
      </a>
    </div>
  );
}
