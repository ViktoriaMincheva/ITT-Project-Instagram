import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styles from "./LoggedUserProfile.module.css";
import InfoModal from "../../components/InfoModal";
import PostPreview from "../../components/PostPreview.js";

export default function MyProfile() {

    const allPosts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);
    const users = useSelector(state => state.users.users);

    const [userPosts, setUserPosts] = useState("");
    const [show, setShow] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const [following, setFollowing] = useState([]);
    const [followedBy, setFollowedBy] = useState([]);
    const user = useSelector(state => state.userData);
    const navigate = useNavigate();

    const handleShowFollowers = (e) => {
        setShow(true);
    }

    const handleShowFollowing = (e) => {
        setShowFollowing(true);
    }

    const handleOpenSettings = (e) => {
        navigate("/edit", { replace: true });
    }

    useEffect( () => {
        const posts = allPosts.filter((el) => {
            return el.username === user.username
        })
        setTimeout(() => {
            setUserPosts(posts);
        }, 500)

        let followers = [];
        user.followedBy.map((follower) => {
            return users.filter((user) => {
                if(user.id === follower){
                    followers.push(user);
                }
            })
        })

        setTimeout(() => {
            setFollowedBy(followers);
        }, 500)

        let followingUsers = [];
        user.following.map((follower) => {
            return users.filter((user) => {
                if(user.id === follower){
                    followingUsers.push(user);
                }
            })
        })

        setTimeout(() => {
            setFollowing(followingUsers);
        }, 500)

    }, [])

    return (

        <div className={styles.ProfileContainer}>
            
                <div className={styles.ProfileInfo}>
                    <div className={styles.ProfileImageContainer}>
                        <img src={user.profilePhoto != null ? user.profilePhoto : "../images/icons/user.png"} alt="profile picture" className={styles.ProfileImage} />
                    </div>
                    <div className={styles.MainInfoContainer}>
                        <div className={styles.ProfileNecessities}>
                            <p>{user.username}</p>
                            <button type="button" className={styles.EditButton} onClick={handleOpenSettings}>Edit Profile</button>
                        </div>
                        <div className={styles.ProfileActivity}>
                            <p><span>{user.posts.length}</span> posts</p>
                            <p onClick={(e) => handleShowFollowers(e)}><span>{followedBy.length}</span> followers</p>
                            <p onClick={(e) => handleShowFollowing(e)}><span>{following.length}</span> following</p>
                        </div>
                        <InfoModal title="Followers" onClose={() => setShow(false)} show={show}>
                            {
                                followedBy.map((follower) => 
                                    (
                                        <div key={follower.id}>
                                            <img src={follower.profilePhoto} alt="picture" className={styles.followIcon}/>
                                            <p>{follower.username}</p>
                                        </div>
                                    )
                                )
                            }
                        </InfoModal>
                        <InfoModal title="Following" onClose={() => setShowFollowing(false)} show={showFollowing}>
                            {
                                following.map((follow) => 
                                    (
                                        <div key={follow.id}>
                                            <img src={follow.profilePhoto} alt="picture" className={styles.followIcon}/>
                                            <p>{follow.username}</p>
                                        </div>
                                    )
                                )
                            }
                        </InfoModal>
                        <p>{user.name}</p>
                        <div>
                            {user.bio}
                        </div>
                    </div>
                </div>

                <div className={styles.PostsNavigation}>
                    <div className={styles.NavigationTab}>
                        <img src="../images/icons/posts-grid.png" alt="grid icon" />
                        <p>POSTS</p>
                    </div>
                    <div className={`${styles.NavigationTab} ${styles.noBorder}`}>
                        <img src="../images/icons/videos.png" alt="grid icon" />
                        <p>VIDEOS</p>
                    </div>
                    <div className={`${styles.NavigationTab} ${styles.noBorder}`}>
                        <img src="../images/icons/saved-grid.png" alt="grid icon" />
                        <p>SAVED</p>
                    </div>
                    <div className={`${styles.NavigationTab} ${styles.noBorder}`}>
                        <img src="../images/icons/tagged.png" alt="grid icon" />
                        <p>TAGGED</p>
                    </div>
                </div>

                <div className={styles.MediaContainer}>
                    {
                        userPosts && 
                        userPosts.map((post) => {
                            let postComments = [];
                            {
                            comments.map((comment) => {
                                if (post.postID === comment.postID){
                                    postComments.unshift(comment);
                                }
                            })}
                            return (<PostPreview key={post.postID} src={post.content} alt="post photo" likeCount={post.likes.length} commentCount={postComments.length} />)
                        })
                    }
                </div>
            
        </div>
    )
}