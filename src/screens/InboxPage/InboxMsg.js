import React from 'react';
import styles from "./Inbox.module.css";

export default function InboxMsg(props) {
  return (
    <div className={styles.msgPreview} onClick={props.onClick}>
        <img src={props.msgImage} alt="sender profile picture"/>
        <div>
            <p className={styles.senderUsername}>{props.username}</p>
            <div className={styles.lastMsgInfo}>
                <small className={styles.lastMsg}>{props.lastMsg}</small>
            </div>
        </div>
    </div>
  )
}
