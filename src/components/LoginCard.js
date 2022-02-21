import { useState } from "react";
import styles from "../styles/login-register.module.css";
import AccountCheckBox from "./AccountCheckBox";
import { GetTheApp } from "./GetTheApp";
import Line from "./HorizontalLine";
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from "../redux/actions/userActions";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { loadPosts } from "../redux/actions/allPostsActions";


export default function LoginCard(props) {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleInput = e => {
        let inputID = e.target.id;
        switch (inputID) {
            case "email":
                setEmail(e.target.value.trim());
                break;
            case "pass":
                setPass(e.target.value.trim());
        }
    }

    let userCredential;
    let user;
    let uid;
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("");
            setLoading(true);
            userCredential = await login(email, pass);
            uid = userCredential.user.uid;
            navigate("/", { replace: true });
        } catch {
            setError("Failed to log in");
        }

        const db = getFirestore();
        const docRef = doc(db, "users", `${uid}`);
        const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //     console.log("data ->", docSnap.data());
        // }
        //     console.log("No such document!");
        // }
       
        user = docSnap.data();
        dispatch(loginAction(user))
        dispatch(loadPosts());
        setLoading(false);
    }

    return (
        <div>
            <section className={styles.formContainer}>
                <img className={styles.logo} src="logo.png" alt="Instagram" width="160px" />

                <form onSubmit={handleSubmit}>
                    {error && <div>{error}</div>}
                    <input className={styles.input} id="email" type="text" placeholder="Email" onInput={(e) => handleInput(e)} />
                    <input type="password" className={styles.input} id="pass" placeholder="Password" onInput={(e) => handleInput(e)} />
                    <button type="submit" className={styles.button} disabled={((email && pass) ? false : true) || loading}>Log In</button>
                </form>

                {/* this is the or-line in the login form */}
                <Line />

                <Link to="/forgot-password" className={styles.forgotPass}>Forgot password?</Link>
            </section>

            <AccountCheckBox className={props.accClassName} pTitle="Don't have an account?" linkTitle="Sign up" href="/register" />
            <GetTheApp />
        </div>
    )
}

