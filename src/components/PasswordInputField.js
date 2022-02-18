import { useState } from "react";
import styles from "../styles/password-input.module.css"

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
        <div className={styles.inputContainer}>
            <input
                placeholder="Password"
                onInput={props.onInput}
                type={typeOfInput}
                value={props.value}
                required
            />

            <span className={styles.togglePass} onClick={() => showPass()}> {typeOfInput === "password" ? "Show" : "Hide"} </span>
        </div>
    )
}