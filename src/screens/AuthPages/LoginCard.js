import { useState } from "react";
import styles from "./Login-Register.module.css";
import AccountCheckBox from "./AccountCheckBox";
import { GetTheApp } from "./GetTheApp";
import Line from "./HorizontalLine";
import { useAuth } from '../../database/AuthContext';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { loginAction } from "../../redux/actions/userActions";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { loadPosts } from "../../redux/actions/allPostsActions";
import { loadComments } from "../../redux/actions/commentsActions";
import { loadUsers } from "../../redux/actions/allUsersActions";


export default function LoginCard(props) {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


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
       
        user = docSnap.data();
        dispatch(loginAction(user))
        dispatch(loadPosts());
        dispatch(loadComments());
        dispatch(loadUsers());
        setLoading(false);
    }

    return (
        <div>
            <section className={styles.formContainer}>
                <img className={styles.logo} src="../images/logo.png" alt="Instagram" width="160px" />

                <form onSubmit={handleSubmit}>
                    {error && <div>{error}</div>}
                    <input className={styles.input} type="text" placeholder="Email" onInput={(e) => setEmail(e.target.value.trim())} />
                    <input type="password" className={styles.input} placeholder="Password" onInput={(e) => setPass(e.target.value.trim())} />
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

