import { createStore } from 'redux';

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0,
  start: false
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DRINK_COFFEE':
      return { ...state, coffees: state.coffees + 1 };
    case 'EAT_SNACK':
      return { ...state, snacks: state.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.studies + 1 };
    case 'START':
      return { ...state, start: true };
    case 'RESET':
      return { ...state, coffees: 0, snacks: 0, naps: 0, studies: 0, start: false };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
