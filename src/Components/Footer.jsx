import React from "react";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import Logo from "../Assets/COLMAN.png";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer-wrapper" id="Footer">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <Link to="https://www.instagram.com/nahuel.facundo.ph/">
            <BsInstagram />
          </Link>
          <ReactWhatsapp
            style={{ border: "none" }}
            number="+541151592346"
            message="Hola! Quiero recibir cotización de sus servicios para mi evento."
          >
            <BsWhatsapp />
          </ReactWhatsapp>

          {/*           <BsYoutube />
          <FaFacebookF /> */}
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span onClick={() => scrollToSection("Home")}>Inicio</span>
          <span onClick={() => scrollToSection("Contact")}>Contacto</span>
          <span onClick={() => scrollToSection("About")}>Info</span>
        </div>
        <div className="footer-section-columns">
          <span onClick={() => scrollToSection("Team")}>Team</span>
          <span onClick={() => scrollToSection("Servicios")}>Servicios</span>
        </div>
        <div className="footer-section-columns">
          <span>11 5159-2346</span>
          <span>colmanproduccionesar@gmail.com</span>
          <span>
            <Link
              to="https://www.braianv.com.ar/"
              style={{ textDecoration: "none" }}
            >
              Developed by Braian Veron
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
