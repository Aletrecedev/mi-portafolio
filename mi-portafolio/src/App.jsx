import React, { useState } from "react";
import { Header } from "./components/Header";
import { Proyectos } from "./components/Proyectos";
import { Habilidades } from "./components/Habilidades";
import { Experiencia } from "./components/Experiencia";
import "./App.css";

function App() {
  // Estado para qué pestaña está activa
  const [pestanaActiva, setPestanaActiva] = useState("proyectos");

  return (
    <div className="container py-5">
      <Header />

      {/* Menú de Navegación de Bootstrap */}
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${pestanaActiva === "proyectos" ? "active" : "text-muted"}`}
            onClick={() => setPestanaActiva("proyectos")}
            style={{ cursor: "pointer" }}
          >
            Mis Proyectos
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${pestanaActiva === "habilidades" ? "active" : "text-muted"}`}
            onClick={() => setPestanaActiva("habilidades")}
            style={{ cursor: "pointer" }}
          >
            Habilidades
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${pestanaActiva === "experiencia" ? "active" : "text-muted"}`}
            onClick={() => setPestanaActiva("experiencia")}
            style={{ cursor: "pointer" }}
          >
            Experiencia / Formación
          </button>
        </li>
      </ul>

      {/* Renderizado Condicional */}
      <div className="mt-4">
        {pestanaActiva === "proyectos" && <Proyectos />}
        {pestanaActiva === "habilidades" && <Habilidades />}
        {pestanaActiva === "experiencia" && <Experiencia />}
      </div>
    </div>
  );
}

export default App;
