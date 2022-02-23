import { useSelector } from "react-redux";
import styles from "./ExplorePage.module.css";
import PostPreview from '../../components/PostPreview';

export default function ExplorePage(){
    const posts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);
    
    return (
        <div className={styles.ExploreContainer}>
            <div className={styles.MediaContainer}>
                    {
                        posts.map((post) => {
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
            </div>
        </div>
    )
}