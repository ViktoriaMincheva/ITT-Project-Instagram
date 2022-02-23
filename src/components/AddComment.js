import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { newCommentAddedAction } from "../redux/actions/commentsActions";
import styles from "./styles/AddComment.module.css";
import EmojiPicker from "emoji-picker-react";

export default function AddComment(props) {

    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const dispatch = useDispatch();
    const userID = useSelector(state => state.userData.id);


    const onEmojiClick = (event, emojiObject) => {
        setInputStr(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };

    const handlePostComment = () => {
        let obj = {
            commentID: uuidv4(),
            ownerID: userID,
            postID: props.postID,
            content: inputStr,
            likes: 0,
            timestamp: new Date().getHours() + "h"
        }
        setInputStr('');
        dispatch(newCommentAddedAction(obj))
    }


    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <img
                className="emoji-icon"
                src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                onClick={() => setShowPicker(val => !val)} />

                <input 
                    className={styles.inputField}
                    autoFocus={inputStr ? true : false}
                    value={inputStr}
                    spellCheck="false"
                    onChange={e => {
                        setInputStr(e.target.value);
                    }}
                    placeholder="Add comment..."/>

                <button type="button" onClick={handlePostComment} className={styles.postBtn}>Post</button>
            </div>

            {showPicker && <EmojiPicker
                pickerStyle={{ width: "300px", zIndex:"1", marginTop: "-370px"}}
                onEmojiClick={onEmojiClick} />}
        </div>
    );

}