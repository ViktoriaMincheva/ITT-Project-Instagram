import { useSelector } from "react-redux";
import styles from "./ExplorePage.module.css";
import PostPreview from '../../components/PostPreview';

export default function ExplorePage(){
    const posts = useSelector(state => state.allPostsData.posts);
    
    return (
        <>
            <div className={styles.ExploreContainer}>
                <div className={styles.MediaContainer}>
                        {
                            posts.map((post) => (
                                <PostPreview key={Math.random()} src={post.content} alt="post photo" likeCount={post.likes.length} commentCount={post.comments.length} />
                            ))
                        }
                </div>
            
            </div>
        </>
    )
}