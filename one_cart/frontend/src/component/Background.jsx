import React from "react";

import image1 from "../assets/logo/image1.png";
import image2 from "../assets/logo/image2.png";
import image3 from "../assets/logo/image3.png";
import image4 from "../assets/logo/image4.png";

const Background = ({ heroCount }) => {
  if (heroCount === 0) {
    return (
      <img
        src={image1}
        className="w-[60%] sm:w[50%] h-[100%] float-right overflow-auto object-cover"
      />
    );
  } else if (heroCount === 1) {
    return (
      <img
        src={image2}
        className="w-[60%] sm:w[50%] h-[100%] float-right overflow-auto object-cover"
      />
    );
  } else if (heroCount === 2) {
    return (
      <img
        src={image3}
        className="w-[60%] sm:w[50%] h-[100%] float-right overflow-auto object-cover"
      />
    );
  } else {
    return (
      <img
        src={image4}
        className="w-[60%] sm:w[50%] h-[100%] float-right overflow-auto object-cover"
      />
    );
  }
};

export default Background;
