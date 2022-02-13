import { Link } from 'react-router-dom';

export default function Header () {

    return (
        <header>
            <Link to="/">
                <img src="ig-logo.png" alt="Instagram" />
            </Link>

            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/inbox">Inbox</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/my-profile">My profile</Link>
            
        </header>
    )
}