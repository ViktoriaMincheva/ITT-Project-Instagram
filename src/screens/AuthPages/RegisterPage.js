import styles from './Login-Register.module.css';
import RegisterCard from './RegisterCard';

export default function RegisterPage(){

    return (
        <main className={styles.regMain}>
                <RegisterCard/>
        </main>
    )
}