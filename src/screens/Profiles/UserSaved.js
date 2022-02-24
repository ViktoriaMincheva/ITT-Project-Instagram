import React from 'react'
import styles from "./LoggedUserProfile.module.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PostPreview from './../../components/PostPreview';

export default function UserSaved() {
    const savedPostsIDs = useSelector(state => state.userData.savedPosts);
    const allPosts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);
    const user = useSelector(state => state.userData);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        let pos = [];
        savedPostsIDs.map((savedPost) => {
            return allPosts.map((post) => {
                if(savedPost === post.postID) {
                   return pos.push(post)
                }
            })
        })

        setTimeout(() => {
            setSavedPosts(pos);
        }, 500)
    })

  return (
    <div className={styles.MediaContainer}>
    {
        savedPosts &&
        savedPosts.map((post) => {
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
