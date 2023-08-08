import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
/* import "./App.css"; // Importa tus estilos de App si los tienes */

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
            <ImageSlider />
            <p>Eventos sociales y corporativos</p>
          </div>
          <div className="item">
            <ImageSlider />
            <p>Book Interior/Exterior</p>
          </div>
          <div className="item">
            <ImageSlider />
            <p>Book Infantil</p>
          </div>

          <div className="item">
            <ImageSlider />
            <p>Foto Productos</p>
          </div>
          <div className="item">
            <ImageSlider />
            <p>Videos</p>
          </div>
          <div className="item">
            <ImageSlider />
            <p>Producciones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
