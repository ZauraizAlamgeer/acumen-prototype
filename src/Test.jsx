import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import AwsSliderStyles from "./Slider.scss"

import "react-awesome-slider/dist/styles.css";

export default function Test() {
  return (
    <AwesomeSlider cssModule={AwesomeSliderStyles}>
      <div data-src="/images/WebsiteImages/Hero1.png">
        <p>Slider 1</p>
      </div>
      <div data-src="images/WebsiteImages/Hero2.png">
        <p>Slider 2</p>

        
      </div>
    </AwesomeSlider>
  );
}
