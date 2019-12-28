/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { initiateCreateUser, initiateLoadUser, initiatePutUser } from "../../redux/actions/UsersActions";

export default () => {
    const history = useHistory();
    const { id } = useParams();

    const dispatch = useDispatch();
    const model = useSelector(state => state.user);

    const [user, setUser] = useState(model.item);
    const usernameInput = React.createRef();
    console.log("###### id", id);
    console.log("model", model);
    console.log("user", user)

    useEffect(() => {
        if (model.state === "loaded") {
            if (model.item.id !== (id ? parseInt(id) : id)) {
                if (id) {
                    dispatch(initiateLoadUser(id));
                } else {
                    dispatch(initiateCreateUser());
                }
            } else {
                setUser(model.item);
                usernameInput.current.focus();
            }
        }
    }, [model]);

    const renderLoadingState = () => (<>
        <h2>Loading...</h2>
    </>);

    const renderInitiatedState = () => (<>
        <h2>Initialized...</h2>
    </>);

    const onFieldChange = (event) => {
        const { name, value } = event.target;
        setUser(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const onFormSubmitted = event => {
        event.preventDefault();
        dispatch(initiatePutUser(user));
    };

    const onFormCanceled = () => history.push('/users');

    const renderLoadedState = () => (<>
        <form onSubmit={onFormSubmitted}>
            <div className="mb-1">
                <label>
                    <span>Username:</span>
                    <input type="text" className="form-control" onChange={onFieldChange} name="username" value={user.username ? user.username : ''} ref={usernameInput} />
                </label>
            </div>

            <div className="mb-1">
                <label>
                    <span>Username:</span>
                    <input type="text" className="form-control" onChange={onFieldChange} name="name" value={user.name ? user.name : ''} />
                </label>
            </div>

            <button type="submit" className="btn btn-primary btn-sm mr-1">Save</button>
            <button type="button" onClick={onFormCanceled} className="btn btn-dark btn-sm">Cancel</button>
        </form>
    </>);

    const renderForm = () => {
        if (model.state === "initiated") {
            return renderInitiatedState();
        } else if (model.state === "loading") {
            return renderLoadingState();
        } else {
            return renderLoadedState();
        }
    };

    return (<>
        <h2 className="mb-2">{id ? `Edit User Profile` : `Add User`}</h2>
        {renderForm()}
    </>)

};