import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import styles from "./ProfileSuggestion.module.css"

export default function ProfileSuggestion(props) {

    const navigate = useNavigate();
    const handleClick = (username) => {
        navigate(`/users/${username}`, { replace: true });
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img onClick={() => handleClick(props.username)} className={styles.icon} src={props.icon} alt="avatar" />
                <div className={styles.userInfo}>
                    <a  onClick={() => handleClick(props.username)} className={styles.username}>{props.username}<br/><span className={styles.info}>{props.info}</span></a>
                </div></div>
            <button
                className={styles.btn}
                onClick={props.onClick}>
                {props.followed ? "Unfollow" : "Follow"}
            </button>
        </div>
    )


}