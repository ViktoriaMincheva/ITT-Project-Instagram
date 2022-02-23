import { LOAD_COMMENTS, NEW_COMMENT_ADDED } from "../actions/commentsActions";

const INITIAL_STATE = {
    comments: []
};

export const commentsProvider = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        case NEW_COMMENT_ADDED:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            };
        default:
            return state;
    }
}