import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROPOSED_GREETING":
      return {
        ...state,
        proposed_greeting: action.payload
      };
    case "CHANGE_GREETING":
      return {
        ...state,
        greeting: state.proposed_greeting
      };
    default:
      return state;
  }

  // if (action.type === 'PROPOSED_GREETING'){
  //   return {
  //     ...state,
  //     proposed_greeting: action.payload
  //   }
  // } else if (action.type === "CHANGE_GREETING") {
  //   return {
  //     ...state,
  //     greeting: state.proposed_greeting
  //   };
  // } else {
  //   return state;
  // }
};

export default rootReducer;
