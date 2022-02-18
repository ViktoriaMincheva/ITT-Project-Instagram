import React from 'react';
import Slideshow from '../components/SlideShowComponent';
import LoginCard from '../components/LoginCard';
import Footer from '../components/Footer';
import styles from '../styles/login-register.module.css';

export default function LoginPage() {
    return (
        <>
            <main className={styles.logMain}>
                <Slideshow />
                <LoginCard/>
            </main>

            <Footer className={styles.footer}/>
        </>

    )

}