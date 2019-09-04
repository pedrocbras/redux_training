import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  if (action.type === 'PROPOSED_GREETING'){
    return {
      ...state,
      proposed_greeting: action.payload
    }
  } else if (action.type === "CHANGE_GREETING") {
    return {
      ...state,
      greeting: state.proposed_greeting
    };
  } else {
    return state;
  }
};

export default rootReducer;
