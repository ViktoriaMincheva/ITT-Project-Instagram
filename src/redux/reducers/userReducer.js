import { LOGIN, LOGOUT, CHANGE_NAME, CHANGE_PROFILE_PHOTO, FOLLOW_USER, UNFOLLOW_USER, SAVE_POST, ADD_STORY, UNSAVE_POST, ADD_POST, CHANGE_BIO, CHANGE_EMAIL, CHANGE_USERNAME } from "../actions/userActions";


const INITIAL_STATE = {

    id: null,
    email: null,
    logged: false,
    profilePhoto: null,
    fullName: null,
    username: null,
    bio: null,
    savedPosts: [],
    followedBy: [],
    following: [],
    posts: [],
    stories: []
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                logged: true,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.fullName,
                profilePhoto: action.payload.profilePhoto,
                username: action.payload.username,
                following: action.payload.following,
                followedBy: action.payload.followedBy,
                posts: action.payload.posts,
                stories: action.payload.stories,
                savedPosts: action.payload.savedPosts,
                bio: action.payload.bio
            };
        case LOGOUT:
            return {
                ...state,
                logged: false,
                id: null,
                email: null,
                name: null,
                profilePhoto: null,
                username: null,
                bio: null,
                following: [],
                followedBy: [],
                posts: [],
                stories: [],
                savedPosts: [],

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
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case FOLLOW_USER:
            const usersFollowing = state.following.some(uid => uid === action.payload)
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
                following: state.following.filter(uid => {
                    return uid !== action.payload
                })
            };
        case CHANGE_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case ADD_STORY:
            return {
                ...state,
                stories: [...state.stories, action.payload]
            }
        case SAVE_POST:
            const saved = state.savedPosts.some(id => id === action.payload)
                ?
                state.savedPosts
                :
                [...state.savedPosts, action.payload]
            return {
                ...state,
                savedPosts: saved
            };
        case UNSAVE_POST:
            return {
                ...state,
                savedPosts: state.savedPosts.filter(id => {
                    return id !== action.payload
                })
            };
        default:
            return state;
    }
}