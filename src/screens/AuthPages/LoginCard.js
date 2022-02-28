import { useState } from "react";
import styles from "./Login-Register.module.css";
import AccountCheckBox from "./AccountCheckBox";
import { GetTheApp } from "./GetTheApp";
import Line from "./HorizontalLine";
import { useAuth } from '../../database/AuthContext';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from "../../redux/actions/userActions";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { loadPosts } from "../../redux/actions/allPostsActions";
import { loadComments } from "../../redux/actions/commentsActions";
import { loadUsers } from "../../redux/actions/allUsersActions";
import { loadStoriesAction } from "../../redux/actions/allStoriesActions";


export default function LoginCard(props) {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const { login } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    let userCredential;
    let user;
    let uid;
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("");
            userCredential = await login(email, pass);
            uid = userCredential.user.uid;
            navigate("/", { replace: true });
        } catch (error) {
            if (error.message.includes("auth/user-not-found") || error.message.includes("wrong-password")) {
                setError("You have entered an invalid email or password.")
            } else if (error.message.includes("invalid-email")){
                setError("Please enter a valid email address.")
            } else {
                setError(error.message)
            }
            console.log("catch");
        }

        const db = getFirestore();
        const docRef = doc(db, "users", `${uid}`);
        const docSnap = await getDoc(docRef);

        user = docSnap.data();
        dispatch(loginAction(user))
        dispatch(loadPosts());
        dispatch(loadComments());
        dispatch(loadUsers());
        dispatch(loadStoriesAction());
    }

    return (
        <div>
            <section className={styles.formContainer}>
                <img className={styles.logo} src="../images/logo.png" alt="Instagram" width="160px" />

                <form onSubmit={handleSubmit}>
                    {error && <div className={styles.errMsg}>{error}</div>}
                    <input className={styles.input} type="text" placeholder="Email" onInput={(e) => {setEmail(e.target.value.trim())}} />
                    <input type="password" className={styles.input} placeholder="Password" onInput={(e) => {setPass(e.target.value.trim())}} />
                    <button type="submit" className={styles.button} disabled={((email && pass) ? false : true)}>Log In</button>
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

