import React from 'react';
import { miExperiencia } from '../datos';

export function Experiencia() {
  return (
    <div className="row justify-content-center mt-5 pb-5">
      <div className="col-lg-8">
        {miExperiencia.map((item, index) => (
          <div 
            key={item.id} 
            className="card border-0 shadow-sm mb-4 position-relative overflow-hidden"
          >
            {/* Adorno visual a la izquierda de la tarjeta */}
            <div className="position-absolute top-0 start-0 h-100 bg-primary" style={{ width: '5px' }}></div>
            
            <div className="card-body p-4 ms-2">
              <div className="d-flex flex-column flex-md-row gap-4">
                
                {/* Columna del Icono y Fecha (Lado Izquierdo) */}
                <div className="d-flex flex-column align-items-center justify-content-center flex-shrink-0" style={{ width: '120px' }}>
                  <div 
                    className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-2" 
                    style={{ width: '60px', height: '60px' }}
                  >
                    <i className={`${item.icono} fs-3 text-primary`}></i>
                  </div>
                  <span className="badge bg-secondary text-wrap text-center" style={{ width: '100px' }}>
                    {item.fecha}
                  </span>
                </div>

                {/* Columna del Texto (Lado Derecho) */}
                <div className="flex-grow-1">
                  <h4 className="fw-bold mb-1">{item.titulo}</h4>
                  <h6 className="text-primary mb-3">
                    <i className="fa-solid fa-building me-2"></i>
                    {item.empresa}
                  </h6>
                  <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                    {item.descripcion}
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}