import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import Production from "../Assets/production-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Fotografía y Video",
      text: "Generación de contenido para tu marca o evento. Cobertura de eventos sociales y corporativos. Books interior, exterior o estudio.",
    },
    {
      image: ChooseMeals,
      title: "Comunicación y Marketing",
      text: "Diseño y Branding. Desarrollamos, mejoramos y escalamos tu sitio web. Publicidad con campañas de social ads estratégicas.",
    },
    {
      image: DeliveryMeals,
      title: "Producción y Montaje",
      text: "Servicios a la producción de varidedad de espectáculos. Incluimos el diseño y el manejo de escenografías, montaje de iluminación y sonido.",
    },
    {
      image: Production,
      title: "Producción Audiovisual",
      text: "Amplia gama de servicios. Equipo adecuado para su creatividad desde los primeros pasos del rodaje, hasta el final de la producción.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="Services">
      <div className="work-section-top">
        <p className="primary-subheading">Servicios</p>
        <h1 className="primary-heading">Cómo Trabajamos</h1>
        <p className="primary-text">
          Nuestro objetivo es lograr una fusión equilibrada entre nuestras ideas
          y los requerimentos de nuestros clientes, para así ofrecer la mayor
          calidad, creatividad e innovación.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
