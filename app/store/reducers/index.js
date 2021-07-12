import {SAVE_TOKEN} from '../actions/types';

const initialState = {
  token: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
export default Reducer;
