// reducer.js
export const initialState = {
    basket: [],
    total: 0, // Agregado para manejar el total
  };
  
  export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    CLEAR_BASKET: "CLEAR_BASKET",
    SET_TOTAL: "SET_TOTAL", // Nuevo tipo de acción para establecer el total
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_BASKET:
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case actionTypes.CLEAR_BASKET:
        return {
          ...state,
          basket: [],
        };
      case actionTypes.SET_TOTAL:
        return {
          ...state,
          total: action.total,
        };
      default:
        return state;
    }
  };
  