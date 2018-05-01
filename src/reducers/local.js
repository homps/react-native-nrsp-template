import { INCREMENT } from '../actions/local';

// Define the initial state of our store
const initialState = { count: 0 };

// Define a reducer to handle the various types of state change, using the initial state if non provided
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    default:
      console.log('unexpected action', action);
      return state;
  }
};

export default reducer;
