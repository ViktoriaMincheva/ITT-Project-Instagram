import styles from "../styles/home-aside-header.module.css"

export default function HomeAsideHeader(props) {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <a href="#"><img className={styles.icon} src={props.icon} alt="avatar"/></a>
                <div className={styles.userInfo}>
                    <a href="#" className={styles.username}>{props.username}<br/><span className={styles.name}>{props.name}</span></a>
                </div>
            </div>
            <button className={styles.btn}>Switch</button>
        </div>
    )
}