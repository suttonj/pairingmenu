import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_FOOD = 'ADD_FOOD';
export const ADD_FOODS = 'ADD_FOODS';
export const DELETE_FOOD = 'DELETE_FOOD';

// Export Actions
export function addFood(food) {
  return {
    type: ADD_FOOD,
    food,
  };
}

export function addFoodRequest(food) {
  return (dispatch) => {
    return callApi('foods', 'food', {
      food: {
        name: food.name,
        attributes: food.attributes,
        flavors: food.flavors,
      },
    }).then(res => dispatch(addFood(res.food)));
  };
}

export function addFoods(foods) {
  return {
    type: ADD_FOODS,
    foods,
  };
}

export function fetchFoods() {
  return (dispatch) => {
    return callApi('foods').then(res => {
      dispatch(addFoods(res.foods));
    });
  };
}

export function fetchFood(name) {
  return (dispatch) => {
    return callApi(`foods/${name}`).then(res => dispatch(addFood(res.food)));
  };
}

export function deleteFood(name) {
  return {
    type: DELETE_FOOD,
    name,
  };
}

export function deleteFoodRequest(name) {
  return (dispatch) => {
    return callApi(`foods/${name}`, 'delete').then(() => dispatch(deleteFood(name)));
  };
}
