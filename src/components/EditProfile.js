import styles from "../styles/edit-profile.module.css"
import { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { changeBioAction, changeNameAction, changeProfilePhotoAction, changeUserNameAction, changeWebsiteAction } from "../redux/actions/userActions";
export default function EditProfile() {


    const [show, setShow] = useState(false);
    const user = useSelector(state => state.userData);
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [bio, setBio] = useState("");
    const [success, setSuccess] = useState("")
    const [photo, setPhoto] = useState(null);

    const dispatch = useDispatch();

    const handleChangePhoto = e => {
        setShow(true);
    }

    const handleInput = e => {
        let inputID = e.target.id;
        switch (inputID) {
            case "username":
                setUsername(e.target.value);
                break;
            case "name":
                setName(e.target.value);
                break;
            case "website":
                let res = e.target.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
                if(res) {
                    setWebsite(res);
                }
                break;
            case "bio":
                setBio(e.target.value);
                break;
        }
    }

    const handleFileChange = (e) => {
        const { files } = e.target;
        const localImageUrl = URL.createObjectURL(files[0]);
        console.log(localImageUrl);
        console.log(typeof localImageUrl);
        setPhoto(localImageUrl);
    }

    const handleProfilePhotoChange = e => {
        e.preventDefault();
        dispatch(changeProfilePhotoAction(photo));
        setShow(false);
        setSuccess("Your profile picture has been updated successfully.")
    }

    const handleEditProfile = () => {
        if (name.trim() && name !== user.name) {
            dispatch(changeNameAction(name));
            setSuccess("Your profile information has been updated successfully.")
        }
         if (username.trim() && username !== user.username) {
            dispatch(changeUserNameAction(username));
        }
         if (website.trim() && website !== user.website) {
            dispatch(changeWebsiteAction(website));
            setSuccess("Your profile information has been updated successfully.")
        }
        if (bio.trim() && bio !== user.bio) {
            dispatch(changeBioAction(bio));
            setSuccess("Your profile information has been updated successfully.")
        } 
    }


    return (
        <section className={styles.editProfileContainer}>
            {success && <div className={styles.success}>{success}</div>}
            <div className={styles.user}>
                <img src={user.profilePhoto ? user.profilePhoto : "images/icons/user.png"} alt="avatar" className={styles.userIcon} onClick={(e) => handleChangePhoto(e)} />
                <h5>{user.username} <br /> <span className={styles.changePhoto} onClick={(e) => handleChangePhoto(e)}>Change Profile Photo</span></h5>
            </div>

            <div className={styles.row}>
                <label className={styles.label}>
                    Name
                </label>
                <div className={styles.inputField}>
                    <input id="name" className={styles.input} placeholder={user.name} onInput={e => handleInput(e)} />
                    <p className={styles.text}>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</p>
                </div>
            </div>

            <div className={styles.row}>
                <label className={styles.label}>
                    Username
                </label>

                <div className={styles.inputField}>
                    <input onInput={e => handleInput(e)} id="username" className={styles.input} placeholder={user.username} />
                </div>
            </div>

            <div className={styles.row}>
                <label className={styles.label}>
                    Website
                </label>

                <div className={styles.inputField}>
                    <input type="url" onInput={e => handleInput(e)} id="website" className={styles.input} placeholder={user.website} />
                </div>
            </div>

            <div className={styles.row}>
                <label className={styles.label}>
                    Bio
                </label>

                <div className={styles.inputField}>
                    <textarea id="bio" onInput={e => handleInput(e)} className={styles.textarea} />
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
                    <input type="email" onInput={e => handleInput(e)} className={styles.input} placeholder={user.email} />
                </div>
            </div>

            <div className={styles.row}>
                <button type="submit" onClick={handleEditProfile} className={styles.submitBtn}>Submit</button>
            </div>

            <Modal title="Change profile photo" onClose={() => setShow(false)} show={show}>
                <div>
                    <form className={styles.changePhotoForm} onSubmit={e => handleProfilePhotoChange(e)}> 
                        <input type="file" onChange={e => handleFileChange(e)} />
                        <button type="submit">submit</button>
                    </form>
                </div>
            </Modal>
        </section>
    )
}