import React from 'react'
import styles from "./LoggedUserProfile.module.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PostPreview from './../../components/PostPreview';

export default function UserPosts() {
    const likes = useSelector(state => state.likesData.likes);
    const allPosts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);
    const user = useSelector(state => state.userData);
    const [userPosts, setUserPosts] = useState("");

    useEffect(() => {

        const posts = allPosts.filter((el) => {
            return el.usernameID === user.id
        })

        setTimeout(() => {
            setUserPosts(posts);
        }, 500)
        
    }, [allPosts])

  return (
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
                ownerID={post.usernameID}
                key={post.postID}
                postID={post.postID}
                src={post.content}
                username={post.username}
                icon={user.profilePhoto}
                caption={post.desc}
                alt="post photo"
                commentCount={postComments.length} />)
        })
    }
</div>
  )
}
