import { LOAD_POSTS, NEW_POST_ADDED, POST_DELETED } from "../actions/allPostsActions";

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
            case POST_DELETED: 
            return{
                ...state,
                posts: state.posts.filter(post => post.postID !== action.payload)
            };
        default:
            return state;
    }
}