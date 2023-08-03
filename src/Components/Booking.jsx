import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DatePicker } from "@material-ui/pickers";

const Booking = () => {
  const refForm = useRef();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const options = [
    { id: "video", label: "Video" },
    { id: "produccion", label: "Produccion Audiovisual" },
    { id: "fotografia", label: "Fotografia" },
    { id: "marketing", label: "Comunicación y Marketing" },
    { id: "desarrollo-web", label: "Desarrollo Web" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDate, changeSelectedDate] = useState(null);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((label) => label !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_v4qj326";
    const templateId = "template_mu0lrhk";
    const apikey = "WkknylIeDfRNqZ10r";

    const selectedOptionsString = selectedOptions
      .map((label) => options.find((option) => option.label === label).label)
      .join(", ");

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)

      .then((result) => {
        setShowModal(true);
        setSelectedOptions([]);
        changeSelectedDate(new Date());
        refForm.current.reset();
      })

      .catch((error) => console.error(error));
  };

  const buttonStyle = {
    position: "absolute",
    left: 10,
    top: 10,
    fontSize: "20px",
    color: "#4c4c4c",
    padding: "20px",
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label>Fecha de tu Evento</label>

          <DatePicker value={selectedDate} onChange={changeSelectedDate} />
        </div>
        <input name="selected-date" type="hidden" value={selectedDate} />

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
                checked={selectedOptions.includes(option.label)}
                onChange={() => handleCheckboxChange(option.label)}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "2px solid #ccc",
                  backgroundColor: selectedOptions.includes(option.label)
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

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "5rem",
              borderRadius: "20px",
            }}
          >
            <h2>¡Gracias por tu reserva!</h2>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="secondary-button">Ir al inicio.</p>
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Booking;
