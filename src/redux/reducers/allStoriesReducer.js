import { LOAD_STORIES, NEW_STORY_ADDED } from "../actions/allStoriesActions";

const INITIAL_STATE = {
    stories: [],
};

export const allStoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_STORIES:
            return {
                ...state,
                stories: action.payload
            };
        case NEW_STORY_ADDED:
            return {
                ...state,
                stories: [action.payload, ...state.stories]
            };
        default:
            return state;
    }
}