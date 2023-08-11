import React from "react";
import { Link } from "react-router-dom";
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";
import BookEstudio from "./Sliders/BookEstudio";
import BookInfantil from "./Sliders/BookInfantil";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SocialCorp from "./Sliders/SocialCorp";
import BookIntex from "./Sliders/BookIntEx";
import FotoProducto from "./Sliders/FotoProducto";
import Producciones from "./Sliders/Producciones";

const Jobs = () => {
  return (
    <div className="home-container">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <Link to="/">
        <button className="booking-button">
          <ArrowBackIcon />
        </button>
      </Link>

      <div className="container">
        <div>
          <h1>Mira Nuestros Trabajos</h1>
        </div>
        <div className="row">
          <div className="item">
            <p>Eventos sociales y corporativos</p>
            <SocialCorp />
          </div>
          <div className="item">
            <p>Book Interior/Exterior</p>
            <BookIntex />
          </div>
          <div className="item">
            <p>Book Infantil</p>
            <BookInfantil />
          </div>

          <div className="item">
            <p>Foto Productos</p>
            <FotoProducto />
          </div>
          <div className="item">
            <p>Book Estudio</p>
            <BookEstudio />
          </div>
          <div className="item">
            <p>Producciones</p>
            <Producciones />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
