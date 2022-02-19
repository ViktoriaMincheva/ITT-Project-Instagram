import styles from "../styles/edit-profile.module.css"
import { useState } from "react";
import Modal from "./Modal";

export default function EditProfile() {

    const [show, setShow] = useState(false);

    const handleChangePhoto = e => {
        setShow(true);
    }

    return (
        <section className={styles.editProfileContainer}>
            <div className={styles.user}>
                <img src="images/icons/user.png" alt="avatar" className={styles.userIcon} onClick={(e) => handleChangePhoto(e)} />
                <h5>AVInstaPr <br /> <span className={styles.changePhoto} onClick={(e) => handleChangePhoto(e)}>Change Profile Photo</span></h5>
            </div>

            <form>
                <div className={styles.row}>
                    <label className={styles.label}>
                        Name
                    </label>
                    <div className={styles.inputField}>
                        <input className={styles.input} placeholder="AVInstaProject" />
                        <p className={styles.text}>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</p>
                    </div>
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>
                        Username
                    </label>

                    <div className={styles.inputField}>
                        <input className={styles.input} placeholder="AVInstaProject" />
                    </div>
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>
                        Website
                    </label>

                    <div className={styles.inputField}>
                        <input className={styles.input} placeholder="" />
                    </div>
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>
                        Bio
                    </label>

                    <div className={styles.inputField}>
                        <textarea className={styles.textarea} />
                    </div>
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>
                    </label>

                    <div className={styles.inputField}>
                        <p className={styles.text}><strong>Personal Information</strong> <br /><br />
                            Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</p>
                    </div>
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>
                        Email
                    </label>

                    <div className={styles.inputField}>
                        <input type="email" className={styles.input} />
                    </div>
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>
                        Phone Number
                    </label>

                    <div className={styles.inputField}>
                        <input type="number" className={styles.input} />
                    </div>
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>
                        Gender
                    </label>

                    <div className={styles.inputField}>
                        <input className={styles.input} />
                    </div>
                </div>
            </form>
            <Modal style={{ innerHeight: "50px" }} title="Change profile photo" onClose={() => setShow(false)} show={show}>
                <div style={{height: "60px"}}>

                </div>

            </Modal>
        </section>
    )
}