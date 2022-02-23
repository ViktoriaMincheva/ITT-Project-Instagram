import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import styles from "./LoggedUserProfile.module.css";
import InfoModal from "../../components/InfoModal.js";
import PostPreview from "../../components/PostPreview.js";
import LoadingComponent from './../../components/LoadingComponent';

export default function UserProfile() {

    const allUsers = useSelector(state => state.users.users);
    const allPosts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);

    const [show, setShow] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

    const [userPosts, setUserPosts] = useState("");
    const [userData, setUserData] = useState("");
    const [following, setFollowing] = useState([]);
    const [followedBy, setFollowedBy] = useState([]);
    // const user = useSelector(state => state.userData);
    const params = useParams();

    const handleShowFollowers = (e) => {
        setShow(true);
    }

    const handleShowFollowing = (e) => {
        setShowFollowing(true);
    }

    useEffect( () => {
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
                if(user.id === follower){
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
        <>
            {   !(userPosts && userData) ? 
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
                                            <div key={Math.random()}>
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
                                            <div key={Math.random()}>
                                                <img src={follow.profilePhoto} alt="picture" className={styles.followIcon}/>
                                                <p>{follow.username}</p>
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
                           userPosts && 
                           userPosts.map((post) => {
                               let postComments = [];
                               {
                               comments.map((comment) => {
                                   if (post.postID === comment.postID){
                                       postComments.unshift(comment);
                                   }
                               })}
                               return (<PostPreview 
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