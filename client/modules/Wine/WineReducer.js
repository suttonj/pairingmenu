// Import Actions, 
import { ADD_WINE, ADD_WINES, DELETE_WINE, SET_WINES } from './WineActions';

// Initial State
const initialState = { data: [] };

const WineReducer = (state = initialState, action) => {
  switch (action.type) {
  	case ADD_WINE :
      return {
        data: [action.wine, ...state.data],
      };

    case ADD_WINES :
      return {
        data: action.wines,
      };

    case DELETE_WINE :
      return {
        data: state.data.filter(wine => wine.name !== action.name),
      };

    case SET_WINES:
      return {
        data: action.wines,
      };

    default:
      return state;
  }
};

// Get all wines
export const getWines = state => state.wines.data;

// Get post by cuid
export const getWine = (state, name) => state.wines.data.filter(wine => wine.name === name)[0];


export default WineReducer;
