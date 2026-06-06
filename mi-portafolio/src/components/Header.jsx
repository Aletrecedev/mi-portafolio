import React from 'react';
import { misDatos } from '../datos';

export function Header() {
  return (
    <div className="container text-center my-5">
      <img 
        src={misDatos.foto} 
        alt="Perfil" 
        className="rounded-circle mb-3 shadow" 
        style={{ width: '220px', height: '220px', objectFit: 'cover' }} 
      />
      <h1 className="fw-bold">{misDatos.nombre}</h1>
      <h4 className="text-secondary">{misDatos.profesion}</h4>
      <p className="lead mt-3 mb-4">{misDatos.descripcion}</p>

      {/* Ubicación y Redes Sociales */}
      <div className="mt-2">
        {/* Ubicación */}
        <p className="text-muted mb-3 fs-5">
          <i className="fa-solid fa-location-dot me-2"></i>
          {misDatos.ubicacion}
        </p>
        
        {/* Iconos de Redes */}
        <div className="d-flex justify-content-center gap-4 fs-2">
          <a href={misDatos.redes.github} target="_blank" rel="noopener noreferrer" className="text-dark hover-opacity">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={misDatos.redes.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5' }}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      
    </div>
  );
}