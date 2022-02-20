import styles from "../styles/home-aside-header.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logoutAction } from '../redux/actions/userActions';
import { useAuth } from './../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';



export default function HomeAsideHeader(props) {

    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = useAuth();
    const userEmail = useSelector(state => state.userData.id);

    async function handleLogout() {
        setError("");
        dispatch(logoutAction);

        try {
            await logout();
            navigate("/login", { replace: true });
        } catch (e) {
            setError("Failed to log out")
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <a href="#"><img className={styles.icon} src={props.icon} alt="avatar"/></a>
                <div className={styles.userInfo}>
                    <a href="#" className={styles.username}>{userEmail}<br/><span className={styles.name}>{props.name}</span></a>
                </div>
            </div>
            <Link to="/login"><button className={styles.btn} onClick={handleLogout}>Log out</button></Link>
        </div>
    )
}