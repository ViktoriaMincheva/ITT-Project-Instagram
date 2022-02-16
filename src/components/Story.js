import styles from "../styles/story.module.css"

export default function Story(props) {

    return (
        <div className={styles.wrapper}>
            <img className={styles.icon} src={props.icon} alt="avatar" onClick={props.onClick}/>
            <p className={styles.username}>{props.username}</p>
        </div>
    )

}