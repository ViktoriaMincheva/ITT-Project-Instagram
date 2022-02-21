export const LOAD_POSTS = "LOAD_POSTS";

export const loadPosts = () => {

    return function(dispatch) {
        fetch("postss.json")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            dispatch({type: LOAD_POSTS, payload: data.posts})
        })
    }
};

