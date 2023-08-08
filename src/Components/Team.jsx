import React from "react";
import ProfilePicFranco from "../Assets/franco-image.png";
import ProfilePicFacundo from "../Assets/facundo-image.png";
import ProfilePicFarid from "../Assets/farid-image.png";
import ProfilePicDiego from "../Assets/diego-image.png";
import ProfilePicBraian from "../Assets/braian-image.png";
import { AiFillStar } from "react-icons/ai";

const Team = () => {
  return (
    <div className="work-section-wrapper" id="Team">
      <div className="work-section-top">
        <p className="primary-subheading">Team</p>
        <h1 className="primary-heading">Nuestro Equipo</h1>
        <p className="primary-text">
          Además de ser una productora de fotografía y video, somos también un
          espacio donde los sentimientos y emociones se mezclan armónicamente
          con las ideas y habilidades de jóvenes profesionales, dando como
          resultado final lo que buscamos concretar junto a nuestros clientes.
        </p>
      </div>
      <div className="testimonial-section-container">
        <div className="testimonial-section-bottom">
          <img src={ProfilePicFacundo} alt="" />
          {/*       <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div> */}
          <h2>Facundo Colman</h2>
          <p>PH & Filmmaker - Productor</p>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePicFranco} alt="" />
          <h2>Franco Pujol</h2>
          <p>Marketing</p>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePicDiego} alt="" />
          <h2>Diego Gaidai</h2>
          <p>CEO</p>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePicFarid} alt="" />
          <h2>Facundo Farid</h2>
          <p>Productor Musical</p>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePicBraian} alt="" />
          <h2>Braian Veron</h2>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
