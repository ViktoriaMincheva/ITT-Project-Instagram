import { useState, useEffect } from 'react';
import EmojiPicker from "emoji-picker-react";
import styles from "./Inbox.module.css";
import InboxMsg from "./InboxMsg";
import InfoModal from "../../components/InfoModal";
import LoadingComponent from './../../components/LoadingComponent';

export default function Inbox() {
    const [clickedUser, setClickedUser] = useState(false);
    const [data, setData] = useState(null);
    const [show, setShow] = useState(false);
    const [receiver, setReceiver] = useState("");
    const [receiverImage, setReceiverImage] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    // const [] = useState("");

    const handleChooseUser = (e) => {
        setShow(true);
    }
    const handleChosenUser = (user, userPic) => {
        setReceiver(user);
        setReceiverImage(userPic);
        setClickedUser(true);
        setShow(false);
    }

    useEffect(function () {
        fetch("user-profile.json")
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    setData(data.following.peopleUserFollows);
                }, 500)
            })
    }, [])


    const onEmojiClick = (event, emojiObject) => {
        // setInputStr(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };

    return (
        <div className={styles.InboxContainer}>
            <div className={styles.msgMenu}>
                <div className={styles.menuHeader}>
                    <p>Username</p>
                    <img src="images/icons/edit.png" alt="edit icon" onClick={handleChooseUser} />
                </div>
                <div className={styles.allMsgContainer}>
                    <InboxMsg username={"Username1"} lastMsg={"last message looooong message is this one"} time={"3w"}></InboxMsg>
                    <InboxMsg username={"Username1"} lastMsg={"last message looooong message is this one"} time={"3w"}></InboxMsg>
                    <InboxMsg username={"Username1"} lastMsg={"last message looooong message is this one"} time={"3w"}></InboxMsg>
                </div>
            </div>
            {!data ? <LoadingComponent/> : <>
                <div className={styles.chatInfo}>
                    {
                        clickedUser ?
                            <>
                                <div className={styles.receiverHeader}>
                                    <img src={receiverImage} alt="receiver image" className={styles.receiverImage}/>
                                    <small className={styles.receiverUsername}>{receiver}</small>
                                </div>
                                <div className={styles.message}>
                                    <div className={styles.communicationMsgs}>
                                        
                                    </div>
                                    <div className={styles.sendMsgContainer}>
                                        <img
                                        style={{ width: "22px", height: "22px"}}
                                        className={styles.emojiIcon}
                                        src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                                        onClick={() => setShowPicker(val => !val)} />

                                        <input type="text" placeholder="Message..." className={styles.msgInput}/>
                                        {showPicker && <EmojiPicker
                                        pickerStyle={{ width: "300px", zIndex:"1", marginTop: "-330px", marginLeft: "-300px"}}
                                        onEmojiClick={onEmojiClick} />}

                                    </div>
                                </div>
                            </>
                            :
                            <div className={styles.defaultInbox}>
                                <img src="images/icons/send-circle.png" alt="send icon" />
                                <p>Your messages</p>
                                <small>Send private photos and messages to a friend or group</small>
                                <button type="button" onClick={handleChooseUser}>Send message</button>
                            </div>
                    }

                </div>
                <InfoModal title="New message" onClose={() => setShow(false)} show={show}>
                    <div className={styles.search}>
                       <p>To:</p>
                       <input type="text" placeholder="Search..."/>
                    </div>
                    {
                        data.map((follow) =>
                            (
                                <div key={follow.id} style={{cursor: 'pointer'}} onClick={() => handleChosenUser(follow.username, follow.profilePic)}>
                                    <img src={follow.profilePic} alt="picture" style={{ cursor: 'pointer' }} />
                                    <p>{follow.username}</p>
                                </div>
                            )
                        )
                    }
                </InfoModal>
            </>}
        </div>
    )
}