import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import "./DashboardPostCard.css"
import AddComment from "../../components/AddComment"
import UserPostModal from "../../components/UserPostModal"
import { likePostAction, savePostAction, unlikePostAction, unSavePostAction } from '../../redux/actions/userActions';

export default function DashboardPost(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const isVideo = props.isVideo === "true";
    // const [isVideo, setIsVideo] = useState(false);
    // setIsVideo(props.isVideo);

    const users = useSelector(state => state.users.users);
    const likedPosts = useSelector(state => state.userData.likedPosts);
    const savedPosts = useSelector(state => state.userData.savedPosts);
    // const [likes, setLikes] = useState(props.likes);
    const [verified, setVerified] = useState(false);

    const handleShowUserProfile = () => {
        navigate(`/users/${props.username}`, { replace: true });
    }

    const handleOpenPostModal = () => {
        setShow(true);
    }

    
    let postComment = [];
    props.postComments.map(comment => {
        return users.map(user => {
            if (user.id === comment.ownerID) {
                postComment.push(
                    <div className="commentContent" key={comment.commentID}>
                        <img src={user.profilePhoto} alt="icon" />
                        <p>{user.username}</p>
                        <small>{comment.content}</small>
                        <p className="post-timestamp">{comment.timestamp}</p>
                    </div>
                )
            }
        })
    });


    const handleLikePost = postID => {
        console.log(postID)
        if (likedPosts.some(id => id === postID)) {
            dispatch(unlikePostAction(postID))
        } else {
            dispatch(likePostAction(postID))
        }
    };

    const handleSavePost = postID => {
        if(savedPosts.some(id => id === postID)) {
            dispatch(unSavePostAction(postID))
        } else {
            dispatch(savePostAction(postID))
        }
    };


    return (
        <div className="dash-post" id={props.postID}>
            <div className="user-info">
                <img className="user-icon" src={props.icon} alt="icon" onClick={handleShowUserProfile} />
                <h4 className="post-username" onClick={handleShowUserProfile}>{props.username}</h4>
                {
                    users.map((user) => {
                        if (user.username === props.username && user.businessAcc.isVerified) {
                            return (<img src="../images/icons/verified.png" alt="verified" className="user-verified" key={Math.random()}/>)
                        }
                    })
                }
            </div>

            <img className="post-image" src={props.postUrl} alt="post" onClick={handleOpenPostModal}/>
            

            <section className="action-icons">
                <div>
                    <img className="icons" src={likedPosts.some(id => id === props.postID) ? "../images/icons/heart-liked.png" : "../images/icons/heart.png"} onClick={() => handleLikePost(props.postID)} alt="heart" />
                    <img className="icons" src="../images/icons/comment.png" alt="comment" />
                    <img className="icons" src="../images/icons/inbox.png" alt="send"/>
                </div>

                <img className="icons" src={savedPosts.some(id => id === props.postID) ? "../images/icons/saved.png" : "../images/icons/non-saved.png"} alt="save" onClick={() => handleSavePost(props.postID)} alt="save" />
            </section>

            <div className="likes">{props.likes} likes</div>

            <section className="caption">
                <span className="capt-username">{props.username} &nbsp;</span>
                <span className="capt-span">{props.caption}</span>
            </section>

            <div className="commentsContainer">
                {postComment.map(e => e)}
            </div>
            <AddComment postID={props.postID} />

            <UserPostModal 
                postImage={props.postUrl} 
                postID={props.postID} 
                postOwner={props.username} 
                ownerImg={props.icon} 
                postDesc={props.caption}
                onClose={() => setShow(false)} show={show}/>
        </div>
    )
}