import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Booking = () => {
  const refForm = useRef();

  const options = [
    { id: "video", label: "Video" },
    { id: "produccion", label: "Produccion Audiovisual" },
    { id: "fotografia", label: "Fotografia" },
    { id: "marketing", label: "Comunicación y Marketing" },
    { id: "desarrollo-web", label: "Desarrollo Web" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_v4qj326";
    const templateId = "template_mu0lrhk";
    const apikey = "WkknylIeDfRNqZ10r";

    // Obtener las opciones seleccionadas como una cadena de texto
    const selectedOptionsString = selectedOptions
      .map((id) => options.find((option) => option.id === id).label)
      .join(", ");

    // Enviar el formulario
    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => result.text)
      .catch((error) => console.error(error));
  };

  const buttonStyle = {
    position: "absolute",
    left: 10,
    top: 10,
    fontSize: "20px",
    color: "#4c4c4c",
    padding: "20px", // Ajusta el padding para cambiar el tamaño
    backgroundColor: "#fe9e0d",
    border: "none",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "transparent",
    },
  };

  return (
    <div className="contact-page-wrapper" id="Contact">
      <Link to="/">
        <Button style={buttonStyle}>
          <ArrowBackIcon />
        </Button>
      </Link>
      <h1 className="primary-heading">¿Que servicio te interesa?</h1>
      <h1 className="primary-heading">Selecciona las opciones</h1>
      <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div
          className="contact-form-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {options.map((option) => (
            <label
              key={option.id}
              style={{
                display: "flex",

                alignItems: "center",
                marginLeft: "35px",
                marginBottom: "20px",
              }}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "2px solid #ccc",
                  backgroundColor: selectedOptions.includes(option.id)
                    ? "yellow"
                    : "transparent",
                  marginRight: "8px",
                }}
              />
              <span
                style={{
                  marginRight: "8px",
                }}
              >
                {option.label}
              </span>
            </label>
          ))}
        </div>
        <div className="contact-form-container">
          <input
            name="username"
            type="text"
            placeholder="Ingresa tu nombre"
            autoComplete="off"
            required
          />
        </div>
        <div className="contact-form-container">
          <input
            name="email"
            type="email"
            placeholder="Ingresa tu email"
            autoComplete="off"
            required
          />
          <button className="secondary-button">Enviar</button>
        </div>
        <input
          name="options"
          type="hidden"
          value={selectedOptions.join(", ")}
        />
      </form>
    </div>
  );
};

export default Booking;
