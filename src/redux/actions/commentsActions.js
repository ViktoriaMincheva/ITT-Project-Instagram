export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const NEW_COMMENT_ADDED = "NEW_COMMENT_ADDED";

export const loadComments = () => {
    return function(dispatch) {
        fetch("../comments.json")
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: LOAD_COMMENTS, payload: data.comments})
        })
    }
};

export const newCommentAddedAction = comment => {
    return{
        type: NEW_COMMENT_ADDED,
        payload: comment
    }
}