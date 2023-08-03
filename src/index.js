import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./Components/Booking";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}> */}
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={App} />
        <Route exact path="/reserva" Component={Booking} />
      </Routes>
    </BrowserRouter>
    {/*   </MuiPickersUtilsProvider> */}
  </React.StrictMode>
);
