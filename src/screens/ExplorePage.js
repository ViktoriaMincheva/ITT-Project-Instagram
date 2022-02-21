import { useEffect } from "react";
import { useState } from "react";
import { loginAction } from './../redux/actions/userActions';
import PostPreview from './../components/PostPreview';
import styles from "../styles/ExplorePage.module.css";
import { useSelector } from "react-redux";

export default function ExplorePage(){
    const [datas, setData] = useState(null); 
    const posts = useSelector(state => state.allPostsData.posts);
//    const imgUrl = "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/274256337_489468589241616_5021482252943779708_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=VpAyzDpt55gAX_QIBtj&tn=oHf19MSlwmdHo2bb&edm=ADRwgMgBAAAA&ccb=7-4&oh=00_AT8bf_PlaHjMgbA8QgGYMSkLHSOiKvJQix486t7HhbTmLA&oe=621AF854&_nc_sid=0fd415";

    
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