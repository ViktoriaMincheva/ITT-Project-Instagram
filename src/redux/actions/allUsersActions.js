export const LOAD_USERS = "LOAD_USERS";

export const loadUsers = () => {

    return function(dispatch) {
        fetch("../users-data.json")
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: LOAD_USERS, payload: data.users})
        })
    }
};