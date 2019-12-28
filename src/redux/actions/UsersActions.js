import * as api from "../api/Api";
import * as ActionTypes from "./ActionTypes";

// #### User List Actions ####

export const loadUsers = () => (dispatch) => {
  dispatch(loadUsersRequest());
  const url = 'https://jsonplaceholder.typicode.com/users';
  return api.getHttpMessage(url, dispatch, loadUsersSuccess, loadUsersFailure);
}

const loadUsersRequest = () => ({ type: ActionTypes.USERS.LOAD_LIST_REQUEST });
const loadUsersSuccess = (items) => ({ type: ActionTypes.USERS.LOAD_LIST_SUCCESS, items });
const loadUsersFailure = (error) => {
  console.log(error);
  return { type: ActionTypes.USERS.LOAD_LIST_FAILURE, error };
};

// #### User Management Actions ####

export const initiateLoadUser = (id) => (dispatch) => {
  dispatch(loadUserRequest());
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return api.getHttpMessage(url, dispatch, loadUserSuccess, loadUserFailure);
}

const loadUserRequest = () => ({ type: ActionTypes.USERS.LOAD_REQUEST });
const loadUserSuccess = (item) => ({ type: ActionTypes.USERS.LOAD_SUCCESS, item });
const loadUserFailure = (error) => {
  console.log(error);
  return { type: ActionTypes.USERS.LOAD_FAILURE, error };
}

export const initiateCreateUser = () => {
  var item = {};
  return { type: ActionTypes.USERS.CREATE_SUCCESS, item };
}

export const initiatePutUser = (item) => (dispatch) => {
  dispatch(putUserRequest());
  const url = `https://jsonplaceholder.typicode.com/users/${item.id ? item.id : ''}`;
  return api.postHttpMessage(url, item, dispatch, loadUsersSuccess, loadUsersFailure);
}

export const putUserRequest = (item) => ({ type: ActionTypes.USERS.PUT_REQUEST, item });
export const putUserSuccess = (item) => ({ type: ActionTypes.USERS.PUT_SUCCESS, item });
export const putUserFailure = (error) => ({ type: ActionTypes.USERS.PUT_FAILURE, error });