import { useState } from "react";

export default function PasswordInputField(props) {

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