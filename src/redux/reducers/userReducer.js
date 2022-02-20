import { LOGIN, LOGOUT, CHANGE_NAME, CHANGE_PROFILE_PHOTO, FOLLOW_USER, UNFOLLOW_USER, CHANGE_BIO, CHANGE_WEBSITE } from "../actions/userActions";


const INITIAL_STATE = {

    id: null,
    logged: false,
    profilePhoto: null,
    name: null,
    userName: null,
    savedPosts: [],
    likedPosts: [],
    followedBy: [],
    following: [],
    bio: null,
    website: null

}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                logged: true,
                id: action.payload.id,
                name: action.payload.name,
                profilePhoto: action.payload.profilePhoto,
                userName: action.payload.userName,
                following: action.payload.following,
                followedBy: action.payload.followedBy,
                savedPosts: action.payload.savedPosts,
                notifications: action.payload.notifications
            };
        case LOGOUT:
            return {
                ...state,
                logged: false,
                id: null,
                name: null,
                profilePhoto: null,
                userName: null,
                following: [],
                followedBy: [],
                savedPosts: [],
                notifications: []
            };

        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            };

        case CHANGE_PROFILE_PHOTO:
            return {
                ...state,
                profilePhoto: action.payload
            };
        case CHANGE_BIO:
            return {
                ...state,
                bio: action.payload
            };
        case CHANGE_WEBSITE:
            return {
                ...state,
                website: action.payload
            };
        case FOLLOW_USER:
            const usersFollowing = state.following.some(u => u.id === action.payload.id)
                ?
                state.following
                :
                [...state.following, action.payload]
            return {
                ...state,
                following: usersFollowing
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                following: state.following.filter(u => {
                    return u.id !== action.payload
                })
            };
        default:
            return state;
    }
}