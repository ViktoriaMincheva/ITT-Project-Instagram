import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardPost from "../components/DashboardPostCard";
import HomeAsideSection from "../components/HomeAsideSection";
import StoriesSection from "../components/StoriesSection";
import styles from "../styles/homepage.module.css"


export default function Home() {

    const posts = useSelector(state => state.allPostsData.posts);
    console.log(posts);

    return (
        <main className={styles.main}>

            <section className={styles.leftSection}>
                <StoriesSection />

                {
                    posts.map(post => (
                        <DashboardPost
                        key={post.id}
                        postUrl={post.content}
                        username={post.username}
                        icon={post.profilePhoto}
                        likes={post.likes.length}
                        caption={post.desc}
                        timestamp={post.timestamp}
                        comments={post.comments}/>
                    ))
                }

            </section>

            <HomeAsideSection />
        </main>
    )
}