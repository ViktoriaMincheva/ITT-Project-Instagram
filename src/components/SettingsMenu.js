import { Link, useLocation } from "react-router-dom";
import styles from "../styles/settings-menu.module.css"



export default function SettingsMenu() {

let location = useLocation();

    return (
        <div className={styles.menuContainer}>
            <ul>
                <li>
                    <Link to="/edit" className={location.pathname === "/edit" ? `${styles.menuItemActive}` : `${styles.menuItem}`}> Edit Profile </Link>
                </li>
                <li>
                    <Link to="/changepass" className={location.pathname === "/changepass" ? `${styles.menuItemActive}` : `${styles.menuItem}`} to="/changepass">Change Password</Link>
                </li>
            </ul>

            <div className={styles.logoContainer}>
                <img className={styles.metaLogo} src="Meta-logo.png" alt="meta"/>
            </div>
        </div>
    )


}