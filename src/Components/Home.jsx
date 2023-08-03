import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Facu from "../Assets/Facu.png";
import NavBar from "./NavBar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container" id="Home">
      <NavBar onNavItemClick={scrollToSection} />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Colman Estudio Producciones Audiovisuales
          </h1>
          <p className="primary-text">
            Somos un equipo que trabaja para brindar soluciones adecuadas en los
            diversos campos del entretenimiento, social y empresarial.
          </p>
          <button className="secondary-button">
            Cotizar <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={Facu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
