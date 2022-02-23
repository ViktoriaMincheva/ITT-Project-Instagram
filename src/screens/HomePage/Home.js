import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css"
import DashboardPost from "./DashboardPostCard";
import HomeAsideSection from "./HomeAsideSection";
import StoriesSection from "./StoriesSection";
import { loadUsers } from "../../redux/actions/allUsersActions";
import { loadComments } from "../../redux/actions/commentsActions";
import { loadPosts } from "../../redux/actions/allPostsActions";
import { useEffect } from "react";



export default function Home() {

    const posts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    console.log(users);
    
    console.log(comments);

    useEffect(() => {dispatch(loadUsers())}, []);


    return (
        <main className={styles.main}>

            <section className={styles.leftSection}>
                <StoriesSection />
                
                {
                    posts.map(post => (
                        <DashboardPost
                        key={post.postID}
                        postID={post.postID}
                        postUrl={post.content}
                        username={post.username}
                        icon={post.profilePhoto}
                        likes={post.likes.length}
                        caption={post.desc}
                        timestamp={post.timestamp}
                        postComments={comments.filter(com => com.postID === post.postID)}
                        />
                    ))
                }

            </section>

            <HomeAsideSection />
        </main>
    )
}