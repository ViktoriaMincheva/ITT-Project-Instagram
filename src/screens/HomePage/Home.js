import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css"
import DashboardPost from "./DashboardPostCard";
import HomeAsideSection from "./HomeAsideSection";
import StoriesSection from "./StoriesSection";



export default function Home() {

    const posts = useSelector(state => state.allPostsData.posts);
    const comments = useSelector(state => state.comments.comments);

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