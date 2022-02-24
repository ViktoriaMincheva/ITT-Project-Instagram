import { useSelector } from "react-redux";
import styles from "./ExplorePage.module.css";
import PostPreview from '../../components/PostPreview';
import { useState } from 'react';
import { useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingComponent from './../../components/LoadingComponent';

export default function ExplorePage(){
    const posts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);
    const [itemsToShow, setItemsToShow] = useState([]);
    const [hasMorePosts, setHasMorePosts] = useState(true);
    const perPage = 9;
    
    useEffect(() => {
        if(posts && itemsToShow.length < 1) {
            setItemsToShow(posts.slice(0, perPage))
        }
    }, [posts])

    const loadMoreData = () => {
        let nextPostsPos = itemsToShow.length + perPage;
        nextPostsPos = (nextPostsPos > posts.length) ? posts.length : nextPostsPos;

        let nextPosts = posts.slice(itemsToShow.length, nextPostsPos);

        setTimeout(() => {
            let allItemsToShow = [...itemsToShow, ...nextPosts];
            setItemsToShow(allItemsToShow);
            if(nextPostsPos >= posts.length - 1){
                setHasMorePosts(false);
            }
        }, 1500)
    }


    return (
        <div className={styles.ExploreContainer}>
            <div className={styles.MediaContainer}>
                
                <InfiniteScroll
                dataLength={itemsToShow.length}
                next={loadMoreData}
                hasMore={hasMorePosts}
                className={styles.InfiniteScrollContainer}
                loader={<div className={styles.loadingComp}><LoadingComponent/></div>}
                >
                    {
                        itemsToShow.map((post) => {
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
                                icon={post.profilePhoto}
                                caption={post.desc} 
                                alt="post photo" 
                                likeCount={post.likes.length} 
                                commentCount={postComments.length} />)
                        })
                    }
                </InfiniteScroll>
            </div>
        </div>
    )
}