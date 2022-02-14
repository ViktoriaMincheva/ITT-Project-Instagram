import { useState } from "react";
import styled from "@emotion/styled";

export default function PasswordInputField(props) {

    // const StyledSpan = styled.span`
    //     cursor: pointer;
    //     left: 98%;
    //     top:0.8em;
    //     z-index: 4;
    // `
    const [typeOfInput, setType] = useState("password");

    const showPass = () => {
        if (typeOfInput === "password") {
            setType("text");
            return;
        }
        setType("password");
    }

    return (
        <>
            <input
                className={props.className}
                onInput={props.onInput}
                type={typeOfInput}
                value={props.value}
                placeholder={props.placeholder}
                required
            />

            <span onClick={() => showPass()}> {typeOfInput === "password" ? "Show" : "Hide"} </span>
        </>
    )
}