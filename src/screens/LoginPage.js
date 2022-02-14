import React from 'react';
import Slideshow from '../components/SlideShowComponent';
import LoginCard from '../components/LoginCard';
import Footer from '../components/Footer';
import styles from '../styles/log-reg.module.css';

export default function LoginPage() {
    return (
        <>
            <main className={styles.logMain}>
                <Slideshow />
                <LoginCard accClassName={styles.accountBox} className={styles.form} />
            </main>

            <Footer className={styles.footer}/>
        </>

    )

}