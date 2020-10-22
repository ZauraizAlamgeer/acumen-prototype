import React from "react";

export default function VideoBlog() {
  return (
    <div className="col-lg-4">
      <h2>YouTube</h2>
      <iframe
        width={1280}
        height={720}
        src="https://www.youtube.com/embed/P7k2MkVYLDE?rel=0&showinfo=0"
        allowFullScreen
      />
    </div>
  );
}
