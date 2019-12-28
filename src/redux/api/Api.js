export const getHttpMessage = (url, dispatch, success, failure) => fetch(url)
    .then(response => response.json())
    .then(jsonData => dispatch(success(jsonData)))
    .catch(error => dispatch(failure(error)));

export const postHttpMessage = (url, payload, dispatch, success, failure) => fetch(url, {
    method: 'post',
    body: JSON.stringify(payload)
}).then(response => response.json())
    .then(jsonData => dispatch(success(jsonData)))
    .catch(error => dispatch(failure(error)));

export const putHttpMessage = (url, dispatch, success, failure) => fetch(url)
    .then(response => response.json())
    .then(jsonData => dispatch(success(jsonData)))
    .catch(error => dispatch(failure(error)));