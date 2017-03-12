// Import Actions
import { 
	TOGGLE_ADD_POST,
	TOGGLE_ADD_WINE,
} from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showAddWine: true,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    case TOGGLE_ADD_WINE:
      return {
        showAddWine: !state.showAddWine,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

export const getShowAddWine = state => state.app.showAddWine;

// Export Reducer
export default AppReducer;
