import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./LoggedUserProfile.module.css";
import InfoModal from "../../components/InfoModal.js";
import PostPreview from "../../components/PostPreview.js";
import LoadingComponent from './../../components/LoadingComponent';
import { followUserAction, unfollowUserAction } from "../../redux/actions/userActions";

export default function UserProfile() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const followedAccounts = useSelector(state => state.userData.following);
    const user = useSelector(state => state.userData);
    const allUsers = useSelector(state => state.users.users);
    const allPosts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);

    const likes = useSelector(state => state.likesData.likes);
    const [show, setShow] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const [userPosts, setUserPosts] = useState("");
    const [userData, setUserData] = useState("");
    const [following, setFollowing] = useState([]);
    const [followedBy, setFollowedBy] = useState([]);


    const handleShowFollowers = (e) => {
        setShow(true);
    };

    const handleShowFollowing = (e) => {
        setShowFollowing(true);
    };

    const handleFollowClick = userID => {
        if (followedAccounts.some(id => id === userID)) {
            dispatch(unfollowUserAction(userID))
        } else {
            dispatch(followUserAction(userID))
        }
    };

    const handleVisitClick = username => {
        navigate(`/users/${username}`, { replace: true });
    };

    useEffect(() => {
        const posts = allPosts.filter((el) => {
            return el.username === params.pid
        })
        setUserPosts(posts);

        const currentUser = allUsers.filter((user) => {
            return user.username === params.pid
        })
        setUserData(currentUser[0]);

        let followers = [];
        currentUser[0].followedBy.map((follower) => {
            return allUsers.filter((user) => {
                if (user.id === follower) {
                    followers.push(user);
                }
            })
        })

        setTimeout(() => {
            setFollowedBy(followers);
        }, 500)

        let followingUsers = [];
        currentUser[0].following.map((follower) => {
            return allUsers.filter((user) => {
                if (user.id === follower) {
                    followingUsers.push(user);
                }
            })
        })

        setTimeout(() => {
            setFollowing(followingUsers);
        }, 500)
    }, []);

    const isFollowed = followedAccounts.some(id => id === userData.id);



    return (
        <>
            {!(userPosts && userData) ?
                <div className={styles.LoadingComponent}>
                    <LoadingComponent />
                </div>
                :
                <div className={styles.ProfileContainer}>
                    <div className={styles.ProfileInfo}>
                        <div className={styles.ProfileImageContainer}>
                            <img src={userData.profilePhoto} alt="profile picture" className={styles.ProfileImage} />
                        </div>
                        <div className={styles.MainInfoContainer}>
                            <div className={styles.ProfileNecessities}>
                                <p>{userData.username}</p>
                                <button className={styles.followButton} onClick={() => { handleFollowClick(userData.id) }}>{isFollowed ? "Unfollow" : "Follow"}</button>
                            </div>
                            <div className={styles.ProfileActivity}>
                                <p><span>{userPosts.length}</span> posts</p>
                                <p onClick={(e) => handleShowFollowers(e)}><span>{followedBy.length}</span> followers</p>
                                <p onClick={(e) => handleShowFollowing(e)}><span>{following.length}</span> following</p>
                            </div>
                            <InfoModal title="Followers" onClose={() => setShow(false)} show={show}>
                                {
                                    followedBy.map((follower) =>
                                    (
                                        <div key={uuidv4()} className={styles.userContainer}>
                                            <div className={styles.userInfo}>
                                                <img src={follower.profilePhoto} alt="picture" className={styles.followIcon} />
                                                <p>{follower.username}</p>
                                            </div>

                                            <button
                                                className={styles.followButton}
                                                onClick={() => handleVisitClick(follower.username)}>
                                                Visit
                                            </button>
                                        </div>
                                    )
                                    )
                                }
                            </InfoModal>
                            <InfoModal title="Following" onClose={() => setShowFollowing(false)} show={showFollowing}>
                                {
                                    following.map((follow) =>
                                    (
                                        <div key={uuidv4()} className={styles.userContainer}>
                                            <div className={styles.userInfo}>
                                                <img src={follow.profilePhoto} alt="picture" className={styles.followIcon} />
                                                <p>{follow.username}</p>
                                            </div>

                                            <button
                                                className={styles.followButton}
                                                onClick={() => handleVisitClick(follow.username)}>
                                                Visit
                                            </button>
                                        </div>
                                    )
                                    )
                                }
                            </InfoModal>
                            <p>{userData.fullName}</p>
                            <div>
                                {userData.bio}
                            </div>
                        </div>
                    </div>

                    <div className={styles.PostsNavigation}>
                        <div className={styles.NavigationTab}>
                            <img src="../images/icons/posts-grid.png" alt="grid icon" />
                            <p>POSTS</p>
                        </div>
                    </div>

                    <div className={styles.MediaContainer}>
                        {
                            userPosts &&
                            userPosts.map((post) => {
                                let postComments = [];
                                {
                                    comments.map((comment) => {
                                        if (post.postID === comment.postID) {
                                            postComments.unshift(comment);
                                        }
                                    })
                                }
                                return (<PostPreview
                                    likes={likes.filter(like => like.postID === post.postID).length}
                                    key={post.postID}
                                    postID={post.postID}
                                    src={post.content}
                                    username={post.username}
                                    icon={userData.profilePhoto}
                                    caption={post.desc}
                                    alt="post photo"
                                    likeCount={post.likes.length}
                                    commentCount={postComments.length} />)
                            })
                        }
                    </div>

                </div>
            }
        </>

    )
}