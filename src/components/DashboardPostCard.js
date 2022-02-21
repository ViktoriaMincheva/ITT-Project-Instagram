import "../styles/dashboard-post.css"
import AddComment from "./AddComment"

export default function DashboardPost(props) {
    
    return (
        <div className="dash-post" id={props.postID}>
            <div className="user-info">
                <img className="user-icon" src={props.icon} alt="icon"/>
                <h4>{props.username}</h4>
                
            </div>

            <img className="post-image" src={props.postUrl} alt="post"/>

            <section className="action-icons">
                <div>
                    <img className="icons" src="images/icons/heart.png" alt="heart"/>
                    <img className="icons" src="images/icons/comment.png" alt="comment" />
                    <img className="icons" src="images/icons/inbox.png" alt="send"/>
                </div>

                <img className="icons" src="images/icons/non-saved.png" alt="save"/>
            </section>

            <div className="likes">{props.likes} likes</div>

            <section className="caption">
                <span className="capt-username">{props.username} &nbsp;</span>
                <span className="capt-span">{props.caption}</span>
            </section>

            <div className="commentsContainer">
                {
                    props.comments.map(comment => (
                            <div className="commentContent" key={comment.commentID}>
                                <img src={comment.userIcon} alt="icon"/>
                                <p>{comment.userCommented}</p>
                                <small>{comment.content}</small>
                            </div>
                        )
                    )
                }
            </div>

            <p className="post-timestamp">{props.timestamp}</p>

            <AddComment />
        </div>
    )
}