import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import styles from "./LoggedUserProfile.module.css";
import InfoModal from "../../components/InfoModal.js";
import PostPreview from "../../components/PostPreview.js";

export default function UserProfile() {

    const [show, setShow] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const [userPosts, setPosts] = useState("");
    const [userData, setUserData] = useState("");
    const user = useSelector(state => state.userData);
    const params = useParams();

    const handleShowFollowers = (e) => {
        setShow(true);
    }

    const handleShowFollowing = (e) => {
        setShowFollowing(true);
    }

    useEffect( () => {
        fetch("../postss.json")
        .then(resp => resp.json())
        .then(data => {
            setTimeout(() => {
                data = data.posts.filter((el) => {
                    return el.username === params.pid;
                })
                setPosts(data);
            }, 500);
        })
        .catch(err => {console.log(err.message)});

        fetch("../users-data.json")
        .then(resp => resp.json())
        .then(data => {
            setTimeout(() => {
                data = data.users.filter((el) => {
                    return el.username === params.pid;
                })
                setUserData(data[0])
            }, 500)
        })
        .catch(err => {console.log(err.message)});

    }, [])

    return (
        <>
            {   !(userPosts && userData) ? 
                <>Loading</> 
                : 
                <div className={styles.ProfileContainer}>
                    <div className={styles.ProfileInfo}>
                        <div className={styles.ProfileImageContainer}>
                            <img src={userData.profilePhoto} alt="profile picture" className={styles.ProfileImage} />
                        </div>
                        <div className={styles.MainInfoContainer}>
                            <div className={styles.ProfileNecessities}>
                                <p>{userData.username}</p>
                            </div>
                            <div className={styles.ProfileActivity}>
                                <p><span>{userPosts.length}</span> posts</p>
                                <p onClick={(e) => handleShowFollowers(e)}><span>{userData.followedBy.length}</span> followers</p>
                                <p onClick={(e) => handleShowFollowers(e)}><span>{userData.following.length}</span> following</p>
                            </div>
                            <InfoModal title="Followers" onClose={() => setShow(false)} show={show}>
                                {
                                    userData.followedBy.map((follower) => 
                                        (
                                            <div key={Math.random()}>
                                                {/* <img src={follower.profilePic} alt="picture" style={{ cursor: 'pointer'}}/> */}
                                                <p>{follower}</p>
                                            </div>
                                        )
                                    )
                                }
                            </InfoModal>
                            <InfoModal title="Following" onClose={() => setShowFollowing(false)} showFollowing={showFollowing}>
                                {
                                    user.following.map((follow) => 
                                        (
                                            <div key={Math.random()}>
                                                {/* <img src={follow.profilePic} alt="picture" style={{ cursor: 'pointer'}}/> */}
                                                <p>{follow}</p>
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
                        <div className={`${styles.NavigationTab} ${styles.noBorder}`}>
                            <img src="../images/icons/videos.png" alt="grid icon" />
                            <p>VIDEOS</p>
                        </div>
                    </div> 

                    <div className={styles.MediaContainer}>
                        {
                            userPosts.map((post) => (
                                <PostPreview key={post.postID} src={post.content} alt="post photo" likeCount={post.likes.length} commentCount={post.comments.length} />
                            ))
                        }
                    </div>
                    
                </div>
            }
        </>
        
    )
}