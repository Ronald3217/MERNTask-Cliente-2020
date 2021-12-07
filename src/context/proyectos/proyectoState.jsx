import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
//TYPES
import { FORMULARIO_PROYECTO } from '../../types';

const ProyectoState = (props) => {
  const initialState = {
    proyectos: [
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
    ],
    formulario: false,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
