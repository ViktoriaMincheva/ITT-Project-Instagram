import React from 'react'
import styles from "./LoggedUserProfile.module.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PostPreview from './../../components/PostPreview';

export default function UserPosts() {
    const allPosts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);
    const user = useSelector(state => state.userData);
    const [userPosts, setUserPosts] = useState("");

    useEffect(() => {
        const posts = allPosts.filter((el) => {
            return el.username === user.username
        })
        setTimeout(() => {
            setUserPosts(posts);
        }, 500)
    }, [])

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
                key={post.postID}
                postID={post.postID}
                src={post.content}
                username={post.username}
                icon={user.profilePhoto}
                caption={post.desc}
                alt="post photo"
                likeCount={post.likes.length}
                commentCount={postComments.length} />)
        })
    }
</div>
  )
}
