import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../Assets/SocialCorp/1.png";
import Image2 from "../../Assets/SocialCorp/2.png";
import Image3 from "../../Assets/SocialCorp/3.png";
import Image4 from "../../Assets/SocialCorp/4.png";
import Image5 from "../../Assets/SocialCorp/5.png";
import Image6 from "../../Assets/SocialCorp/6.png";
import Image7 from "../../Assets/SocialCorp/7.png";
import Image8 from "../../Assets/SocialCorp/8.png";
import Image9 from "../../Assets/SocialCorp/9.png";
import Image10 from "../../Assets/SocialCorp/10.png";
import Image11 from "../../Assets/SocialCorp/11.png";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
];

const SocialCorp = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Carousel showThumbs={false} showStatus={false}>
        {images.map((image, index) => (
          <div
            className="slider-image"
            key={index}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={image}
              alt={`Image ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SocialCorp;
