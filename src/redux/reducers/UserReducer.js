import * as ActionTypes from "../actions/ActionTypes";

const initialState = {
  item: {},
  state: "loaded"
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USERS.LOAD_REQUEST:
      return Object.assign({}, state, {
        state: "loading"
      });

    case ActionTypes.USERS.LOAD_SUCCESS:
      return Object.assign({}, state, {
        state: "loaded",
        item: action.item
      });

    case ActionTypes.USERS.LOAD_FAILURE:
      return Object.assign({}, state, {
        state: "failed",
        error: action.error
      });

    case ActionTypes.USERS.CREATE_SUCCESS:
      return Object.assign({}, state, {
        state: "loaded",
        item: action.item
      });

    default:
      return state;
  }
}

export default userReducer;