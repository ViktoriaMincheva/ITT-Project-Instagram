import React, { useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import styled from "@emotion/styled";

export default function AddComment(props) {

    const StyledContainer = styled.div`
        width: 100%;
        border-top: 1px solid lightgrey;
        height: 54px;
        box-sizing: border-box;
    `

    const StyledInputContainer = styled.div`
        display:flex;
        justify-content: space-between;
        align-items: center;
    `

    const MyInput = styled.input`
        outline: none;
        border: none;
        width: -webkit-fill-available;
        height: 26px;
        font-size: 14px;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    
    `

    const MyButton = styled.button`
        border: none;
        color: #0095f6;
        background-color: #fff;
        margin-right: 16px;
        margin-bottom: 12px;
        font-weight: 600;
        cursor: pointer;
    `


    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);


    const onEmojiClick = (event, emojiObject) => {
        setInputStr(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };

    return (
        <StyledContainer>
            <StyledInputContainer>
                    <img
                    style={{margin: "20px", width: "22px", height: "22px"}}
                    className="emoji-icon"
                    src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                    onClick={() => setShowPicker(val => !val)} />

                <MyInput
                    className="input-style"
                    value={inputStr}
                    onChange={e => setInputStr(e.target.value)} 
                    placeholder="Add comment..."/>

                <MyButton>Post</MyButton>
            </StyledInputContainer>

            {showPicker && <EmojiPicker
                pickerStyle={{ width: "300px",zIndex:"1"}}
                onEmojiClick={onEmojiClick} />}
        </StyledContainer>
    );

}