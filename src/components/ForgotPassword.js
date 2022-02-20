import React from "react";
import styles from "../styles/ForgotPassword.module.css";
import Line from './HorizontalLine';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from './../contexts/AuthContext';
import Footer from "./Footer";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInput = e => {
    setEmail(e.target.value.trim());
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email, setEmail);
      setMessage("Check your inbox for further instructions")
    } catch (e) {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return ( 
    <>
      <div className={styles.Container}>
        <div className={styles.mainSection}>
          <img src="locked.png" alt='locked icon' />
          <p className={styles.troubleMsg}>Trouble with logging in?</p>
          <p className={styles.msg}>Enter your email address and we'll send you a link to get back into your account.</p>
          {error && <div className={styles.errorMsg}>{error}</div>}
          {message && <div className={styles.successMsg}>{message}</div>}
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Email address" onInput={(e) => handleInput(e)}/>
            <button type="submit" disabled={(email ? false : true) || loading}>Send Login Link</button>
          </form>
          <Line/>
          <Link to="/register" className={styles.register}>Create New Account</Link>
        </div>
        <Link to="/login" className={styles.login}>Back to Login</Link>
      </div>
      <Footer/>
    </>
  )
}
