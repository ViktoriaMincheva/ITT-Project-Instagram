import { useState } from "react";
import styles from "../styles/log-reg.module.css"
import styled from "@emotion/styled";
import Button from "./Button";
import PasswordInputField from "./PasswordInputField";
import UserInputField from "./UserInputField";
import AccountCheckBox from "./AccountCheckBox";
import { GetTheApp } from "./GetTheApp";
import Line from "./HorizontalLine";

export default function LoginCard(props) {

    const StyledLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: darkblue; 
    margin-top: 14px;
    font-size: 14px;
`

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
            <section className={props.className}>
                <img className={styles.logo} src="logo.png" alt="Instagram" width="160px" />

                <form>
                    <UserInputField name="username" type="text" placeholder="Username" onInput={(e) => handleInput(e)} />
                    <PasswordInputField name="pass" placeholder="Password" onInput={(e) => handleInput(e)} />
                    <Button buttonClass={styles.button} title="Log In" disabled={(username && pass) ? false : true} />
                </form>


                {/* this is the or-line in the login form */}
                <Line/>

                <StyledLink href="#">Forgot password?</StyledLink>
                
            </section>

            <AccountCheckBox className={props.accClassName} pTitle="Don't have an account?" linkTitle="Sign up" href="/register" />
            <GetTheApp />
        </div>



    )
}

