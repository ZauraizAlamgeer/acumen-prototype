import React from "react";

export default function OurBlog(props) {
  return (
    <div className="post-item border">
      <div className="post-item-wrap">
        <div className="post-image">
          <a href="#">
            <img alt="" src="images/blog/12.jpg" />
          </a>
          <span className="post-meta-category">
            <a href>Lifestyle</a>
          </span>
        </div>
        <div className="post-item-description">
          <span className="post-meta-date">
            <i className="fa fa-calendar-o" />
            Jan 21, 2017
          </span>
          <span className="post-meta-comments">
            <a href>
              <i className="fa fa-comments-o" />
              33 Comments
            </a>
          </span>
          <h2>
            <a href="#">Standard post with a single image</a>
          </h2>
          <p>
            Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
            Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula
            pharetra laoreet.
          </p>
          <a href="#" className="item-link">
            Read More <i className="icon-chevron-right" />
          </a>
        </div>
      </div>
    </div>
  );
}
