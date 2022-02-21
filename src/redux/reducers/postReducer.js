import { RECIEVE_LIKE, RECIEVE_COMMENT, REVIEVE_UNLIKE } from "../actions/postActions"

const INITIAL_STATE = {

    id: null,
    content: null,
    likes: [],
    comments: [],
    desc: null,
    postedDate: null,
}

export const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECIEVE_LIKE:
            const usersLiked = state.likes.some(u => u.id !== action.payload.id)
                ?
                state.likes :
                [...state.likes, action.payload]
            return {
                ...state,
                likes: usersLiked
            };
        case REVIEVE_UNLIKE:
            return {
                ...state,
                likes: state.likes.filter(u => {
                    return u.id !== action.payload
                })
            };
        default:
            return state;
    }
}
