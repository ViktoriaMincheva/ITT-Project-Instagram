import React from 'react';
import styles from "./LoggedUserProfile.module.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PostPreview from './../../components/PostPreview';

export default function UserSaved() {
    const likes = useSelector(state => state.likesData.likes);
    const savedPostsIDs = useSelector(state => state.userData.savedPosts);
    const allPosts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);
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
    }, [])

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
                likes={likes.filter(like => like.postID === post.postID).length}
                key={post.postID}
                postID={post.postID}
                ownerID={post.usernameID}
                src={post.content}
                username={post.username}
                icon={post.profilePhoto}
                caption={post.desc}
                alt="post photo"
                commentCount={postComments.length} />)
        })
    }
</div>
  )
}
