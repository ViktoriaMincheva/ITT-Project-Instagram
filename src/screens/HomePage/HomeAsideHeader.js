import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logoutAction } from '../../redux/actions/userActions';
import { useAuth } from '../../database/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./HomeAsideHeader.module.css"


export default function HomeAsideHeader(props) {

    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = useAuth();
    const user = useSelector(state => state.userData);
    
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
                <Link to="/profile-posts"><img className={styles.icon} src={user.profilePhoto ? user.profilePhoto : "images/icons/user.png"} alt="avatar" /></Link>
                <div className={styles.userInfo}>
                    <a href="#" className={styles.username}>{user.username}<br /><span className={styles.name}>{user.name}</span></a>
                </div>
            </div>
            <Link to="/login"><button className={styles.btn} onClick={handleLogout}>Log out</button></Link>
        </div>
    )
}