import callApi from '../../util/apiCaller';

import { setWines } from '../Wine/WineActions';

// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';

export const TOGGLE_ADD_WINE = 'TOGGLE_ADD_WINE';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleAddWine() {
  return {
    type: TOGGLE_ADD_WINE,
  };
}

export function searchWinePairings(food) {
  return (dispatch) => {
    return callApi('pairings/' + food).then(res => {
			const wines = [];
    	if (res.topWines) {
    		for (let i in res.topWines) {
    			let pairingObj = { ...res.topWines[i].wine };
    			pairingObj.score = res.topWines[i].score;
    			wines.push(pairingObj);
    		}
    	}
      dispatch(setWines(wines));
    });
  };
}