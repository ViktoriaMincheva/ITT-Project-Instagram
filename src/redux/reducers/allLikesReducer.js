import { LOAD_LIKES, NEW_LIKE_ADDED, LIKE_REMOVED} from "../actions/allLikesActions"

const INITIAL_STATE = {
    likes: []
};

export const allLikesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_LIKES:
            return {
                ...state,
                likes: action.payload
            };
        case NEW_LIKE_ADDED:
            return {
                ...state,
                likes: [...state.likes, action.payload]
            };
            case LIKE_REMOVED:
                return{
                    ...state, 
                    likes: state.likes.filter(like => like.id !== action.payload)
                };
        default:
            return state;
    }
};