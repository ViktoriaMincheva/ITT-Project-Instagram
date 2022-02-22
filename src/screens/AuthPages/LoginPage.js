import React from 'react';
import Slideshow from './SlideShowComponent';
import LoginCard from './LoginCard';
import Footer from '../../components/Footer';
import styles from './Login-Register.module.css';

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