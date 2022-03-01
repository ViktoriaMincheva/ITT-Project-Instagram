export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CHANGE_PROFILE_PHOTO = "CHANGE_PROFILE_PHOTO";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_USERNAME = "CHANGE_USERNAME";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const ADD_POST = "ADD_POST";
export const ADD_STORY = "ADD_STORY";
export const SAVE_POST = "SAVE_POST";
export const UNSAVE_POST = "UNSAVE_POST";
export const CHANGE_BIO = "CHANGE_BIO";


export const loginAction = user => {
    return{
        type: LOGIN,
        payload: {
            email: user.email,
            id: user.id,
            profilePhoto: user.profilePhoto,
            fullName: user.fullName,
            username: user.username,
            following: user.following,
            followedBy: user.followedBy,
            posts: user.posts,
            savedPosts: user.savedPosts,
            likedPosts: user.likedPosts,
            bio: user.bio
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

export const addPostAction = post => {
    return{
        type: ADD_POST,
        payload: post
    }
};

export const addStoryAction = storyID => {
    return{
        type: ADD_STORY,
        payload: storyID
    }
};

export const savePostAction = postID => {
    return{
        type: SAVE_POST,
        payload: postID
    }
};

export const unSavePostAction = postID => {
    return{
        type: UNSAVE_POST,
        payload: postID
    }
};

export const changeBioAction = bio => {
    return{
        type: CHANGE_BIO,
        payload: bio
    }
};

export const changeEmailAction = email => {
    return{
        type: CHANGE_EMAIL,
        payload: email
    }
};