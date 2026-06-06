import React, { useState } from 'react';
import { misProyectos } from '../datos';

export function Proyectos() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  return (
    <>
      {/* Grid de proyectos (Portadas) */}
      <div className="row mt-4 g-3 justify-content-center">
        {misProyectos.map((proyecto) => (
          <div className="col-md-4" key={proyecto.id}>
            
            {/* Contenedor principal de la portada */}
            <div 
              className="proyecto-card position-relative overflow-hidden rounded shadow" 
              style={{ cursor: 'pointer', height: '450px' }} 
              onClick={() => setProyectoSeleccionado(proyecto)}
            >
              {/* La imagen de fondo */}
              <img 
                src={proyecto.imagen} 
                alt={proyecto.titulo} 
                className="w-100 h-100" 
                style={{ objectFit: 'cover' }} 
              />
              
              {/* La capa oscura que aparece al pasar el ratón */}
              <div className="proyecto-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <h4 className="text-white fw-bold text-center px-3">
                  {proyecto.titulo}
                </h4>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Modal */}
      {proyectoSeleccionado && (
        <div 
          className="modal show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1050 }}
          onClick={() => setProyectoSeleccionado(null)}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              
              <div className="modal-body p-0"> 
                <div className="row g-0">
                  
                  {/* Columna Izquierda: Imagen vertical */}
                  <div className="col-md-5 d-none d-md-block">
                    <img 
                      src={proyectoSeleccionado.imagen} 
                      alt={proyectoSeleccionado.titulo} 
                      className="img-fluid h-100" 
                      style={{ objectFit: 'cover', minHeight: '450px' }}
                    />
                  </div>

                  {/* Columna Derecha: Información */}
                  <div className="col-md-7 p-4 bg-white">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h2 className="fw-bold m-0">{proyectoSeleccionado.titulo}</h2>
                      <div className="fs-4">
                        
                        {/* Iconos de GitHub y Enlace */}
                        <a href={proyectoSeleccionado.github} target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                          <i className="fa-brands fa-github"></i>
                        </a>
                        <a href={proyectoSeleccionado.web} target="_blank" rel="noopener noreferrer" className="text-dark">
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <button onClick={() => setProyectoSeleccionado(null)} className="btn-close ms-3"></button>
                      </div>
                    </div>

                    <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                      {proyectoSeleccionado.descripcion}
                    </p>

                    <div className="mt-4">
                      <h6 className="fw-bold mb-3">
                        <i className="fa-solid fa-code me-2"></i> Tecnologías Utilizadas:
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {proyectoSeleccionado.tecnologias.map((tech, index) => (
                          <span 
                            key={index} 
                            className="badge border text-dark fw-normal px-3 py-2" 
                            style={{ backgroundColor: '#f3f4f6', borderRadius: '8px' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 text-end">
                      <button 
                        className="btn btn-dark px-4 py-2" 
                        style={{ borderRadius: '10px' }}
                        onClick={() => setProyectoSeleccionado(null)}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}