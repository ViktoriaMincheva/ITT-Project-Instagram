import React from 'react';
import styles from "../styles/Inbox.module.css";

export default function InboxMsg(props) {
  return (
    <div className={styles.msgPreview}>
        <img src="images/icons/profile.png" alt="sender profile picture"/>
        <div>
            <p className={styles.senderUsername}>{props.username}</p>
            <div className={styles.lastMsgInfo}>
                <small className={styles.lastMsg}>{props.lastMsg}</small>
                <div className={styles.dot}>.</div>
                <small className={styles.time}>{props.time}</small>
            </div>
        </div>
    </div>
  )
}
