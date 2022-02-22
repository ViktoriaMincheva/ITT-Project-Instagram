import { LOAD_USERS } from "../actions/allUsersActions";

const INITIAL_STATE = {
    users: []
};

export const allUsersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_USERS:
            return{
                ...state,
                users: action.payload
            };
            default:
                return state;
    }
}