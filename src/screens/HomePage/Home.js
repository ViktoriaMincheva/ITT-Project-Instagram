import { useSelector } from "react-redux";
import styles from "./Home.module.css"
import DashboardPost from "./DashboardPostCard";
import HomeAsideSection from "./HomeAsideSection";
import StoriesSection from "./StoriesSection";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from 'react';
import LoadingComponent from './../../components/LoadingComponent';

export default function Home() {
    
    const loggedUser = useSelector(state => state.userData);
    const posts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);
    const likes = useSelector(state => state.likesData.likes);
    const following = loggedUser.following;
    const [itemsToShow, setItemsToShow] = useState([]);
    const [items, setItems] = useState([]);
    const [hasMorePosts, setHasMorePosts] = useState(true);
    const perPage = 6;

    useEffect(() => {
        let pos = [];
        following.map(id => {
            return posts.map( post => {
                if(id === post.usernameID) {
                    pos.push(post);
                }
            })
        })
        setItems(pos);
    }, [posts])

    
    useEffect(() => {
        if(items && itemsToShow.length < 1) {
            setItemsToShow(items.slice(0, perPage))
        }
    }, [items])

    const loadMoreData = () => {
        let nextPostsPos = itemsToShow.length + perPage;
        nextPostsPos = (nextPostsPos > items.length) ? items.length : nextPostsPos;

        let nextPosts = items.slice(itemsToShow.length, nextPostsPos);

        setTimeout(() => {
            let allItemsToShow = [...itemsToShow, ...nextPosts];
            setItemsToShow(allItemsToShow);
            if(nextPostsPos >= items.length - 1){
                setHasMorePosts(false);
            }
        }, 1500)
    };
    
    return (
        <main className={styles.main}>

            <section className={styles.leftSection}>
                <StoriesSection />

                {itemsToShow.length > 0 ? (
                    <InfiniteScroll
                    dataLength={itemsToShow.length}
                    next={loadMoreData}
                    hasMore={hasMorePosts}
                    loader={<div className={styles.loadingComp}><LoadingComponent/></div>}
                    endMessage={
                        <p className={styles.endMessage}>You've seen all posts here!</p>
                    }
                    >
                        {
                        
                            itemsToShow.map((post) =>  
                            (<DashboardPost
                                ownerID={post.usernameID}
                                key={post.postID}
                                postID={post.postID}
                                postUrl={post.content}
                                username={post.username}
                                icon={post.profilePhoto}
                                likes={likes.filter(like => like.postID === post.postID).length}
                                caption={post.desc}
                                timestamp={post.timestamp}
                                isVideo={post.isVideo}
                                postComments={comments.filter(com => com.postID === post.postID)}
                            />)
                            
                            ) 
                        
                        }
                    </InfiniteScroll>
                )
                :
                (
                    <div className={styles.endMessage}>Please follow someone so you can see their posts on the dashboard.</div>
                )
                }

            </section>
            
            <HomeAsideSection />
        </main>
    )
}