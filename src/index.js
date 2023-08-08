import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./Components/Booking";
import Jobs from "./Components/Jobs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={App} />
        <Route exact path="/reserva" Component={Booking} />
        <Route exact path="/nuestrostrabajos" Component={Jobs} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
