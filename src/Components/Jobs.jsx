import React from "react";
import { Link } from "react-router-dom";
import BookEstudio from "./Sliders/BookEstudio";
import BookInfantil from "./Sliders/BookInfantil";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SocialCorp from "./Sliders/SocialCorp";
import BookIntex from "./Sliders/BookIntEx";
import FotoProducto from "./Sliders/FotoProducto";

const Jobs = () => {
  return (
    <div>
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
            <BookEstudio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
