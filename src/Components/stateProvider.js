import React, { createContext, useContext, useReducer } from 'react';

// Crear el contexto
export const StateContext = createContext();

// Proveedor del estado
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Función para usar el estado en los componentes
export const useStateValue = () => useContext(StateContext);
