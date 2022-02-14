import styled from "@emotion/styled";
import { useState } from "react";
import styles from "../styles/log-reg.module.css"
import Line from "./HorizontalLine";
import PasswordInputField from "./PasswordInputField";
import UserInputField from "./UserInputField";
import Button from "../components/Button";
import AccountCheckBox from "./AccountCheckBox";
import { GetTheApp } from "./GetTheApp";
import Footer from "./Footer";

export default function RegisterCard(props) {

    const StyledHeading = styled.h2`
        color: #8e8e8e;
        font-size: 17px;
        font-weight: 600;
        line-height: 20px;
        margin: 0 40px 10px;
        text-align: center;
    `

    const StyledRegtext = styled.p`
        color: #8e8e8e;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
    `

    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const handleInput = e => {
        name = e.target.name;
        switch (name) {
            case "phone-email":
                if (typeof name === 'number') {
                    setPhone(name.trim());
                } else {
                    setEmail(name.trim())
                }
                break;
            case "name":
                setName(name.trim());
                break;
            case "username":
                setUsername(name.trim());
            case "pass":
                setPass(name.trim())
        }
    }

    return (
        <>
            <section style={{marginTop:12}} className={props.className}>
                <img className={styles.logo} src="logo.png" alt="Instagram" width="160px" />

                <StyledHeading>Sign up to see photos and videos from your friends.</StyledHeading>

                <Line />
                <form>
                    <UserInputField name="phone-email" type="text" placeholder="Mobile Number or Email" onInput={(e) => handleInput(e)} />
                    <UserInputField name="name" type="text" placeholder="Full name" onInput={(e) => handleInput(e)} />
                    <UserInputField name="username" type="text" placeholder="Username" onInput={(e) => handleInput(e)} />
                    <PasswordInputField name="pass" placeholder="Password" onInput={(e) => handleInput(e)} />
                    <Button buttonClass={styles.button} title="Next" disabled={((phone || email ) && name && username && pass) ? false : true} />

                    <StyledRegtext>By signing up, you agree to our <strong>Terms</strong>. Learn how we collect, use and share your data in our <strong>Data Policy</strong> and how we use cookies and similar technology in our <strong>Cookies Policy</strong> .</StyledRegtext>
                </form>

            </section>

            <AccountCheckBox className={props.accClassName} pTitle="Have an account" linkTitle="Log In" href="/login" />
            <GetTheApp />

            <Footer className={styles.footer}/>
        </>
    )
}