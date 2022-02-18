import { useState } from "react";
import styles from "../styles/login-register.module.css"
import styled from "@emotion/styled";
import PasswordInputField from "./PasswordInputField";
import AccountCheckBox from "./AccountCheckBox";
import { GetTheApp } from "./GetTheApp";
import Line from "./HorizontalLine";

export default function LoginCard(props) {


    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const handleInput = e => {
        if (e.target.name === "username") {
            setUsername(e.target.value.trim())
        } else if (e.target.name === "pass") {
            setPass(e.target.value.trim())
        }
    }

    return (
        <div>
            <section className={styles.formContainer}>
                <img className={styles.logo} src="logo.png" alt="Instagram" width="160px" />

                <form>
                    <input className={styles.input} name="username" type="text" placeholder="Username" onInput={(e) => handleInput(e)} />
                    <PasswordInputField className={styles.input} name="pass" placeholder="Password" onInput={(e) => handleInput(e)} />
                    <button className={styles.button} disabled={(username && pass) ? false : true}>Log In</button>
                </form>


                {/* this is the or-line in the login form */}
                <Line/>

                <a href="#" className={styles.forgotPass}>Forgot password?</a>
                
            </section>

            <AccountCheckBox className={props.accClassName} pTitle="Don't have an account?" linkTitle="Sign up" href="/register" />
            <GetTheApp />
        </div>



    )
}

