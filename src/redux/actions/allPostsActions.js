export const LOAD_POSTS = "LOAD_POSTS";
export const NEW_POST_ADDED = "NEW_POST_ADDED";
export const POST_DELETED = "POST_DELETED";

export const loadPosts = () => {

    return function(dispatch) {
        fetch("../postss.json")
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: LOAD_POSTS, payload: data.posts})
        })
    }
};

export const newPostAddedAction = post => {
    return{
        type: NEW_POST_ADDED,
        payload: post
    }
};

export const postDeletedAction = postID => {
    return {
        type: POST_DELETED,
        payload: postID
    }
};


