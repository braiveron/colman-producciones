import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_v4qj326";
    const templateId = "template_pg4s34j";
    const apikey = "WkknylIeDfRNqZ10r";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => result.text)
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
    </div>
  );
};

export default Contact;
