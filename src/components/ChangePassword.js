import "../styles/changePass.css"
import { Link } from "react-router-dom"

export default function ChangePassword() {

    return (
        <section className="changePassContainer">
            <div className="userInfo">
                <img src="images/icons/user.png" alt="avatar" className="userIcon" />
                <h5>AVInstaPr</h5>
            </div>

            <form>
                <div className="row">
                    <label className="label">
                        Old Password
                    </label>

                    <div className="inputField">
                        <input type="password" className="input" />
                    </div>
                </div>

                <div className="row">
                    <label className="label">
                        New Password
                    </label>

                    <div className="inputField">
                        <input type="password" className="input" />
                    </div>
                </div>

                <div className="row">
                    <label className="label">
                        Confirm New Password
                    </label>

                    <div className="inputField">
                        <input type="password" className="input" />
                    </div>
                </div>

                <button className="changeBtn" type="submit">Change Password</button>
                <Link className="passForgotten" to="/resetpass">Forgot password?</Link>
            </form>
        </section>
    )
}