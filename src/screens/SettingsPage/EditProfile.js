import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBioAction, changeNameAction, changeProfilePhotoAction, changeUserNameAction, changeEmailAction} from "../../redux/actions/userActions";
import { useAuth } from '../../database/AuthContext';
import styles from "./EditProfile.module.css";
import Modal from "../../components/Modal";


export default function EditProfile() {

    const [show, setShow] = useState(false);
    const user = useSelector(state => state.userData);
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [photoError, setPhotoError] = useState("");
    const [photo, setPhoto] = useState(null);
    const { changeUserEmail } = useAuth();
    const [uploadError, setUploadError] = useState(false);

    const dispatch = useDispatch();

    const handleFileChange = (e) => {
        const { files } = e.target;
        if (files[0].type === "image/png" || files[0].type === "image/jpeg" || files[0].type === "image/jpg") {
            const localImageUrl = URL.createObjectURL(files[0]);
            setUploadError(false);
            setPhoto(localImageUrl);
        } else {
            setUploadError(true);
            setPhoto(null);
            setPhotoError("Please choose a valid file type.");
        }
    };

    const handleProfilePhotoChange = e => {
        e.preventDefault();
        if (photo !== null) {
            dispatch(changeProfilePhotoAction(photo));
            setShow(false);
            setSuccess("Your profile picture has been updated successfully.");
        } else {
            setPhotoError("You did not make any changes");
        }
    };

    const handleEditEmail = async (email) => {
        try {
            setError("");
            await changeUserEmail(email);
            dispatch(changeEmailAction(email));
            setSuccess("Your email has been updated successfully.");
        } catch (e) {
            setError(e.message);
        }
    };

    const handleEditProfile = (e) => {
        if (name && name !== user.name) {
            dispatch(changeNameAction(name));
            setSuccess("Your profile information has been updated successfully.");
        }
        if (username && username !== user.username) {
            dispatch(changeUserNameAction(username));
            setSuccess("Your profile information has been updated successfully.");
        } 
        if (bio && bio !== user.bio) {
            dispatch(changeBioAction(bio));
            setSuccess("Your profile information has been updated successfully.");
        }
        if (email) {
            handleEditEmail(email);
        }
    };


    return (
        <section className={styles.editProfileContainer}>
            
            {success && <div className={styles.success}>{success}</div>}
            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.user}>

                <div className={styles.userIconContainer}>
                     <img src={user.profilePhoto ? user.profilePhoto : "../images/icons/profile.png"} alt="avatar" className={styles.userIcon} onClick={(e) =>  setShow(true)} />
                </div>

                <h5>{user.username} <br /> <span className={styles.changePhoto} onClick={(e) =>  setShow(true)}>Change Profile Photo</span></h5>
            </div>

            <div className={styles.row}>

                <label className={styles.label}>Name</label>

                <div className={styles.inputField}>
                    <input id="name" className={styles.input} placeholder={user.name} onChange={e => setName(e.target.value.trim())} />
                    <p className={styles.text}>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</p>
                </div>
            </div>

            <div className={styles.row}>
                <label className={styles.label}>Username</label>

                <div className={styles.inputField}>
                    <input onChange={e => setUsername(e.target.value.trim())} id="username" className={styles.input} placeholder={user.username} />
                </div>
            </div>

            <div className={styles.row}>
                <label className={styles.label}>Bio</label>

                <div className={styles.inputField}>
                    <textarea id="bio" onChange={e => setBio(e.target.value.trim())} className={styles.textarea} placeholder={user.bio} />
                </div>
            </div>

            <div className={styles.row}>
                <label className={styles.label}></label>

                <div className={styles.inputField}>
                    <p className={styles.text}><strong>Personal Information</strong> <br /><br />
                        Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</p>
                </div>
            </div>

            <div className={styles.row}>
                <label className={styles.label}>Email</label>

                <div className={styles.inputField}>
                    <input type="email" className={styles.input} placeholder={user.email} onChange={e => setEmail(e.target.value.trim())}/>
                </div>
            </div>

            <div className={styles.row}>
                <button type="submit" onClick={handleEditProfile} className={styles.submitBtn}>Submit</button>
            </div>

            <Modal title="Change profile photo" onClose={() => setShow(false)} show={show}>
                <div>
                    {photoError && <div>{photoError}</div>}

                    <form className={styles.changePhotoForm} onSubmit={e => handleProfilePhotoChange(e)}>
                        <input type="file" accept=".png, .jpg, .jpeg" onChange={e => handleFileChange(e)} />
                        <button className={styles.submitPhotoBtn} type="submit" disabled={uploadError ? true : false}>submit</button>
                    </form>
                </div>
            </Modal>
        </section>
    )
}