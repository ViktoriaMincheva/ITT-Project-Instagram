export const LOAD_LIKES = "LOAD_LIKES";
export const NEW_LIKE_ADDED = "NEW_LIKE_ADDED";
export const LIKE_REMOVED = "LIKE_REMOVED";

export const loadLikes = () => {
    return function(dispatch) {
        fetch("../likes.json")
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: LOAD_LIKES, payload: data.likes})
        })
    }
};

export const newLikeAddedAction = like => {
    return {
        type: NEW_LIKE_ADDED,
        payload: like
    }
};

export const likeRemovedAction = likeID => {
    return {
        type: LIKE_REMOVED,
        payload: likeID
    }
};
