import React, { useContext } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
  // Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos } = proyectosContext;

  // revisar si hay proyectos
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => {
        return <Proyecto key={proyecto.name} proyecto={proyecto} />;
      })}
    </ul>
  );
};

export default ListadoProyectos;
