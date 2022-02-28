import { useState } from "react";
import { GetTheApp } from "./GetTheApp";
import { useAuth } from '../../database/AuthContext'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from "@emotion/styled";
import styles from "./Login-Register.module.css"
import Line from "./HorizontalLine";
import AccountCheckBox from "./AccountCheckBox";
import Footer from "../../components/Footer";

export default function RegisterCard(props) {
    
    const StyledHeading = styled.h2`
    color: #8e8e8e;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    margin: 0 40px 10px;
    text-align: center;
    `;
    
    const StyledRegtext = styled.p`
    color: #8e8e8e;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    `;
    
    const users = useSelector(state => state.users.users);
    const [email, setEmail] = useState("");
    const [fullName, setName] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleCheckUsername (userName) {
        users.map(user => {
            if(user.username === userName) {
                return true;
            }
        })
        return false;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setError("");

            if (handleCheckUsername(username)) {
                throw new Error("This username is already in use.");
            }

            await signup(email, pass, fullName, username);
            navigate("/login", { replace: true });

        } catch (error) {
            if(error.message.includes("email-already-in-use")){
                setError("This email is already in use.")
            } else if (error.message.includes("invalid-email")){
                setError("Please enter a valid email address.")
            } else if (error.message.includes("weak-password")){
                setError("Password should be at least 6 characters.")
            } else {
                setError(error.message);
            }
        }

    };

    return (
        <>
            <section className={styles.formContainer}>
                <img className={styles.logo} src="../images/logo.png" alt="Instagram" />

                <StyledHeading>Sign up to see photos and videos from your friends.</StyledHeading>
                                <Line />
                <form onSubmit={handleSubmit}>
                    {error && <div className={styles.errMsg}>{error}</div>}
                    <input className={styles.input} id="email" type="text" placeholder="Email" onInput={(e) => setEmail(e.target.value.trim())} />
                    <input className={styles.input} id="fullName" type="text" placeholder="Full name" onInput={(e) => setName(e.target.value.trim())} />
                    <input className={styles.input} id="username" type="text" placeholder="Username" onInput={(e) => setUsername(e.target.value.trim())} />
                    <input className={styles.input} type="password" id="pass" placeholder="Password" onInput={(e) => setPass(e.target.value.trim())} />
                    <button type="submit" className={styles.button} title="Next" disabled={((email && fullName && username && pass) ? false : true)} >Register</button>

                    <StyledRegtext>By signing up, you agree to our <strong>Terms</strong>. Learn how we collect, use and share your data in our <strong>Data Policy</strong> and how we use cookies and similar technology in our <strong>Cookies Policy</strong> .</StyledRegtext>
                </form>
            </section>

            <AccountCheckBox className={props.accClassName} pTitle="Have an account?" linkTitle="Log In" href="/login" />
            <GetTheApp />

            <Footer className={styles.footer}/>
        </>
    )

}