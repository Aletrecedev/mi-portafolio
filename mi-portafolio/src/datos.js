import fotoPerfil from './assets/foto-perfil.png';
import fotoPanfleto from './assets/panfleto.png';


//Datos personales

export const misDatos = {
  nombre: "Alejandro Duré",
  profesion: "Desarrollador Web / Estudiante",
  descripcion: "Soy un estudiante del grado superior en Desarrollo de Aplicaciones Web.",
  foto: fotoPerfil, 
  ubicacion: "Sevilla, España",
  redes: {
    github: "https://github.com/Aletrecedev",
    linkedin: "https://www.linkedin.com/in/alejandro-dure/",
  }
};

//Proyectos

export const misProyectos = [
  {
    id: 1,
    titulo: "Proyecto final de grado",
    descripcion: "Una aplicación para gestionar y reservar apartamentos.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Bootstrap", "Springboot", "MySQL"],
    imagen: fotoPanfleto,
    github: "https://github.com/Aletrecedev/Staygo",
    web: "https://staygo-4zvt.onrender.com/"                
  },
];

//Habilidades

export const misHabilidades = [
  {
    categoria: "Frontend & CMS",
    tecnologias: [
      { nombre: "HTML5", icono: "fa-brands fa-html5", color: "#E34F26" },
      { nombre: "CSS3", icono: "fa-brands fa-css3-alt", color: "#1572B6" },
      { nombre: "JavaScript", icono: "fa-brands fa-js", color: "#F7DF1E" },
      { nombre: "React", icono: "fa-brands fa-react", color: "#61DAFB" },
      { nombre: "Bootstrap", icono: "fa-brands fa-bootstrap", color: "#7952B3" },
      { nombre: "WordPress", icono: "fa-brands fa-wordpress", color: "#21759B" },
    ]
  },
  {
    categoria: "Backend & DB",
    tecnologias: [
      { nombre: "Spring Boot", icono: "fa-solid fa-leaf", color: "#6DB33F" },
      { nombre: "Java", icono: "fa-brands fa-java", color: "#007396" },
      { nombre: "Thymeleaf", icono: "fa-solid fa-code-branch", color: "#005F4B" },
      { nombre: "MySQL", icono: "fa-solid fa-database", color: "#4479A1" },
    ]
  },
  {
    categoria: "Herramientas & SEO",
    tecnologias: [
      { nombre: "Git", icono: "fa-brands fa-git-alt", color: "#F05032" },
      { nombre: "GitHub", icono: "fa-brands fa-github", color: "#181717" },
      { nombre: "VS Code", icono: "fa-solid fa-code", color: "#007ACC" },
      { nombre: "Render", icono: "fa-solid fa-cloud", color: "#46E3B7" }, 
      { nombre: "Search Console", icono: "fa-solid fa-chart-line", color: "#4285F4" },
    ]
  }
];

// Experiencia y Formación

export const miExperiencia = [
  {
    id: 1,
    titulo: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
    empresa: "I.E.S. CAMAS",
    fecha: "Sep 2024 - Jun 2026",
    descripcion: "Aprendizaje intensivo de tecnologías frontend y backend. Desarrollo de proyectos completos desde cero, manejo de bases de datos y despliegue de aplicaciones.",
    icono: "fa-solid fa-graduation-cap" // Icono de estudiante
  },
  {
    id: 2,
    titulo: "Desarrollador Web Junior (Prácticas)",
    empresa: "Academia Internacional de Ciencias Criminalísticas",
    fecha: "Mar 2026 - Jun 2026",
    descripcion: "Mantenimiento de páginas web corporativas usando Wordpress, HTML, CSS y JavaScript. Colaboración con el equipo de diseño para implementar nuevas interfaces y posicionamiento SEO Y GEO.",
    icono: "fa-solid fa-briefcase" // Icono de trabajo
  },
  {
    id: 3,
    titulo: "Curso Programación Web Full Stack",
    empresa: "Adecco",
    fecha: "Abr 2024 - Jun 2024",
    descripcion: "Formación específica en React, Hooks, Router y conexión a APIs REST. Proyecto final de e-commerce.",
    icono: "fa-solid fa-laptop-code" // Icono de programación
  }
];