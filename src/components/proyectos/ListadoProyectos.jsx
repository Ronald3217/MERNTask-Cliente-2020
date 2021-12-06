import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: 'Aplicación de Intranet' },
    { nombre: 'Aplicación de Tienda Virtual' },
    { nombre: 'Aplicación Escritorio' },
    { nombre: 'Aplicación Móvil' },
    { nombre: 'Aplicación Web' },
    { nombre: 'Diseño de Sitio Web' },
    { nombre: 'Intranet' },
    { nombre: 'Landing Page' },
    { nombre: 'Página Web' },
    { nombre: 'Tienda Virtual' },
  ];
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => {
        return <Proyecto key={proyecto.name} proyecto={proyecto} />;
      })}
    </ul>
  );
};

export default ListadoProyectos;
