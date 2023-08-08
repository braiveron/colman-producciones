import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../Assets/BookEstudio/1.JPG";
import Image2 from "../Assets/BookEstudio/2.JPG";
import Image3 from "../Assets/BookEstudio/3.JPG";
import Image4 from "../Assets/BookEstudio/4.JPG";
import Image5 from "../Assets/BookEstudio/5.jpg";
import Image6 from "../Assets/BookEstudio/6.jpg";
import Image7 from "../Assets/BookEstudio/7.jpg";
import Image8 from "../Assets/BookEstudio/8.JPG";
import Image9 from "../Assets/BookEstudio/9.JPG";
import Image10 from "../Assets/BookEstudio/10.jpg";
import Image11 from "../Assets/BookEstudio/11.JPG";

const ImageSlider = () => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      <div>
        <img src={Image1} alt="Image 1" />
      </div>
      <div>
        <img src={Image2} alt="Image 2" />
      </div>
      {/*  <div>
        <img src={Image3} alt="Image 3" />
  </div> */}
      <div>
        <img src={Image4} alt="Image 4" />
      </div>
      <div>
        <img src={Image5} alt="Image 5" />
      </div>
      <div>
        <img src={Image6} alt="Image 6" />
      </div>
      <div>
        <img src={Image7} alt="Image 7" />
      </div>
      <div>
        <img src={Image8} alt="Image 8" />
      </div>
      <div>
        <img src={Image9} alt="Image 9" />
      </div>
      <div>
        <img src={Image10} alt="Image 10" />
      </div>
      <div>
        <img src={Image11} alt="Image 11" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
