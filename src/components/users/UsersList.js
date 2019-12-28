/* eslint-disable react/prop-types */
import React from "react";
import { Link } from 'react-router-dom'

const UsersList = ({ users }) => (
    <table className="table table-hover">
        <thead>
            <tr>
                <td>Id</td>
                <td>Username</td>
                <td>Name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {users.map(user =>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                        <Link to={`/users/${user.id}`}>{user.username}</Link>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>)
            }
        </tbody>
    </table >);

export default UsersList;