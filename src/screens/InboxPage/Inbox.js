import React from "react";
import { useState, useEffect } from 'react';
import EmojiPicker from "emoji-picker-react";
import styles from "./Inbox.module.css";
import InboxMsg from "./InboxMsg";
import InfoModal from "../../components/InfoModal";
import LoadingComponent from './../../components/LoadingComponent';
import { useSelector } from 'react-redux';
import { doc, getFirestore, getDoc, collection, setDoc, query, Timestamp,  onSnapshot, orderBy, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

export default function Inbox() {
    const [clickedUser, setClickedUser] = useState(false);
    const [show, setShow] = useState(false);
    const [receiver, setReceiver] = useState("");
    const [receiverImage, setReceiverImage] = useState("");
    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const loggedUser = useSelector(state => state.userData);
    const users = useSelector(state => state.users.users).filter(user => user.id !== loggedUser.id);
    const [userGroups, setUserGroups] = useState([]);
    const [messages, setMessages] = useState("");
    const [currentMsgUserID, setCurrentMsgUserID] = useState("");
    const [groupID, setGroupID] = useState("");
    
    const db = getFirestore();

    // Message-----------------------------------------------------------------
    
    const onEmojiClick = (event, emojiObject) => {
        setInputStr(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };

    const handleCurrentChat = (receiverID) => {
        setCurrentMsgUserID(receiverID);
    }
    
    async function handleSendMessage () {
        
        setDoc(doc(db, "message", groupID, "messages", uuidv4()), {
            messageText: inputStr,
            sentBy: loggedUser.id,
            sentAt: Timestamp.fromDate(new Date())
        });
        const groupRef = doc(db, "groups", groupID);

        await updateDoc(groupRef, {
            recentMessage : inputStr
        });

        setInputStr('');
        const messagesRef = collection(db, "message", groupID, "messages");
        liveUpdate(messagesRef);
        
    }

    const handleEnterPress = e => {
        if(e.keyCode === 13) {
            handleSendMessage();
        }
    };
    
    const liveUpdate = async (messagesRef) => {
        const queryObj = query(messagesRef, orderBy("sentAt"));
        onSnapshot(queryObj, (querySnapshot) => {
            const msgArr = [];
            querySnapshot.forEach((doc) => {
                msgArr.push({ id: doc.id, ...doc.data() })
            });
            setMessages(msgArr);
        });
        // console.log(messages);
    }
      
    //-------------------------------------------------------------------------
    const getAllChats = async () => {
        const grRef = collection(db, "groups");
        const queryObj = query(grRef, orderBy("createdAt"));
        onSnapshot(queryObj, (querySnapshot) => {
            const groupsArr = [];
            querySnapshot.forEach((group) => {
                groupsArr.unshift({ id: group.id, ...group.data()})
            })
            setUserGroups(groupsArr);
        })

    }

    const handleChooseUser = (e) => {
        setShow(true);
    }

    useEffect( async function loadGroups() {
        getAllChats();
    },[])
    
    
    async function handleChosenUser (username, userPic, receiverID){
        
        setReceiver(username);
        setReceiverImage(userPic);
        setClickedUser(true);
        setShow(false);
        
        const groupRef = doc(db, "groups", `${receiverID}${loggedUser.id}`);
        const docSnap = await getDoc(groupRef);
        let grID = "";
    
        let data = docSnap.data();

        setGroupID(`${receiverID}${loggedUser.id}`);
        grID = `${receiverID}${loggedUser.id}`;
        if (!data) {
            setDoc(doc(db, "groups", `${loggedUser.id}${receiverID}`), {
                createdAt : Timestamp.fromDate(new Date()),
                groupID : loggedUser.id + receiverID,
                createdBy : loggedUser.id,
                createdByUsername : loggedUser.username,
                members : [loggedUser.id, receiverID],
                loggedUserImg : loggedUser.profilePhoto,
                receiverImg : userPic,
                name : username,
                recentMessage : "",
                type : 1
                
            })
            setGroupID(`${loggedUser.id}${receiverID}`);
            grID = `${loggedUser.id}${receiverID}`;
        }

        const messagesRef = collection(db, "message", grID, "messages");
        getAllChats();
        liveUpdate(messagesRef);
    }

    return (
        <div className={styles.InboxContainer}>
            <div className={styles.msgMenu}>
                <div className={styles.menuHeader}>
                    <p>Username</p>
                    <img src="images/icons/edit.png" alt="edit icon" onClick={handleChooseUser} />
                </div>
                <div className={styles.allMsgContainer}>
                    {
                        userGroups && 
                        userGroups.filter( group => group.groupID.includes(loggedUser.id))
                            .map(group => (
                            <InboxMsg 
                                key={group.groupID} 
                                username={group.createdByUsername === loggedUser.username ? group.name : group.createdByUsername} 
                                lastMsg={group.recentMessage} 
                                msgImage={group.receiverImg === loggedUser.profilePhoto ? group.loggedUserImg : group.receiverImg}
                                onClick={() => {
                                    handleCurrentChat(group.members.filter((member) => member !== loggedUser.id)[0]) 
                                    handleChosenUser(group.name, group.receiverImg, group.members.filter((member) => member !== loggedUser.id)[0]) 
                                }}>
                            </InboxMsg>
                            ))
                        
                    }
                </div>
            </div>
            {!users ? <div className={styles.LoadingComponent}><LoadingComponent /></div> : <>
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
                                        {
                                            messages && 
                                            messages.map(msg => 
                                                {
                                                    if (msg.sentBy === loggedUser.id){
                                                        return (<div className={styles.msgByLoggedUser} key={msg.id}>{msg.messageText}</div>)
                                                    } else {
                                                        return (<div className={styles.msgByUser} key={msg.id}>{msg.messageText}</div>)
                                                    }
                                                }    
                                                
                                            )
                                        }
                                    </div>
                                    <div className={styles.sendMsgContainer}>
                                        <div className={styles.inputContainer}>
                                            <img
                                            className={styles.emojiIcon}
                                            src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                                            onClick={() => setShowPicker(val => !val)} />

                                            <input 
                                                onKeyDown={e => handleEnterPress(e)}
                                                className={styles.msgInput}
                                                autoFocus={inputStr ? true : false}
                                                value={inputStr}
                                                spellCheck="false"
                                                onChange={e => {
                                                    setInputStr(e.target.value);
                                                }}
                                                placeholder="Add message..."/>

                                            <button type="button" onClick={handleSendMessage} className={styles.postBtn}>Send</button>
                                        </div>

                                        {showPicker && <EmojiPicker
                                            pickerStyle={{ width: "300px", zIndex:"1", marginTop: "-330px", marginLeft: "-550px"}}
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
                        users.map((follow) =>
                            (
                                <div key={follow.id} style={{cursor: 'pointer'}} onClick={() => {handleCurrentChat(follow.id); handleChosenUser(follow.username, follow.profilePhoto, follow.id) }} >
                                    <img src={follow.profilePhoto} alt="picture" style={{ cursor: 'pointer' }} />
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