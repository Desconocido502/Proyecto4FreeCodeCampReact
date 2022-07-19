import React from "react";
import "../css/Logo.css";
import freeCodeCampLogo from "../img/freecodecamp-logo.png";

export default function Logo() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt="Logo de FreeCodeCamp"
      />
    </div>
  );
}
