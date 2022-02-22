export const LOAD_STORIES = "LOAD_POSTS";
export const NEW_STORY_ADDED = "NEW_VIDEO_ADDED";

export const loadStories = () => {

    return function(dispatch) {
        fetch("stories.json")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            dispatch({type: LOAD_STORIES, payload: data.stories})
        })
    }
};

export const newPostAddedAction = story => {
    return{
        type: NEW_STORY_ADDED,
        payload: story
    }
}