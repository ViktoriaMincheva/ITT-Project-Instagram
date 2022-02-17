import { useEffect, useState } from "react";
import DashboardPost from "../components/DashboardPostCard";
import HomeAsideSection from "../components/HomeAsideSection";
import StoriesSection from "../components/StoriesSection";
import styles from "../styles/homepage.module.css"

export default function Home() {

    const [data, setData] = useState(null);


    useEffect((function () {
        fetch("postss.json")
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    setData(data);
                }, 500);
            })
    }), [])

    return (
        <main className={styles.main}>

            <section className={styles.leftSection}>
                <StoriesSection />

                {!data ? <div>Loading...</div> : <>
                    {data.posts.map(post => (
                        <DashboardPost
                            key={post.id}
                            postUrl={post.url}
                            username={post.username}
                            icon={post.icon}
                            likes={post.likes}
                            caption={post.caption}
                            timestamp={post.timestamp} />
                    ))}
                </>
                }
            </section>

            <HomeAsideSection />
        </main>
    )
}