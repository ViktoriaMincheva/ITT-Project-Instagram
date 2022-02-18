import RegisterCard from '../components/RegisterCard';
import styles from '../styles/login-register.module.css';


export default function RegisterPage(){

    return (
        <main className={styles.regMain}>
                <RegisterCard/>
        </main>
    )
}