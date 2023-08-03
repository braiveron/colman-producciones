import React from "react";
import { Link } from "react-router-dom";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";

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
        <div className="about-buttons-container">
          <ReactWhatsapp
            style={{ border: "none" }}
            number="+541151592346"
            message="Hola! Quiero recibir *asesoramiento* de sus servicios para mi evento."
          >
            <button className="secondary-button">Te Asesoramos!</button>
          </ReactWhatsapp>
          <button className="watch-video-button">
            <Link to="https://www.instagram.com/reel/Cs48E8kgNBY/">
              <BsFillPlayCircleFill /> Mira nuestro trabajo
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
