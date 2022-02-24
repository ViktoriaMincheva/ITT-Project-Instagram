import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles/Modal.css";
import AddComment from './AddComment';
import { useDispatch, useSelector } from 'react-redux';
import { likePostAction, savePostAction, unlikePostAction, unSavePostAction } from "../redux/actions/userActions";
export default function Modal (props) {

  const dispatch = useDispatch();

  const users = useSelector(state => state.users.users);
  const comments = useSelector(state => state.comments.comments);
  const posts = useSelector(state => state.allPostsData.posts);
  const likedPosts = useSelector(state => state.userData.likedPosts);
  const savedPosts = useSelector(state => state.userData.savedPosts);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);


  const handleLikePost = postID => {
    console.log(postID)
    if (likedPosts.some(id => id === postID)) {
        dispatch(unlikePostAction(postID))
    } else {
        dispatch(likePostAction(postID));
    }
};

const handleSavePost = postID => {
    if(savedPosts.some(id => id === postID)) {
        dispatch(unSavePostAction(postID))
    } else {
        dispatch(savePostAction(postID))
    }
};

  let postComment = [];
  comments.map(comment => {

    if (comment.postID === props.postID) {
      return users.map(user => {
        if (user.id === comment.ownerID) {
          return postComment.push(
            <div className="modal-comment-content" key={comment.commentID}>
              <div className="modal-comment-img">
                <img src={user.profilePhoto} alt="icon" className="modal-comment-icon" />
              </div>
              <div className="modal-comment-wraper">
                <p className="modal-comment-user">{user.username}</p>
                <p className="modal-comment-comment">{comment.content}</p>
                <p className="post-timestamp">{comment.timestamp}</p>
              </div>
            </div>
          )
        }
      })
    }
  });
  

  return ReactDOM.createPortal(

    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      appear={true}
    >
      <div className="modal" onClick={props.onClose}>
        <div className={`closeX button`} onClick={props.onClose}>
          <img src="images/icons/close-modal.png" alt="Close" className="closeIcon"/>
        </div>
        <div className="modal-content-post" onClick={(e) => e.stopPropagation()}>
            <div className="modal-img">
              <img src={props.postImage} alt="post image" className="modal-post-image" />
            </div>

            <div className="modal-side-info">

                <div className="modal-side-header">
                    <div className="modal-side-image-container">
                        <img src={props.ownerImg} alt="profile picture"/>
                    </div>

                    <p>{props.postOwner}</p>

                    {
                      users.map((user) => {
                        if ( user.username === props.postOwner && user.businessAcc.isVerified) {
                          
                          return (<img src="../images/icons/verified.png" alt="verified account" className="modal-verified-account" key={Math.random()}/>);
                        }
                      })
                    }

                </div>

                <div className="modal-desc-comments">

                    <div className="modal-post-desc">
                      <div className="modal-side-image-container">
                          <img src={props.ownerImg} alt="profile picture"/>
                      </div>
                      <div className="post-desc">
                          <p>
                            <small>{props.postOwner}</small>
                            {
                              users.map((user) => {
                                if ( user.username === props.postOwner && user.businessAcc.isVerified) {
                                  
                                  return (<img src="../images/icons/verified.png" alt="verified account" className="modal-verified-account" key={Math.random()}/>);
                                }
                              })
                            }
                            {props.postDesc}
                            </p>
                      </div>
                    </div>
                  
                    <div className="modal-post-comments">
                      {postComment.map(e => e)}
                    </div>
                </div>
                <div className="modal-post-actions">
                    <div className="post-actions">
                  
                      <div>
                          <img className="icons" src={likedPosts.some(id => id === props.postID) ? "../images/icons/heart-liked.png" : "../images/icons/heart.png"} alt="heart" onClick={() => handleLikePost(props.postID)} alt="heart"  />
                          <img className="icons" src="../images/icons/comment.png" alt="comment" />
                          <img className="icons" src="../images/icons/inbox.png" alt="send"/>
                      </div>

                      <img className="icons" src={savedPosts.some(id => id === props.postID) ? "../images/icons/saved.png" : "../images/icons/non-saved.png"} alt="save" onClick={() => handleSavePost(props.postID)} alt="save"  />
                    </div>

                    <div className="post-stats">
                      {
                        posts.map((post) => {
                          if (post.postID == props.postID){
                            return (
                              <div key={post.postID}>
                                <p className="modal-post-likes">{post.likes.length} likes</p>
                                <p className="modal-post-timestamp">{post.timestamp}</p>
                              </div>
                            )
                          }
                        })
                      }
                    </div>
                </div>
                <AddComment postID={props.postID}/>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};
