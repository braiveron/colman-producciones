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
        <h1
          className="primary-heading"
          style={{
            backgroundColor: "#f6f6f6",
            padding: "0.5rem 0.2rem",
            borderRadius: "20px",
          }}
        >
          Nuestro servicio es una parte importante de tu evento.
        </h1>
        <p
          className="primary-text"
          style={{
            backgroundColor: "#f6f6f6",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          Somos un equipo de personas profesionales, capacitadas en cada una de
          nuestras àreas. Esto nos permite ofrecer còmodamente el mejor servicio
          para que cada detalle del evento se destaque y conmueva a los
          invitados.
        </p>
        <div className="about-buttons-container">
          <ReactWhatsapp
            style={{ border: "none", backgroundColor: "transparent" }}
            number="+541151592346"
            message="Hola! Quiero recibir *asesoramiento* de sus servicios para mi evento."
          >
            <span className="secondary-button">Te Asesoramos!</span>
          </ReactWhatsapp>
          <Link to="/nuestrostrabajos" className="watch-video-button">
            <span className="watch-video-button">
              <BsFillPlayCircleFill /> Mira nuestro trabajo
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
