/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'

import { loadUsers } from "../../redux/actions/UsersActions";
import UsersList from "../../components/users/UsersList";

export default () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    if (users.isLoading === null) {
      dispatch(loadUsers());
    }
  }, [users]);

  const renderUsers = () => (<>
    <h2>Users</h2>
    <Link to={"/users/add"} className="btn btn-primary btn-sm mb-1">Add User</Link>
    <UsersList users={users.items} />
  </>);

  const renderLoadingInProgress = () => (<h2>Loading...</h2>);

  const renderInitialState = () => (<h2>Initialized...</h2>);

  if (users.items) {
    return renderUsers();
  } else if (users.isLoading) {
    return renderLoadingInProgress();
  }
  return renderInitialState();
};