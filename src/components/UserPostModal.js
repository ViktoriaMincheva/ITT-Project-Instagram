import ReactDOM from "react-dom";
import React, { useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from 'react-redux';
import { savePostAction,  unSavePostAction } from "../redux/actions/userActions";
import { postDeletedAction } from "../redux/actions/allPostsActions";
import { likeRemovedAction, newLikeAddedAction } from "../redux/actions/allLikesActions";
import { v4 as uuidv4 } from 'uuid';
import "./styles/Modal.css";
import AddComment from './AddComment';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

export default function Modal(props) {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const comments = useSelector(state => state.comments.comments);
  const loggedUser = useSelector(state => state.userData);
  const posts = useSelector(state => state.allPostsData.posts);
  const savedPosts = useSelector(state => state.userData.savedPosts);
  const likes = useSelector(state => state.likesData.likes);
  const navigate = useNavigate();


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

  const handleVisitUser = (username) => {
    navigate(`/users/${username}`, { replace: true });
  };

  function getLikeObj() {
    return likes.filter(like => like.postID === props.postID && like.userID === loggedUser.id);
  };
  

  const handleLikePost = postID => {
    let like = getLikeObj();

    if(like.length <= 0) {
      let likeObj ={
        id : uuidv4(),
        postID : postID,
        userID : loggedUser.id
      };

      dispatch(newLikeAddedAction(likeObj))  
          
    } else {
      dispatch(likeRemovedAction(like[0].id))
    }
  };


  const handleSavePost = postID => {

    if (savedPosts.some(id => id === postID)) {
      dispatch(unSavePostAction(postID))
    } else {
      dispatch(savePostAction(postID))
    }

  };

  const handleDeletePost = postID => {
    dispatch(postDeletedAction(postID));
  }

  let postComment = [];
  comments.map(comment => {

    if (comment.postID === props.postID) {
      return users.map(user => {
        if (user.id === comment.ownerID) {
          return postComment.push(
            <div className="modal-comment-content" key={comment.commentID}>

              <div className="modal-comment-img">
                <img src={user.profilePhoto} alt="icon" className="modal-comment-icon" onClick={() => handleVisitUser(user.username)}/>
              </div>

              <div className="modal-comment-wraper">
                <p className="modal-comment-user" onClick={() => handleVisitUser(user.username)}>{user.username}</p>
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
          <img src="images/icons/close-modal.png" alt="Close" className="closeIcon" />
        </div>

        <div className="modal-content-post" onClick={(e) => e.stopPropagation()}>

          <div className="modal-img">
            <img src={props.postImage} alt="post image" className="modal-post-image" />
          </div>

          <div className="modal-side-info">

            <div className="modal-header">

              <div className="modal-side-header">
                <div className="modal-side-image-container">
                  <img src={props.ownerImg} alt="profile picture" onClick={() => handleVisitUser(props.postOwner)}/>
                </div>

                <p onClick={() => handleVisitUser(props.postOwner)}>{props.postOwner}</p>

                {
                  users.map((user) => {
                    if (user.username === props.postOwner && user.businessAcc.isVerified) {

                      return (<img src="../images/icons/verified.png" alt="verified account" className="modal-verified-account" key={Math.random()} />);
                    }
                  })
                }

              </div>
              <div className="delete-container">

               {
                props.ownerID === loggedUser.id ? (<DeleteOutlineRoundedIcon className="delete-img" onClick={() => handleDeletePost(props.postID)} />) : null
               }

              </div>
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
                        if (user.username === props.postOwner && user.businessAcc.isVerified) {

                          return (<img src="../images/icons/verified.png" alt="verified account" className="modal-verified-account" key={Math.random()} />);
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
                  <img className="icons" 
                  src={likes.some(like => like.postID === props.postID && like.userID === loggedUser.id) ? "../images/icons/heart-liked.png" : "../images/icons/heart.png"} 
                  alt="heart"  alt="heart" 
                  onClick={() => handleLikePost(props.postID)} />
                  
                  <img className="icons" src="../images/icons/comment.png" alt="comment" />
                </div>

                <img className="icons" src={savedPosts.some(id => id === props.postID) ? "../images/icons/saved.png" : "../images/icons/non-saved.png"} alt="save" onClick={() => handleSavePost(props.postID)} alt="save" />
              </div>

              <div className="post-stats">
                {
                  posts.map((post) => {
                    if (post.postID == props.postID) {
                      return (
                        <div key={post.postID}>
                          <p className="modal-post-likes">{props.likes} likes</p>
                          <p className="modal-post-timestamp">{post.timestamp}</p>
                        </div>
                      )
                    }
                  })
                }
              </div>

            </div>

            <AddComment postID={props.postID} />
            
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};
