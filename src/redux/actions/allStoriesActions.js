export const LOAD_STORIES = "LOAD_STORIES";
export const NEW_STORY_ADDED = "NEW_STORY_ADDED";

export const loadStorieasAction = () => {
    return function(dispatch) {
        fetch("../stories.json")
        .then(resp=> resp.json())
        .then(data => {
            dispatch({type: LOAD_STORIES, payload: data.stories})
        })
    }
};

export const newStoryAdded = story => {
    return{
        type: NEW_STORY_ADDED,
        payload: story
    }
}