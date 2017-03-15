// Import Actions
import { ADD_FOOD, ADD_FOODS, DELETE_FOOD } from './FoodActions';

// Initial State
const initialState = { data: [] };

const FoodReducer = (state = initialState, action) => {
  switch (action.type) {
  	case ADD_FOOD :
      return {
        data: [action.food, ...state.data],
      };

    case ADD_FOODS :
      return {
        data: action.foods,
      };

    case DELETE_FOOD :
      return {
        data: state.data.filter(food => food.name !== action.name),
      };

    default:
      return state;
  }
};

// Get all foods
export const getFoods = state => state.foods.data;

// Get post by cuid
export const getFood = (state, name) => state.foods.data.filter(food => food.name === name)[0];


export default FoodReducer;
