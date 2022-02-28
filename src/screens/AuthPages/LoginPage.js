import React from 'react';
import LoginCard from './LoginCard';
import Footer from '../../components/Footer';
import styles from './Login-Register.module.css';

export default function LoginPage() {
    return (
        <>
            <main className={styles.logMain}>
            <section className={styles.loginImgContainer}>
                <img id="login-slideshow"
                    className={styles.loginimg}
                    src="../images/loginimg.png"
                    alt="login"
                />
            </section>
                <LoginCard/>
            </main>

            <Footer className={styles.footer}/>
        </>

    )

}