import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../Assets/FotoProducto/1.png";
import Image2 from "../../Assets/FotoProducto/2.png";
import Image3 from "../../Assets/FotoProducto/3.png";
import Image4 from "../../Assets/FotoProducto/4.png";
import Image5 from "../../Assets/FotoProducto/5.png";
import Image6 from "../../Assets/FotoProducto/6.png";
import Image7 from "../../Assets/FotoProducto/7.png";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

const FotoProducto = () => {
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

export default FotoProducto;
