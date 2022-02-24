import { useDispatch, useSelector } from "react-redux"
import { followUserAction, unfollowUserAction } from "../../redux/actions/userActions";
import styles from "./ProfileSuggestion.module.css"

export default function ProfileSuggestion(props) {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <a href="#"><img className={styles.icon} src={props.icon} alt="avatar" /></a>
                <div className={styles.userInfo}>
                    <a href="#" className={styles.username}>{props.username}<br /><span className={styles.info}>{props.info}</span></a>
                </div></div>
            <button
                className={styles.btn}
                onClick={props.onClick}>
                {props.followed ? "Unfollow" : "Follow"}
            </button>
        </div>
    )


}