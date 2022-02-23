import styles from "./styles/postPreview.module.css"
import { useRef, useState } from "react"
import UserPostModal from "./UserPostModal"

export default function PostPreview(props) {

    const [isHovering, setIsHovering] = useState(false);
    const [show, setShow] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const handleOpenPostModal = () => {
        setShow(true);
    }

    const HoverContent = () => {
        return (
            <div className={styles.overContainer} onClick={handleOpenPostModal}>
                <a><img className={styles.icon} src="../images/icons/white-heart.png" alt="heart icon" /><span>{props.likeCount} &nbsp;</span></a>
                <a><img className={styles.icon} src="../images/icons/comment-white.png" alt="comment icon" /><span>&nbsp; {props.commentCount}</span></a>
            </div>
        )
    }


    return (
            <div className={styles.previewPost} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
                <img  src={props.src} className={styles.previewImage}  alt="photo" />
                {isHovering && <HoverContent/>}
                <UserPostModal 
                postImage={props.src} 
                postID={props.postID} 
                postOwner={props.username} 
                ownerImg={props.icon} 
                postDesc={props.caption}
                onClose={() => setShow(false)} show={show}/>
            </div>
        
    )

}