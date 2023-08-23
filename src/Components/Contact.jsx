import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Contact = () => {
  const refForm = useRef();

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_98bfolt";
    const templateId = "template_96la5wb";
    const apikey = "xgnzuJ_fTOJg_9y5E";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        setShowModal(true);
        refForm.current.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="contact-page-wrapper" id="Contact">
      <h1 className="primary-heading">¿Tenès alguna consulta?</h1>
      <h1 className="primary-heading">Dejanos Ayudarte</h1>
      <form ref={refForm} action="" onSubmit={handleSubmit}>
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
        </div>
        <div className="contact-form-container">
          <textarea
            name="message"
            maxLength="500"
            placeholder="Escribe tu consulta"
            cols="30"
            required
            style={{
              border: "none",
              outline: "none",
              resize: "none",
              borderRadius: "1rem",
              padding: "0.5rem",
            }}
          />
          <button className="secondary-button">Enviar</button>
        </div>
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

              alignItems: "center",
            }}
          >
            <h2>¡Gracias por tu consulta!</h2>
            <p>A la brevedad entramos en contacto con vos.</p>

            <p className="secondary-button" onClick={() => setShowModal(false)}>
              Regresar
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Contact;
