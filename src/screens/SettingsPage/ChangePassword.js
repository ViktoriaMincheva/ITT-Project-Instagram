import { useAuth } from '../../database/AuthContext';
import { useState } from "react";
import { EmailAuthProvider, getAuth } from 'firebase/auth';
import "./ChangePassword.css";
import { useSelector } from 'react-redux';

export default function ChangePassword() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [repeatPass, setRepeatPass] = useState("");
    const [error, setError] = useState("");
    const { updatePass, reauthenticateUser } = useAuth();
    const [message, setMessage] = useState("");
    const loggedUser = useSelector(state => state.userData);

    async function handleSubmit(e) {
        e.preventDefault();
        let newPassword = "";

        if (newPass !== repeatPass) {
            setError("New passwords do not match")
        }
        if (newPass.length < 6) {
            setError("Password should be at least 6 symbols")
        }

        const oldCredentials = EmailAuthProvider.credential(
            auth.currentUser.email,
            oldPass
        );

        try {
            await reauthenticateUser(user, oldCredentials);
        } catch (e) {
            setError("The old password you've entered is incorrect")
        }

        newPassword = newPass;
        try {
            setError("");
            await updatePass(user, newPassword);
        } catch (e) {
            setError(e.message);
        }
        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            newPassword
        );

        try {
            setError("");
            setMessage("");
            await reauthenticateUser(user, credential);
            e.target.reset();
            setMessage("Password has been successfully changed");
        } catch {
            setError("Failed to change password");
        }
    }

    return (
        <section className="changePassContainer">
            <div className="userInfo">
                <img src={loggedUser.profilePhoto != null ? loggedUser.profilePhoto : "images/icons/profile.png"} alt="avatar" className="userIcon" />
                <h5>{loggedUser.username}</h5>
            </div>

            <form onSubmit={handleSubmit}>
                {error && <div className="errorMsg">{error}</div>}
                {message && <div className="successMsg">{message}</div>}
                <div className="row">
                    <label className="label">
                        Old Password
                    </label>
                    <div className="inputField">
                        <input type="password" id="oldPass" className="input" placeholder="Enter your old password" onInput={e => setOldPass(e.target.value.trim())} />
                    </div>
                </div>
                <div className="row">
                    <label className="label">
                        New Password
                    </label>
                    <div className="inputField">
                        <input type="password" id="newPass" className="input" placeholder="Enter your new password" onInput={e => setNewPass(e.target.value.trim())} />
                    </div>
                </div>
                <div className="row">
                    <label className="label">
                        Confirm New Password
                    </label>

                    <div className="inputField">
                        <input type="password" id="repeatPass" className="input" placeholder="Repeat your new password"onInput={e => setRepeatPass(e.target.value.trim())} />
                    </div>
                </div>
                <button className="changeBtn" type="submit" disabled={(oldPass && newPass && repeatPass ? false : true)}>Change Password</button>

            </form>
        </section>
    )
}