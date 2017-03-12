import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_WINE = 'ADD_WINE';
export const ADD_WINES = 'ADD_WINES';
export const DELETE_WINE = 'DELETE_WINE';

// Export Actions
export function addWine(wine) {
  return {
    type: ADD_WINE,
    wine,
  };
}

export function addWineRequest(wine) {
  return (dispatch) => {
    return callApi('wines', 'wine', {
      wine: {
        name: wine.name,
        attributes: wine.attributes,
        flavors: wine.flavors,
      },
    }).then(res => dispatch(addWine(res.wine)));
  };
}

export function addWines(wines) {
  return {
    type: ADD_WINES,
    wines,
  };
}

export function fetchWines() {
  return (dispatch) => {
    return callApi('wines').then(res => {
      dispatch(addWines(res.wines));
    });
  };
}

export function fetchWine(name) {
  return (dispatch) => {
    return callApi(`wines/${name}`).then(res => dispatch(addWine(res.wine)));
  };
}

export function deleteWine(name) {
  return {
    type: DELETE_WINE,
    name,
  };
}

export function deleteWineRequest(name) {
  return (dispatch) => {
    return callApi(`wines/${name}`, 'delete').then(() => dispatch(deleteWine(name)));
  };
}
