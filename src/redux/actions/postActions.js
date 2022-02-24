export const RECIEVE_LIKE = "RECIEVE_LIKE";
export const RECIEVE_UNLIKE = "RECIEVE_UNLIKE";
export const RECIEVE_COMMENT = "RECIEVE_COMMENT";


export const recieveLikeAction = userID => {
    return{
        type: RECIEVE_LIKE,
        payload: userID
    }
};

export const recieveUnLikeAction = userID => {
    return{
        type: RECIEVE_UNLIKE,
        payload: userID
    }
};

export const recieveComment = commentID => {
    return{
        type: RECIEVE_COMMENT,
        payload: commentID
    }
};



