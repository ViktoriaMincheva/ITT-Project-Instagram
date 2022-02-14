import Footer from '../components/Footer';
import RegisterCard from '../components/RegisterCard';
import styles from '../styles/log-reg.module.css';


export default function RegisterPage(){

    return (
        <main className={styles.regMain}>
                <RegisterCard accClassName={styles.accountBox} className={styles.form}/>
        </main>
    )
}