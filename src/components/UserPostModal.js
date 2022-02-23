import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles/Modal.css";
import AddComment from './AddComment';

export default function Modal (props) {
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
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-img"></div>
            <div className="modal-side-info">
                <div className="modal-side-header">

                </div>
                <div className="modal-desc-comments">
                    <div className="modal-post-desc">

                    </div>
                    <div className="modal-post-comments">

                    </div>
                </div>
                <div className="modal-post-actions">
                    <div className="post-actions">

                    </div>
                    <div className="post-stats">

                    </div>
                </div>
                <AddComment/>

          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};
