import { useNavigate } from "react-router-dom"
import "./DashboardPostCard.css"
import AddComment from "../../components/AddComment"
import { useDispatch, useSelector } from "react-redux";
import { savePostAction } from "../../redux/actions/userActions";

export default function DashboardPost(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loggedUser = useSelector(state => state.userData);
    console.log(loggedUser);

    const handleShowUserProfile = () => {
        navigate(`/users/${props.username}`, { replace: true });
    }

    let postComment = [];
    props.postComments.map(comment => {
        users.map(user => {
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

    const handleSavePost = postID => {
        dispatch(savePostAction(postID))
    }

    return (
        <div className="dash-post" id={props.postID}>
            <div className="user-info">
                <img className="user-icon" src={props.icon} alt="icon" onClick={handleShowUserProfile} />
                <h4 onClick={handleShowUserProfile}>{props.username}</h4>
            </div>

            <img className="post-image" src={props.postUrl} alt="post" />

            <section className="action-icons">
                <div>
                    <img className="icons" src="images/icons/heart.png" alt="heart" />
                    <img className="icons" src="images/icons/comment.png" alt="comment" />
                    <img className="icons" src="images/icons/inbox.png" alt="send" onClick={e => handleSavePost(props.postID)}/>
                </div>

                <img className="icons" src="images/icons/non-saved.png" alt="save" />
            </section>

            <div className="likes">{props.likes} likes</div>

            <section className="caption">
                <span className="capt-username">{props.username} &nbsp;</span>
                <span className="capt-span">{props.caption}</span>
            </section>

            <div className="commentsContainer">
                {postComment.map(e => (
                    e
                ))}
            </div>

            

            <AddComment postID={props.postID} />
        </div>
    )
}