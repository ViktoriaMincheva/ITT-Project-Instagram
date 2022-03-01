import { Link } from "react-router-dom";
import styles from "./AccountCheckBox.module.css";

export default function AccountCheckBox(props) {

    return (
        <div className={styles.accountBox}>
            <p>{props.pTitle} <Link to={props.href}>{props.linkTitle}</Link> </p>
        </div>
    )
}