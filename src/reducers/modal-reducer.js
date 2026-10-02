export const initialState = {
    modal: false
  };
  
export const modalReducer = (state, action) => {
  switch (action.type) {
    case 'CLOSE_MODAL':
      // Mantener data para que el contenido siga visible durante la animacion de salida
      return {
        ...state,
        modal: false
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: true,
        data: action.payload // Almacenar los datos adicionales en el estado del modal
      };
    default:
      return state;
  }
};
  