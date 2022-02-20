export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CHANGE_PROFILE_PHOTO = "CHANGE_PROFILE_PHOTO";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_USERNAME = "CHANGE_USERNAME";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const LIKE_POST = "LIKE_POST";
export const SAVE_POST = "SAVE_POST";
export const CHANGE_BIO = "CHANGE_BIO";
export const CHANGE_WEBSITE = "CHANGE_WEBSITE";



export const loginAction = user => {
    return{
        type: LOGIN,
        payload: {
            id: user.uid,
            profilePhoto: user.profilePhoto,
            name: user.displayName,
            userName: user.userName,
            following: user.followedAccounts,
            followedBy: user.followedBy,
            savedPOsts: user.savedPosts,
            notifications: user.notifications
        }
    }
};

export const logoutAction = {
    type: LOGOUT
};

export const changeNameAction = name => {
    return{
        type: CHANGE_NAME,
        payload: name
    }
};

export const changeUserNameAction = userName => {
    return{
        type: CHANGE_USERNAME,
        payload: userName

    }
};

export const changeProfilePhotoAction = photo => {
    return{
        type: CHANGE_PROFILE_PHOTO,
        payload: photo
    }
};

export const followUserAction = userID => {
    return{
        type: FOLLOW_USER,
        payload: userID
    }
};

export const unfollowUserAction = userID => {
    return{
        type: UNFOLLOW_USER,
        payload: userID
    }
};

export const savePostAction = postID => {
    return{
        type: SAVE_POST,
        payload: postID
    }
}

export const likePostAction = postID => {
    return{
        type: LIKE_POST,
        payload: postID
    }
};

export const changeBioAction = bio => {
    return{
        type: CHANGE_BIO,
        bio: bio
    }
};

export const changeWebsiteAction = url => {
    return{
        type: CHANGE_BIO,
        website: url
    }
};



