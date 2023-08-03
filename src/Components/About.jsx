import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="About">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Info</p>
        <h1 className="primary-heading">
          Nuestro servicio es una parte importante de tu evento.
        </h1>
        <p className="primary-text">
          Somos un equipo de personas profesionales, capacitadas en cada una de
          nuestras àreas. Esto nos permite ofrecer còmodamente el mejor servicio
          para que cada detalle del evento se destaque y conmueva a los
          invitados.
        </p>
        {/*        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p> */}
        <div className="about-buttons-container">
          <button className="secondary-button">Mas Info aqui!</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Mira nuestro trabajo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
