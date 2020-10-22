import React from "react";
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { url: "images/WebsiteImages/Hero1.png" },
  { url: "images/WebsiteImages/Hero2.png" },
];

export default function Slider() {
  return (
    <div>
      <SimpleImageSlider width={"100%"} height={"100%"} images={images} slideDuration={2} showBullets={false}>
          <span>sdasdasdasdasd</span>
          </SimpleImageSlider>
    </div>
  );
}
