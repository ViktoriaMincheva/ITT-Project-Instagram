import { LOAD_POSTS, NEW_POST_ADDED } from "../actions/allPostsActions";

const INITIAL_STATE = {
    posts: [],
};

export const allPostsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case NEW_POST_ADDED:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        default:
            return state;
    }
}