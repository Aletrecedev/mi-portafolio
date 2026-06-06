import React from 'react';
import { misHabilidades } from '../datos';

export function Habilidades() {
  return (
    <div className="mt-5 pb-5">
      <div className="row justify-content-center">
        {misHabilidades.map((grupo, index) => (
          <div className="col-lg-10 mb-5" key={index}>
            
            {/* Título de la categoría */}
            <h3 className="fw-bold mb-4 text-start border-bottom pb-2">
              {grupo.categoria}
            </h3>
            
            {/* Grid de habilidades */}
            <div className="row g-4">
              {grupo.tecnologias.map((tech, idx) => (
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={idx}>
                  <div 
                    className="h-100 p-3 text-center rounded shadow-sm bg-white border d-flex flex-column align-items-center justify-content-center"
                    style={{ transition: 'all 0.3s' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.classList.add('shadow');
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.classList.remove('shadow');
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Icono con su color original */}
                    <i 
                      className={`${tech.icono} mb-2`} 
                      style={{ fontSize: '2.5rem', color: tech.color }}
                    ></i>
                    <span className="fw-medium text-secondary">{tech.nombre}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}