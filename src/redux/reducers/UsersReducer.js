import * as ActionTypes from "../actions/ActionTypes";

const initialState = {
  items: null,
  isLoading: null,
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USERS.LOAD_LIST_REQUEST:
      return Object.assign({}, state, {
        items: [],
        isLoading: true,
        error: null
      });

    case ActionTypes.USERS.LOAD_LIST_SUCCESS:
      return Object.assign({}, state, {
        items: action.items,
        isLoading: false,
        error: null
      });

    case ActionTypes.USERS.LOAD_LIST_FAILURE:
      return Object.assign({}, state, {
        items: null,
        isLoading: false,
        error: action.error
      });

    default:
      return state;
  }
}

export default usersReducer;