import React from "react";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import styles from "./styles/AddComment.module.css";

export default function AddComment(props) {

    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setInputStr(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };

    //TODO
    const handlePostComment = () => {

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