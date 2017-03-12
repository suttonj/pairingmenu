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
