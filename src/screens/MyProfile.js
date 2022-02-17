import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InfoModal from "../components/InfoModal.js";
import styles from "../styles/Profile.module.css";
import React from "react";

export default function MyProfile() {

    const [data, setData] = useState(null);
    const [show, setShow] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

    const handleShowFollowers = (e) => {
        setShow(true);
    }

    const handleShowFollowing = (e) => {
        setShowFollowing(true);
    }

    useEffect(function () {
        fetch("user-profile.json")
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    setData(data);
                }, 500)
            })
    }, [])

    return (

        <div className={styles.ProfileContainer}>
            {!data ? <div>Loading...</div> : <>
                <div className={styles.ProfileInfo}>
                    <div className={styles.ProfileImageContainer}>
                        <img src={data.profilePicture} alt="profile picture" className={styles.ProfileImage} />
                    </div>
                    <div className={styles.MainInfoContainer}>
                        <div className={styles.ProfileNecessities}>
                            <p>{data.username}</p>
                            <button type="button" className={styles.EditButton}>Edit Profile</button>
                            <img src="images/icons/settings.png" alt="settings icon" />
                        </div>
                        <div className={styles.ProfileActivity}>
                            <p><span>{data.posts.length}</span> posts</p>
                            <p onClick={(e) => handleShowFollowers(e)}><span>{data.followedBy.numberOfFollowers}</span> followers</p>
                            <p onClick={(e) => handleShowFollowers(e)}><span>{data.following.numberOfFollowing}</span> following</p>
                        </div>
                        <InfoModal title="Followers" onClose={() => setShow(false)} show={show}>
                            {
                                data.followedBy.followers.map((follower) => 
                                    (
                                        <div key={follower.id}>
                                            <img src={follower.profilePic} alt="picture" style={{ cursor: 'pointer'}}/>
                                            <p>{follower.username}</p>
                                        </div>
                                    )
                                )
                            }
                        </InfoModal>
                        <InfoModal title="Following" onClose={() => setShowFollowing(false)} showFollowing={showFollowing}>
                            {
                                data.following.peopleUserFollows.map((follow) => 
                                    (
                                        <div key={follow.id}>
                                            <img src={follow.profilePic} alt="picture" style={{ cursor: 'pointer'}}/>
                                            <p>{follow.username}</p>
                                        </div>
                                    )
                                )
                            }
                        </InfoModal>
                        <p>{data.fullName}</p>
                        <div>
                            {data.profileDesc}
                        </div>
                    </div>
                </div>

                <div className={styles.PostsNavigation}>
                    <div className={styles.NavigationTab}>
                        <img src="images/icons/posts-grid.png" alt="grid icon" />
                        <p>POSTS</p>
                    </div>
                    <div className={`${styles.NavigationTab} ${styles.noBorder}`}>
                        <img src="images/icons/videos.png" alt="grid icon" />
                        <p>VIDEOS</p>
                    </div>
                    <div className={`${styles.NavigationTab} ${styles.noBorder}`}>
                        <img src="images/icons/saved-grid.png" alt="grid icon" />
                        <p>SAVED</p>
                    </div>
                    <div className={`${styles.NavigationTab} ${styles.noBorder}`}>
                        <img src="images/icons/tagged.png" alt="grid icon" />
                        <p>TAGGED</p>
                    </div>
                </div>

                <div className={styles.MediaContainer}>
                    {
                        data.posts.map((post) => (
                            <div className={styles.PreviewPost} key={Math.random()}>
                                <img src={post.content[0]} alt="post img" className={styles.PreviewImage} />
                            </div>
                        ))
                    }
                </div>
            </>}
        </div>
    )
}